import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/Layout/index.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import ExperienceSheetPage from "./pages/ExperienceSheetPage";
import WriteLetterPage from "/src/pages/WriteLetterPage.jsx";
import LoginPage from "./pages/LoginPage";
import OAuthCallback from "./pages/OAuthCallback";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience-sheet" element={<ExperienceSheetPage />} />
          <Route path="/write-letter" element={<WriteLetterPage />} />
          <Route path="/sheet-list" element={<ExperienceSheetPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
