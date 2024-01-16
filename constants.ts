import { StaticImageData } from "next/image";
import { avatarImages } from "./public";

const TEAM_MEMBER_LIST: {
  memberName: string;
  memberPhoto: StaticImageData;
  memberMail: string;
}[] = [
  {
    memberName: "AnkitaSharma",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1520",
  },
  {
    memberName: "MohanDas",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1521",
  },
  {
    memberName: "ShubhamMehta",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1522",
  },
  {
    memberName: "PrashantSingh",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1523",
  },
  {
    memberName: "RajSingh",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1524",
  },
  {
    memberName: "RajeshwerSingh",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1525",
  },
  {
    memberName: "ParthSharma",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1526",
  },
  {
    memberName: "SumitRathode",
    memberPhoto: avatarImages,
    memberMail: "dummymail@1527",
  },
];

export { TEAM_MEMBER_LIST };
