import React from "react";
import mainImg from "../assets/main-header.svg";
import Image from "next/image";
import Menubar from "@/components/Menu/Menubar";
import About from "@/components/About";
import Work from "@/components/Work";

function Page() {
  return (
    <>
      <div className="container">
      <Menubar/>
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={mainImg}
              alt="Main Header"
              className="img-fluid"
              style={{ marginLeft:'7vh' ,height: '50vh', width: '50vh' }}
              />
            <h1 className="fw-semibold fs-1"></h1>
            <About/>
              <Work/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
