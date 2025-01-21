'use client'

import React from "react";
import Image from "next/image";
import mainlogo from "../../assets/main-logo.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Menubar() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="row d-flex py-4 mt-2">
      <div className="col-4 d-flex">
        <Image
          src={mainlogo}
          alt="LOGO"
          className="img-fluid"
          style={{ width: '10vw' }}
          onClick={() => handleNavigate("/")} 
        />
      </div>
      <div className="col-8 d-flex fw-semibold justify-content-end fs-5">
        <Link href="/home" className="mx-4">
          About
        </Link>
        <Link href="/features" className="mx-4">
          Projects
        </Link>
        <Link href="/pricing" className="mx-4">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Menubar;
