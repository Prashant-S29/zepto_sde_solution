import { StaticImageData } from "next/image";
import { avatarImages } from "./public";

const TEAM_MEMBER_LIST: {
  memberName: string;
  memberPhoto: StaticImageData;
  memberMail: string;
}[] = [
  {
    memberName: "Ankita Sharma",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1520",
  },
  {
    memberName: "Mohan Das",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1521",
  },
  {
    memberName: "Shubham Mehta",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1522",
  },
  {
    memberName: "Prashant Singh",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1523",
  },
  {
    memberName: "Raj Singh",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1524",
  },
  {
    memberName: "Rajeshwer Singh",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1525",
  },
  {
    memberName: "Parth Sharma",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1526",
  },
  {
    memberName: "Sumit Rathode",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1527",
  },
];

export { TEAM_MEMBER_LIST };
