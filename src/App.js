import HeroPage from './HeroPage';
import NewsMain from "./components/News/NewsMain";
import GamesMain from "./components/Games/GamesMain";
import BlogsMain from "./components/Blogs/BlogsMain";

import NavBarMain from "./components/Navigation/NavBarMain";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarMain/>
        <Routes>
          <Route path="/" exact element={<HeroPage />}></Route>
          <Route path="news" element={<NewsMain />}></Route>
          <Route path="games" element={<GamesMain />}></Route>
          <Route path="blog" element={<BlogsMain />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
