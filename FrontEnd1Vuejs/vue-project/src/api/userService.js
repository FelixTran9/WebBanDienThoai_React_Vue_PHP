import axios from 'axios';

// Kết nối thật đến Server - Database
const TARGET_URL = 'https://thu6chieunhom2-bandienthoai.kesug.com/users';

// Bọc proxy để vượt rào tường lửa (fallback khi GET bị CORS)
const getProxyUrl = (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`;

export const userService = {
  // Đọc danh sách Data (GET)
  getAll: async () => {
    try {
      const response = await axios.get(TARGET_URL);
      return response.data;
    } catch (directError) {
      try {
        const response = await axios.get(getProxyUrl(TARGET_URL));
        return response.data;
      } catch (proxyError) {
        console.error("Lỗi khi load API Fetch Users Database:", {
          directError,
          proxyError
        });
        throw proxyError;
      }
    }
  }
};
