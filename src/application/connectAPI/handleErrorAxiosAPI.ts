import axios from "axios";

export const handleErrorAxiosAPI = (error: any) => {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || "Unknown API error";

        switch (status) {
            case 400:
                return `${status} Bad Request: ${message}`;
            case 401:
                return `${status} Unauthorized: ${message}`;
            case 403:
                return `${status} Forbidden: ${message}`;
            case 404:
                return `${status} Not Found: ${message}`;
            case 500:
                return `${status} Internal Server Error: ${message}`;
            case 502:
                return `${status} Bad Gateway: ${message}`;
            case 503:
                return `${status} Service Unavailable: ${message}`;
            case 504:
                return `${status} Gateway Timeout: ${message}`;
            case 422:
                return `${status} Unprocessable Entity: ${message}`;
            case 429:
                return `${status} Too Many Requests: ${message}`;
            case 409:
                return `${status} Conflict: ${message}`;
            default:
                return `${status} An unexpected error occurred ${message}`;
        }
    }
    console.error('Unexpected Error:', error);
}
