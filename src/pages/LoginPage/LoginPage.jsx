import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import SignForm from '../../components/SignForm';

export default function LoginPage() {
  const navigate = useNavigate();

  // 로컬 스토리지에 닉네임 있다면 마이페이지로 리다이렉트
  useEffect(() => {
    if (localStorage.getItem('nickname')) navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>오늘의 실패를 기록하고 성장하기</h2>
      <SignForm />
    </div>
  );
}
