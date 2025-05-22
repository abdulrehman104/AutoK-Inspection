import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXRay,
} from "react-icons/fa";

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/abdulrehman104/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/abdulrehman104",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/abdulrehman1104/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/abdul_rehman_104/",
    label: "Instagram",
  },
  { icon: FaXRay, href: "https://x.com/AbdulReehman104", label: "Twitter" },
  // {
  //   icon: FaThreads,
  //   href: "https://threads.net/@abdul_rehman_104",
  //   label: "Threads",
  // },
  // {
  //   icon: TbBrandZoom,
  //   href: "https://calendly.com/abdulreehman/free-consultation-call",
  //   label: "Meeting",
  // },
  // {
  //   icon: SiLinktree,
  //   href: "https://linktr.ee/abdulrehman104",
  //   label: "Linktree",
  // },
];

export const pricing = [
  {
    id: "10201",
    plan: "Basic Plan",
    price: "$37",
    features: [
      "1 Report",
      "Vehicle Report",
      "DMV Title History",
      "Safety Recall Status",
      "Vehicle Specification",
      "Accident Information",
      "Online Listing History",
      "Never Expires",
    ],
  },
  // {
  //   id: "10202",
  //   plan: "Standard Plan",
  //   price: "$65",
  //   features: [
  //     "Body Frame",
  //     "Accidental Checklist",
  //     "Vehicle Report",
  //     "DMV Title History",
  //     "Safety Recall Status",
  //     "Vehicle Specification",
  //     "Odometer Reading",
  //     "Mileage",
  //     "Accidental Information",
  //     "Theft Record",
  //     "Market Price Analysis",
  //     "Stolen Record",
  //     "Never Expires",
  //   ],
  // },
  // {
  //   id: "10203",
  //   plan: "Premium Plan",
  //   price: "$90",
  //   features: [
  //     "Body Frame",
  //     "Accidental Checklist",
  //     "Vehicle Report",
  //     "DMV Title History",
  //     "Safety Recall Status",
  //     "Vehicle Specification",
  //     "Odometer Reading",
  //     "Mileage",
  //     "Accidental Information",
  //     "Theft Record",
  //     "Total Loss Record",
  //     "Online Listing History",
  //     "Fraud And Crime Information",
  //     "Salvage Record",
  //     "Stolen Record",
  //     "Market Price Analysis",
  //     "Never Expires",
  //   ],
  // },
];

// Development client ID
const clientId =
  process.env.PAYPAL_CLIENT_ID ||
  "AZEJPyvW2kaGMzu2t2TtluJXbuzP946oSODsYs4vZjjAeQK0Kj5a1fg-bE-By1XhafgC1bXhKpe4x8ej";
  // "AQsStKntXHJGDVxiJVmp4-J6bNf3M-umQ8M3WEPeUwOEnktYawrNdW0J38KDO8X1ltgIAFLdIhx58LTN";

export const initialOptions = {
  clientId: clientId,
  currency: "USD",
  intent: "capture",
};
