// --------------------------------------------  Service data --------------------------------------------

// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/dapp1.webp";
import choiceImg2 from "@/assets/services/choice/dapp2.webp";
import choiceImg3 from "@/assets/services/choice/dapp3.webp";
import choiceImg4 from "@/assets/services/choice/dapp4.webp";
import choiceImg6 from "@/assets/services/choice/dapp6.webp";
import choiceImg5 from "@/assets/services/choice/dapp5.webp";

export const choiceCardData = [
  {
    img: choiceImg1,
    title: "Custom dApp Development",
    desc: "Our team of professionals will build a custom dApp from the bottom up to perfectly match your business goals.",
  },
  {
    img: choiceImg2,
    title: "dApp Upgrade Services",
    desc: "To improve the probability of your dApp's success, get in-depth dApp consulting focused on comprehensive market and technological analysis.",
  },
  {
    img: choiceImg3,
    title: "dApp Porting",
    desc: "Allow industry experts to create a user interface for your dApp’s that will surprise and entice users, or allow for seamless business integration.",
  },
  {
    img: choiceImg4,
    title: "dApps Mobile Integration",
    desc: "Integrate your dApp with a variety of technologies, including IoT and other classic web technologies, as well as mobile and other mobile devices.",
  },
  {
    img: choiceImg5,
    title: "dApp Testing",
    desc: "Before releasing your dAPP, our staff thoroughly tests it across systems, operating systems, and devices to assure its operation.",
  },
  {
    img: choiceImg6,
    title: "Tron dApp Development",
    desc: "TRON Dapp development solutions for a variety of industries, including healthcare services, fintech, logistics, and more, are available from our extremely experienced and competent experts.",
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
    dis: "Our blockchain development experts are capable of using modern frameworks for building blockchain-based enterprise solutions. We make use of advanced tools, technologies and platforms capable of portraying essential attributes like scalability, resilience, robustness and phenomenal performance.",
    icons: [
      { name: "Node js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
    ],
  },
];

const backend = [
  {
    head: "Backend",
    dis: "Any blockchain project requires a powerful and capable backend for best performance. Our expert blockchain developers use Node.JS to build and maintain backend framework of a growing blockchain project.",
    icons: [{ name: "Node js", icon: Nodejs }],
  },
];

const database = [
  {
    head: "Database",
    dis: "Database allows blockchain solutions to keep a record of every technical detail, which means the database technology must be reliable and capable of scaling up according to requirements. We use MongoDB databases to build blockchain projects.",
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