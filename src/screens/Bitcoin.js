import React, { useEffect, useState, useRef } from "react";
import style from "./style.module.css";
import { Tablee } from "./table";

export const Bitcoin = (props) => {
  const [dataa, setDataa] = useState([]);

  return (
    <>
      <div className={style.header}>
        <h1>Valoro</h1>
        <input placeholder="Search Recently Address" className={style.input} />
      </div>
      <div className={style.title}>
        <h1>
          Do not pay ransoms. Extortion emails are 100% fake. More information »
        </h1>
      </div>
      <div className={style.Bitcoin}>
        <h1>Blockchain addresses Abuse Database</h1>
        <h2>
          Report history for{" "}
          <span style={{ fontWeight: "bold" }}>
            1AjZPMsnmpdK2Rv9KQNfMurTXinscVro9V
          </span>
        </h2>
      </div>
      <div className={style.table}>
        <Tablee />
      </div>
      <div className={style.footer}>
        <h1>info@valoro.xyz</h1>
      </div>
    </>
  );
};
