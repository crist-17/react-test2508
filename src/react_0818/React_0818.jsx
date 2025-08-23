import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import PostWritePage from "./PostWritePage";
import PostViewPage from "./PostViewPage";

export default function React_0818() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="post-write" element={<PostWritePage />} />
      <Route path="post/:postId" element={<PostViewPage />} />
    </Routes>
  );
}
