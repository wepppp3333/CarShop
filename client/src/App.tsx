import "./styles/global_style.css";
import { Global } from "@emotion/react";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { GLOBAL_STYLES } from "./styles/global.styles";
import Header from "./pages/HeaderComponent/Header";
import Main from "./pages/MainComponent/Main";
import Favorite from "./pages/FavoritesComponent/Favorite";

const App: FC = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/favorite"
          element={<Favorite />}
        ></Route>
        <Route
          path="/"
          element={<Main />}
        ></Route>
      </Routes>

      <Global styles={GLOBAL_STYLES} />
    </>
  );
};

export default App;
