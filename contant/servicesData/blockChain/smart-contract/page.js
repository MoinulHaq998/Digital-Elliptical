// --------------------------------------------  Service data --------------------------------------------

// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/smart1.webp";
import choiceImg2 from "@/assets/services/choice/smart2.webp";
import choiceImg3 from "@/assets/services/choice/smart3.webp";
import choiceImg4 from "@/assets/services/choice/smart4.webp";
import choiceImg6 from "@/assets/services/choice/smart6.webp";
import choiceImg5 from "@/assets/services/choice/smart5.webp";

export const choiceCardData = [
  {
    img: choiceImg1,
    title: "Digital Smart Contract Architecture",
    desc: "We lay out the most ideal frameworks and the skeleton for the development of smart contracts for your business.",
  },
  {
    img: choiceImg2,
    title: "Smart Contract Design and Development",
    desc: "Being relatively new, our blockchain industry experts design and launch the perfect smart contracts tailored for your venture.",
  },
  {
    img: choiceImg3,
    title: "Smart Contract Audit",
    desc: "Already have a smart contract established? Find out how effective and legit it is with our audit services.",
  },
  {
    img: choiceImg4,
    title: "Smart Contracts Optimization",
    desc: "Make use of our smart contracts optimization services to refine your smart contracts for best accuracy and efficiency.",
  },
  {
    img: choiceImg5,
    title: "Digital Wallet for Smart Contact",
    desc: "Get an exclusive blockchain-powered digital wallet developed for all your smart contracts transaction purposes.",
  },
  {
    img: choiceImg6,
    title: "Ethereum & Hyperledger Smart Contract Development",
    desc: "Have a decentralized medium in place for the most transparent ways of doing business with Ethereum and Hyperledger Smart Contract Development.",
  },
];

//---------------------------------- Choice End ----------------------------------------

// ----------------------------------SelectedTabs Start---------------------
import Nodejs from "@/assets/All-Icons/nodejs.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";

const framwork = [
  {
    head: "Framework",
    dis: "We deploy the most secure and sturdy blockchain framework for your hyperledger smart contracts development.",
    icons: [
      { name: "Node js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
    ],
  },
];

const backend = [
  {
    head: "Backend",
    dis: "Smart contracts are all about being reliable and fool-proof and our airtight backend architectures ensure just that.",
    icons: [{ name: "Node js", icon: Nodejs }],
  },
];

const database = [
  {
    head: "Database",
    dis: "The database architecture we develop as a smart contract development company sets benchmarking standards in the market, giving your Ethereum smart contract development solutions app the edge that it needs to outdo its competitors.",
    icons: [{ name: "Mango-DB", icon: MongoDB }],
  },
];

export const tabsData = {
  framwork,
  backend,
  database,
};

export const tabsApps = [
  { name: "Fr", spanText: "amwork", tab: "framwork" },
  { name: "Ba", spanText: "ckend", tab: "backend" },
  { name: "Da", spanText: "tabase", tab: "database" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardDataStart  --------------------------

// ---------------------------Faq Start ----------------------------------

export const faqs = [
  {
    question: "Do you support the most recent iOS versions? ",
    answer:
      "Yes, we create iOS applications that work with the most latest iOS version. Our staff is always up to speed on the newest developments in the iOS operating system.",
  },
  {
    question:
      "What factors should you think about while selecting an iOS app development firm?",
    answer:
      "When picking an iOS development firm, there are numerous factors to examine, such as development process, prior projects, personnel strength, and so on.",
  },
  {
    question: "Is it possible for me to create my own iOS app?",
    answer:
      "Xcode and Swift are used to create iOS apps. With a free Apple Developer Account, you may also instal your own iOS apps on your iPhone or iPad using Xcode.",
  },
  {
    question: "What is the cost of developing an iPhone application?",
    answer:
      "The cost of developing an iPhone app is determined by a variety of factors, including the development platform, app categories, app complexity, and amount of features.",
  },
  {
    question: "In which categories have you created mobile apps?",
    answer:
      "Our staff has experience developing a variety of mobile applications, including media and entertainment, travel, banking, social networking, and hospitals, among others.",
  },
  {
    question: "What industries have you provided services for?",
    answer:
      "Many company owners in areas such as eCommerce, education, healthcare, media, retail, NGOs, and others have benefited from our services.",
  },
  {
    question: "Would you be willing to work on application backends as well?",
    answer:
      "Yes, we offer a reliable and scalable Mobile Application back-end, as well as a custom API that allows you to easily manage the app's process and data access.",
  },
  {
    question: "Why should I choose Digital Elliptical to create Android apps?",
    answer:
      "We have 9 years of experience developing iPhone apps. As a mobile app development business, we can provide exceptional standard mobile applications in every category.",
  },
];
// ---------------------------Faq End ----------------------------------

// --------------Review ------------------------