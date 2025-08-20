import React from 'react';
import MainPage from './MainPage';
import PostViewPage from './PostViewPage';
import PostWritePage from './PostWritePage';

import { Routes, Route } from 'react-router-dom';

const React_0818 = () => {
    return (
        <>
        <h2>미니블로그 생성</h2>
       
        <Routes>
          <Route index element={<MainPage />} />   
             <Route path="post-write" element={<PostWritePage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
      
           




        </>
    );
};

export default React_0818;