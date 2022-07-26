import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Champions from "../Champions/Champions";
import ChampionView from "../ChampionView/ChampionView";
import Items from "../Items/Items";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemView from "../ItemView/ItemView";
import Comps from "../Comps/Comps";
const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/DNICH_TFT" element={<Home />} />
          <Route exact path="/champions" element={<Champions />} />
          <Route path="/champions/:champ" element={<ChampionView />} />
          <Route exact path="/items" element={<Items />} />
          <Route path="/items/:item" element={<ItemView />} />
          <Route path="/comps" element={<Comps />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
