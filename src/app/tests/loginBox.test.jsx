import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginBox from '../components/auth/LoginBox';
import { useRouter } from 'next/navigation';
import auth from '../../../services/auth';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock('../../../services/auth', () => ({
    login: jest.fn(),
}));

describe('LoginBox', () => {
    const push = jest.fn();

    beforeEach(() => {
        useRouter.mockReturnValue({ push });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders LoginBox component', () => {
        render(<LoginBox />);
        expect(screen.getByText('Login to your account')).toBeInTheDocument();
    });

    test('shows error message when username or password is empty', () => {
        render(<LoginBox />);
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByText('*Please fill in both username and password fields.')).toBeInTheDocument();
    });

    test('calls auth.login and redirects on successful login', async () => {
        auth.login.mockResolvedValueOnce();
        render(<LoginBox />);
        fireEvent.change(screen.getByPlaceholderText(''), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText('', { selector: 'input[type="password"]' }), { target: { value: 'password' } });
        fireEvent.click(screen.getByText('Login'));
        await waitFor(() => expect(auth.login).toHaveBeenCalledWith('testuser', 'password'));
        await waitFor(() => expect(push).toHaveBeenCalledWith('/home'));
    });

    test('shows error message on failed login', async () => {
        auth.login.mockRejectedValueOnce(new Error('Invalid credentials'));
        render(<LoginBox />);
        fireEvent.change(screen.getByPlaceholderText(''), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText('', { selector: 'input[type="password"]' }), { target: { value: 'password' } });
        fireEvent.click(screen.getByText('Login'));
        await waitFor(() => expect(auth.login).toHaveBeenCalledWith('testuser', 'password'));
        expect(screen.getByText('Incorrect username and/or password. Please try again.')).toBeInTheDocument();
    });

    test('redirects to password reset page on forgot password click', () => {
        render(<LoginBox />);
        fireEvent.click(screen.getByText('Forgot Password?'));
        expect(push).toHaveBeenCalledWith('/passWordResetRequest');
    });

    test('redirects to signup page on signup click', () => {
        render(<LoginBox />);
        fireEvent.click(screen.getByText('Sign up now!'));
        expect(push).toHaveBeenCalledWith('/signup');
    });
});
