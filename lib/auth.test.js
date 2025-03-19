import { getUser, verifyUser } from "./auth";
import prisma from "./prisma";
import { NextResponse } from "next/server";
import jwtDecode from "jwt-decode";

jest.mock("./prisma", () => ({
  user: {
    findUnique: jest.fn(),
  },
}));
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));
jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

describe("getUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return user data when user exists", async () => {
    const mockUser = {
      name: "testuser",
      plants: [
        {
          id: 1,
          name: "Plant1",
          reminders: [],
          tags: [],
        },
      ],
      wishlist: {
        items: [],
      },
    };

    prisma.user.findUnique.mockResolvedValue(mockUser);

    const result = await getUser("testuser");

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { name: "testuser" },
      include: {
        plants: {
          include: {
            reminders: true,
            tags: true,
          },
        },
        wishlist: {
          include: { items: true },
        },
      },
    });
    expect(result).toEqual(mockUser);
  });

  it("should return null when user does not exist", async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    const result = await getUser("nonexistentuser");

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { name: "nonexistentuser" },
      include: {
        plants: {
          include: {
            reminders: true,
            tags: true,
          },
        },
        wishlist: {
          include: { items: true },
        },
      },
    });
    expect(result).toBeNull();
  });

  it("should throw an error when there is a database issue", async () => {
    prisma.user.findUnique.mockRejectedValue(new Error("Database error"));

    await expect(getUser("testuser")).rejects.toThrow("Failed to fetch user");

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { name: "testuser" },
      include: {
        plants: {
          include: {
            reminders: true,
            tags: true,
          },
        },
        wishlist: {
          include: { items: true },
        },
      },
    });
  });
});

describe("verifyUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return success when token is valid and matches username", async () => {
    const mockRequest = {
      headers: {
        get: jest.fn().mockReturnValue("Bearer validtoken"),
      },
    };
    jwtDecode.mockReturnValue({ name: "testuser" });

    const result = await verifyUser(mockRequest, "testuser");

    expect(result).toEqual({ success: true });
  });

  it("should return unauthorized when token is missing", async () => {
    const mockRequest = {
      headers: {
        get: jest.fn().mockReturnValue(null),
      },
    };

    const result = await verifyUser(mockRequest, "testuser");

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: "Unauthorized" },
      { status: 401 }
    );
  });

  it("should return unauthorized when token is invalid", async () => {
    const mockRequest = {
      headers: {
        get: jest.fn().mockReturnValue("Bearer invalidtoken"),
      },
    };
    jwtDecode.mockImplementation(() => {
      throw new Error("Invalid token");
    });

    const result = await verifyUser(mockRequest, "testuser");

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  });

  it("should return forbidden when username does not match", async () => {
    const mockRequest = {
      headers: {
        get: jest.fn().mockReturnValue("Bearer validtoken"),
      },
    };
    jwtDecode.mockReturnValue({ name: "otheruser" });

    const result = await verifyUser(mockRequest, "testuser");

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: "Unauthorized user" },
      { status: 403 }
    );
  });
});
