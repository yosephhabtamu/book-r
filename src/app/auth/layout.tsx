"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="tw-h-screen tw-flex tw-align-center tw-justify-center tw-bg-gray-900">
      <div className="tw-w-1/2 tw-bg-dark-blue tw-flex tw-items-center tw-justify-center">
        <div className="tw-text-white">
          <Image
            src="/images/books-white.png"
            className=""
            alt="Book Rent"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="tw-w-1/2 tw-bg-white tw-flex-1 tw-flex tw-h-screen tw-align-center">
        {children}
      </div>
    </div>
  );
}
