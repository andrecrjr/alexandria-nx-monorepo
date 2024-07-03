import axios from "axios";

const request = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
  withCredentials: true,
});

const refreshAccessToken = async () => {
  try {
    const data = await request.post("/auth/refresh");
    localStorage.setItem("accessToken", data.data.accessToken);
    return data;
  } catch (error) {
    console.error("Erro ao atualizar o token:", error);
    return null;
  }
};

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response && // Check for valid response object
      error.response.status === 401 &&
      originalRequest._retry !== true
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          // Update authorization header with new token
          console.log(newAccessToken.data);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken.data.accessToken}`;
          return request(originalRequest);
        }
      } catch (refreshError) {
        console.error("Error refreshing access token:", refreshError);
      }
    }

    // Handle other error scenarios or return the original error
    return Promise.reject(error);
  },
);

export default request;
