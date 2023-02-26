import { useEffect, useState } from 'react';

/**
 * delay 시간 내에 value가 바뀌면 delay시간 초기화
 * 마지막 입력 후 delay 시간이 지나면 value가 업데이트 됨
 * 매 입력마다 요청 보내면 성능 저하 우려
 * @param {string} value
 * @param {number} delay
 * @returns
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, [delay]);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
