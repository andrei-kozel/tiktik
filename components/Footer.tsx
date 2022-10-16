import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

type Props = {
  items: string[];
  mt: boolean;
};

const List = ({ items, mt }: Props) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-gray-400 text=sm hover:underline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt={true} />
      <List items={footerList3} mt={true} />
      <p className="mt-6 text-gray-400 text-sm">
        {new Date().getFullYear()} TikTik
      </p>
    </div>
  );
};

export default Footer;
