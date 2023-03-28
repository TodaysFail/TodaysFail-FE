import axios from 'axios';

// 사용자 정의 구성을 사용하는 axios 인스턴스 생성
export default axios.create({
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
