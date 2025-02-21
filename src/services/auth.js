import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next/client";
import { TOKEN_KEY } from "@/constants";
import { jwtDecode } from "jwt-decode";

async function login(username, password) {
  const { data: token } = await axios.post("/api/auth/login", {
    username,
    password,
  });
  setCookie(TOKEN_KEY, token, {
    secure: process.env.NODE_ENV === "production",
  });
  return token;
}

function logout() {
  deleteCookie(TOKEN_KEY);
  deleteCookie("user");
}

function getCurrentUser() {
  try {
    const token = getCookie(TOKEN_KEY);
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
