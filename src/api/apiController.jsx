import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

// 사용자 정의 구성을 사용하는 axios 인스턴스 생성
export default axios.create({
  // baseURL: BASE_URL,
  baseURL: '',

  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer`, 토큰
  },
});

// 요청 인터셉터 추가
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 응답 인터셉터 추가
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
