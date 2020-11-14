import React from "react";
import { RiLoginBoxFill, RiQuestionLine } from "react-icons/ri";

export const SignedOutLinks = [
  {
    title: "login",
    path: "/login",
    icon: <RiLoginBoxFill />,
    cName: "subnavbar__item",
    acName: "subnavbar__itemactive",
  },
  {
    title: "about",
    path: "/about",
    icon: <RiQuestionLine />,
    cName: "subnavbar__item",
    acName: "subnavbar__itemactive",
  },
];
