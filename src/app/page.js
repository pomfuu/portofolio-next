import React from "react";
import mainImg from "../assets/main-header.svg";
import Image from "next/image";

function Page() {
  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <Image
        src={mainImg}
        alt="Main Header"
        className="img-fluid"
        style={{display:"block", marginLeft: '36vw', marginTop: '1vw' }}
      />
      <h1 className="fw-semibold fs-1">HELLO</h1>
    </div>
  );
}

export default Page;
