import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPage from '../pages/MyPage/MyPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecordPage from '../pages/RecordPage/RedcordPage';
import ReceiptPage from '../pages/ReceiptPage/ReceiptPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/recordPage' element={<RecordPage />} />
        <Route path='/receipt' element={<ReceiptPage />} />
      </Routes>
    </BrowserRouter>
  );
}
