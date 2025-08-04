// --------------------------------------------  Service data --------------------------------------------

// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/crypto1.webp";
import choiceImg2 from "@/assets/services/choice/crypto2.webp";
import choiceImg3 from "@/assets/services/choice/crypto3.webp";
import choiceImg4 from "@/assets/services/choice/crypto4.webp";
import choiceImg6 from "@/assets/services/choice/crypto6.webp";
import choiceImg5 from "@/assets/services/choice/crypto5.webp";

export const choiceCardData = [
  {
    img: choiceImg1,
    title: "Crypto Coin Development",
    desc: "Applications to monitor and keep track of the cryptocurrencies being mined.",
  },
  {
    img: choiceImg2,
    title: "Cryptocurrency Wallet Development",
    desc: "For a hassle-free cryptocurrency trading experience, our digital crypto-wallets are inevitable.",
  },
  {
    img: choiceImg3,
    title: "Mining Crypto Coins",
    desc: "Cloud, CPU, GPU and more resources to mine cryptocurrencies for your business.",
  },
  {
    img: choiceImg4,
    title: "Cryptocurrency Exchange App Development",
    desc: "Get a super-resourceful cryptocurrency exchange platform you could run from your smartphone developed with us.",
  },
  {
    img: choiceImg5,
    title: "Cryptocurrency ICO Development",
    desc: "Raising funds for your Initial Coin Offering? Our ICO development services are what you need.",
  },
  {
    img: choiceImg6,
    title: "Exchange Software Development",
    desc: "Seamless trading requires an equally seamless cryptocurrency exchange app. Well, we develop and roll out the best.",
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
    dis: "We deploy the most secure and sturdy blockchain framework for the development of your cryptocurrency app. This allows you to monitor and offer the best cryptocurrency exchange services to your customers.",
    icons: [
      { name: "Node js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
    ],
  },
];

const backend = [
  {
    head: "Backend",
    dis: "Cryptocurrency apps are all about precision, speed and functionalities and our airtight backend architectures ensure just that.",
    icons: [{ name: "Node js", icon: Nodejs }],
  },
];

const database = [
  {
    head: "Database",
    dis: "The database architecture we develop set benchmarking standards in the market, giving your Ethereum cryptocurrency solutions app the edge that it needs to outdo its competitors.",
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