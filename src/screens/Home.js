import React, { useEffect, useState, useRef } from "react";
import style from "./style.module.css";
import image from "./work-2.svg";
import image2 from "./work-1-1.svg";
import image3 from "./work-4.svg";

export const Home = (props) => {
  const [dataa, setDataa] = useState([]);

  return (
    <>
      <div className={style.header}>
        <h1>Valoro</h1>
        {/* <h2>Create Report</h2>
        <h2>View Reports</h2>
        <h2>FAQ</h2>
        <h2>API Docs</h2>
        <h2>View on Github</h2> */}
        <input placeholder="Search Recently Address" className={style.input} />
        {/* <button className={style.buttonLogin}>Login</button>
        <button className={style.buttonRegister}>Register</button> */}
      </div>
      <div className={style.title}>
        <h1>
          Do not pay ransoms. Extortion emails are 100% fake. More information »
        </h1>
      </div>
      <div className={style.dis}>
        <h1>Cyrpto Abuse Database</h1>
        <h2>
          Tracking blockchain addresses used by ransomware, blackmailers,
          fraudsters, etc.
        </h2>
        <h2>
          Our mission to track crypto donation to African Organization. To make
          sure that donation reach to people who deserve.
        </h2>
        {/* <h2>omer diss</h2> */}
        <button className={style.buttonFile}>File report</button>
        <button className={style.buttonView}>view report</button>
      </div>
      <div className={style.continerReport}>
        <div>
          <h1>Report Addresses</h1>
          <h2>
            <span style={{ fontWeight: "700" }}>Report Bitcoin Addresses</span>{" "}
            used by criminals and hackers. By reporting bitcoin addresses used
            by ransomware, you create a permanent public record of the attack.{" "}
          </h2>
          <button className={style.buttonFileReport}>File report</button>
        </div>
        <div>
          <h1>Check Report History</h1>
          <h2>
            <span style={{ fontWeight: "700" }}>Check report history</span> to
            see if address has been linked to a cyber attack. Criminals try
            laundering bitcoin to sever the connection between the attack and
            their illicit proceeds.
          </h2>
          <button className={style.buttonFileReport}>File report</button>
        </div>
        <div>
          <h1>Monitor Stolen token</h1>
          <h2>
            <span style={{ fontWeight: "700" }}>Monitor stolen bitcoin</span> on
            the public ledger to see when the hackers try cashing out. Get
            alerts when coins are moved out of flagged bitcoin addresses.
          </h2>
          <button className={style.buttonFileReport}>File report</button>
        </div>
      </div>
      <div className={style.searchAddress}>
        <h1 style={{ marginTop: 70 }}>Lookup Address Now</h1>
        <div className={style.inputSearch}>
          <input />
          <div onClick={() => props?.history?.push?.("Bitcoin")}>
            <h1>search</h1>
          </div>
        </div>
      </div>
      <div className={style.work}>
        <h1>How does it work ?</h1>
        <div className={style.doesWork}>
          {/* <h1>omer</h1> */}
          <div className={style.continerWork}>
            <img src={image} style={{ height: 70, width: 70 }} />
            <h1>Victims of crypto crimes submit details of their case</h1>
          </div>
          <div className={style.continerWork}>
            <img
              src={image2}
              style={{ height: 70, width: 70, marginTop: 25 }}
            />
            <h1>
              We flag the reported cases to alert a network of blockchain
              services in order to prevent them receiving the defrauded crypto
            </h1>
          </div>
          <div className={style.continerWork}>
            <img src={image3} style={{ height: 70, width: 70 }} />
            <h1>
              Claims will be visible to our investigation partners that may
              contact the victim to assist in the recovery of the stolen assets
            </h1>
          </div>
        </div>
      </div>
      <div className={style.Contact}>
        <h1>Contact</h1>
        <h2>
          If you are an investigation agency or law office and you would like to
          join the Reclaim Crypto Global Network of Investigators, please
          <br />
          contact us at
          <a href="info@valoro.xyz"> info@valoro.xyz </a>
        </h2>
        <h2>
          If you still have questions related to our service or submitting the
          claim process, please contact us directly at
          <br />
          <a href="info@valoro.xyz"> info@valoro.xyz </a>
        </h2>
      </div>
      <div className={style.Contact}>
        <h1>About Us</h1>
        <h2>
          We track transactions to charity organization to Africa to make sure
          that donation reach to the people who deserve.
          <br />
        </h2>
        <h2>
          <span style={{ fontWeight: "bold" }}> Valoro</span> team has more than
          5 years experience in blockchain.
          <br />
        </h2>
      </div>
      <div className={style.footer}>
        <h1>info@valoro.xyz</h1>
      </div>
    </>
  );
};
