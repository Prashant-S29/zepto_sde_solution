import NEW_USER_PAGE from "@/clientComponents/tagInputTwo";
import Link from "next/link";
import React from "react";

const HOME = () => {
  return (
    <>
      <div className="flex  w-full min-h-screen p-[50px]">
        <div className="w-full">
          <div>
            <span className="text-[22px] font-black">
              Solution for SDE 1 role at Zepto
            </span>
          </div>
          <div className="w-full mt-[20px] border-b border-black p-[10px]">
            <NEW_USER_PAGE />
          </div>

          <div className="my-[20px]">
            <div>
              <span className="text-[14px] font-bold">Featurs</span>
            </div>
            <div>
              <span className="text-[14px] font-bold">
                1. TypeSafe, fully built in TypeScript using NextJS 14
              </span>
            </div>
            <div>
              <span className="text-[14px] font-bold">2. Clean Code</span>
            </div>
            <div>
              <span className="text-[14px] font-bold">3. No dependencies</span>
            </div>
          </div>

          <div className="my-[20px]">
            <div>
              <span className="text-[14px] font-bold">
                Blockers - Couldn{"'"}t able figure out the logic for removing
                selected users using backspace key.
              </span>
            </div>
          </div>
          <div className="my-[20px]">
            <div>
              <span className="text-[14px] font-bold">
                I know, that red button doesn{"'"}t fit with design. Didn{"'"}t
                got enough time 😅.
              </span>
            </div>
          </div>
          <div className="my-[20px]">
            <div>
              <span className="text-[14px] font-bold">
                Who am I? <br /> I am 2 yrs freelancer web developer and
                designer experties in frontend. My core skills revolves around
                MERN.
                <br />
                <span className="bg-yellow-300">
                  <u>Looking for a positive call !!</u>
                </span>
              </span>
            </div>
          </div>

          <div className="mt-[20px]">
            <div>
              <span className="text-[14px] font-bold">
                Portfolio:{" "}
                <Link
                  href="https://code-prashant.vercel.app/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Code Prashant
                </Link>
              </span>
            </div>
            <div>
              <span className="text-[14px] font-bold">
                LinkedIn:{" "}
                <Link
                  href="https://www.linkedin.com/in/prashant-singh-529391250/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Prashant Singh
                </Link>
              </span>
            </div>
            <div>
              <span className="text-[14px] font-bold">
                Source Code:{" "}
                <Link
                  href="https://github.com/Prashant-S29/zepto_sde_solution.git"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  GitHub
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOME;
