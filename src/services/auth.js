import { post } from "../utils/fetch";

export const login = async (data) =>
    post('login-api', data, true);

export const login_otp = async (data) =>
    post('login-otp-verification', data, true);

export const resend_otp = async (data) =>
    post('resend-user-otp', data, true);

export const register = async (data) =>
    post('user-registration', data, true);

export const otp_verify = async (data) =>
    post('user-otp-verification', data, true);
