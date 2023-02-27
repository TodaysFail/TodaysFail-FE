import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import MyPage from '../pages/MyPage/MyPage';
import ReceiptPage from '../pages/ReceiptPage/ReceiptPage';
import RecordPage from '../pages/RecordPage/RecordPage';
import SharePage from '../pages/SharePage/SharePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/recordPage' element={<RecordPage />} />
        <Route path='/receipt' element={<ReceiptPage />} />
        <Route path='/receipt/:receiptId' element={<SharePage />} />
      </Routes>
    </BrowserRouter>
  );
}
