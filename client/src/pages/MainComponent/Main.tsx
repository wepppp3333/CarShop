import MainTop from "./Pages/MainTop";
import Cars from "../Cars/Cars";
import { FC, useState } from "react";
import './main.css'

const Main: FC = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="main">
      <MainTop
        search={search}
        setSearch={setSearch}
      ></MainTop>
      <Cars search={search} />
    </div>
  );
};

export default Main;
