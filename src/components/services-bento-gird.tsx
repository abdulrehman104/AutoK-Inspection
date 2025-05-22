import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import { CgWebsite } from "react-icons/cg";
import {
  FaCarCrash,
  FaSearch,
  FaBalanceScale,
} from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const ServicesBentoGrid = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      icon: <CgWebsite className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Dependable Data Sourcing",
      description:
        "We meticulously curate information from reputable sources to uphold the utmost accuracy and reliability in our Vehicle Identification Number (VIN) reports.",
    },
    {
      icon: <FaCarCrash className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Comprehensive Analysis",
      description:
        "Our reports offer in-depth insights into a vehicle's past, encompassing records of accidents, title status, ownership lineage, and more.",
    },
    {
      icon: <SiBrandfolder className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Specialized Expertise",
      description:
        "Our dedicated team of automotive professionals is committed to delivering outstanding service and guidance, facilitating a seamless experience throughout the vehicle procurement process.",
    },
    {
      icon: <FaSearch className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Thorough Vehicle Inspection",
      description:
        "Conducting a meticulous examination of both the mechanical and cosmetic aspects of the vehicle, we meticulously document any existing issues or potential concerns.",
    },
    {
      icon: <FaBalanceScale className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Accurate Valuation",
      description:
        "Utilizing various factors such as age, mileage, and overall condition, we provide an informed estimate of the vehicle's current market worth.",
    },
    {
      icon: <MdOutlineVerifiedUser className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Title and Lien Verification",
      description:
        "We conduct thorough checks to identify any existing liens associated with the vehicle title, thereby highlighting potential financial liabilities linked to the purchase.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="h-10 w-10 md:h-14 md:w-14" />,
      title: "Fraud Prevention & Authenticity Check",
      description:
        "We verify the authenticity of vehicle documents to prevent fraud and ensure a legitimate purchase experience.",
    },
  ];

  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          icon={item.icon}
          title={item.title}
          description={item.description}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};
