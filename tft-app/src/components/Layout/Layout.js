import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Champions from "../Champions/Champions";
import ChampionView from "../ChampionView/ChampionView";
import Items from "../Items/Items";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemView from "../ItemView/ItemView";
import Comps from "../Comps/Comps";
import Quiz from "../Quiz/Quiz";
import QuizFinal from "../Quiz/QuizFinal/QuizFinal";
const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/DNICH_TFT" element={<Home />} />
          <Route exact path="/DNICH_TFT/champions" element={<Champions />} />
          <Route path="/DNICH_TFT/champions/:champ" element={<ChampionView />} />
          <Route exact path="/DNICH_TFT/items" element={<Items />} />
          <Route path="/DNICH_TFT/items/:item" element={<ItemView />} />
          <Route path="/DNICH_TFT/comps" element={<Comps />}></Route>
          <Route path="/DNICH_TFT/quiz" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
