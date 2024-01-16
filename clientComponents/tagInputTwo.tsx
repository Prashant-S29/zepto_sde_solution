"use client";

import { TEAM_MEMBER_LIST } from "@/constants";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

const NEW_USER_PAGE = () => {
  const [showUserList, setShowUserList] = useState(false);
  const [inputMemberName, setInputMemberName] = useState("");
  const [selectedMemberList, setSelectedMemberList] = useState<string[]>([]);
  const [filterMemberList, setFilterMemberList] = useState<
    {
      memberName: string;
      memberPhoto: StaticImageData;
      memberMail: string;
    }[]
  >();

  // removing selected member
  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target.classList.contains("newMemberDeleteButton-class")) {
        e.target.parentNode.remove();
        const unselectMember =
          e.target.parentNode.querySelector("span").innerText;
        const newList = selectedMemberList.filter(
          (item) => item !== unselectMember
        );
        setSelectedMemberList(newList);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSelectTeamMember = (
    newMemberPhoto: StaticImageData,
    newMemberName: string
  ) => {
    const selectedTeamMemberBox = document.getElementById(
      "selectedTeamMemberBox"
    );
    const inputField = document.getElementById("inputField");

    // creating new member
    const newTeamMemberBox = document.createElement("div");
    const newTeamMemberPhoto = document.createElement("img");
    const newTeamMemberName = document.createElement("span");
    const newMemberDeleteButton = document.createElement("button");

    // providing classes to new member
    newTeamMemberBox.classList.add("newMemberBox-class");
    newTeamMemberPhoto.classList.add("newMemberPhoto-class");
    newTeamMemberName.classList.add("newMemberName-class");
    newMemberDeleteButton.classList.add("newMemberDeleteButton-class");

    // adding data for new member
    newTeamMemberPhoto.src = newMemberPhoto.src;
    newTeamMemberName.innerHTML = newMemberName;
    newMemberDeleteButton.innerHTML = "x";

    newTeamMemberBox.appendChild(newTeamMemberPhoto);
    newTeamMemberBox.appendChild(newTeamMemberName);
    newTeamMemberBox.appendChild(newMemberDeleteButton);

    selectedTeamMemberBox?.insertBefore(newTeamMemberBox, inputField);

    // adding new member to member list
    selectedMemberList.push(newMemberName);

    setShowUserList(false);
    setInputMemberName("");
  };

  const handleInputChange = (e: any) => {
    setInputMemberName(e.target.value);

    const filtered = TEAM_MEMBER_LIST.filter((member) =>
      member.memberName.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilterMemberList(filtered);
  };

  const handleInputFieldClick = (e: any) => {
    const filtered = TEAM_MEMBER_LIST.filter((member) =>
      member.memberName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterMemberList(filtered);
    setShowUserList(true);
  };

  return (
    <>
      <div>
        <div
          id="selectedTeamMemberBox"
          className="flex items-center flex-wrap gap-2"
        >
          <div id="inputField">
            <input
              type="text"
              placeholder="Add new member.."
              className="outline-none text-[14px]"
              value={inputMemberName}
              onChange={handleInputChange}
              onClick={handleInputFieldClick}
            ></input>
            {showUserList && (
              <div
                className=" absolute max-h-[250px] bg-gray-100 shadow-md  w-fit rounded-[7px] overflow-y-scroll"
                onClick={() => {
                  setShowUserList(false);
                }}
              >
                <div
                  className="absolute right-0 cursor-pointer"
                  onClick={() => {
                    setShowUserList(false);
                  }}
                >
                  <span className="text-red-500 font-black">x</span>
                </div>
                {filterMemberList?.map((memberDetails, index) => (
                  <>
                    {!selectedMemberList.includes(memberDetails.memberName) && (
                      <div
                        key={index}
                        className="flex gap-2 mb-2 last-of-type:mb-0 hover:bg-gray-300 p-[5px] rounded-[7px] cursor-pointer"
                        onClick={() => {
                          handleSelectTeamMember(
                            memberDetails.memberPhoto,
                            memberDetails.memberName
                          );
                        }}
                      >
                        <div>
                          <Image
                            src={memberDetails.memberPhoto}
                            alt="memberPhoto"
                            className="w-[30px] aspect-square object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <span className="text-[13px] font-bold">
                            {memberDetails.memberName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[12px] font-medium text-gray-600">
                            {memberDetails.memberMail}
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NEW_USER_PAGE;
