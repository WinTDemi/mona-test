import axios, { AxiosRequestHeaders, Method } from "axios";
import { handleSuccessAPI } from "./handleSuccessAPI";
import { handleErrorAxiosAPI } from "./handleErrorAxiosAPI";

interface RequestAPIParams {
    path: string;
    method: Method; // 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';
    headers?: AxiosRequestHeaders;
    body?: any;
    timeout?: number;
}

export const requestAPI = async <T>({ path, method, headers = {} as AxiosRequestHeaders, body = null, timeout = 1000 }: RequestAPIParams): Promise<T> => {
    try {
        // axios chỉ nhận 200 - 299 là thành công từ HTTP status nếu khác sẽ nhảy sang catch
        const response = await axios({
            url: `${import.meta.env.VITE_BASE_API_URL}${path}`,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            data: body,
            timeout: timeout,
        });

        // nếu không có status thì không chạy handleSuccessAPI
        // nếu status 200 thì không chạy handleSuccessAPI
        response?.status !== 200 && handleSuccessAPI(response?.status);

        return response.data as T;
    } catch (error) {
        // kiểm ma lỗi và tra về message lỗi cho TanStack
        throw new Error(handleErrorAxiosAPI(error));
    }
};