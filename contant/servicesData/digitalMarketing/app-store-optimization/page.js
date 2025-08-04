// --------------------------------------------  Service data --------------------------------------------

// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/1.webp";
import choiceImg2 from "@/assets/services/choice/2.webp";
import choiceImg3 from "@/assets/services/choice/3.webp";
import choiceImg4 from "@/assets/services/choice/4.webp";
import choiceImg6 from "@/assets/services/choice/6.webp";
import choiceImg5 from "@/assets/services/choice/5.webp";

export const choiceCardData = [
  {
    img: choiceImg1,
    title: "React Interactive UI Development",
    desc: " With our React Interactive UI Developments, you can provide your users an immersive experience and a taste of the future.",
  },
  {
    img: choiceImg5,
    title: "React Front End App Development",
    desc: "Our React frontend app development delivers the finest user experience, aesthetics, and client-side functionalities, all perfectly optimized.",
  },
  {
    img: choiceImg2,
    title: "React Native Mobile App Design",
    desc: "Every suggestion for a mobile application that comes to us is uniquely conceived and distinctively produced.",
  },
  {
    img: choiceImg6,
    title: "React Native Migration",
    desc: "For increased scalability, all of your data and features were effortlessly transferred from your database to React Native.",
  },
  {
    img: choiceImg3,
    title: "Custom Hybrid Mobile App Development",
    desc: "Want the features of an app in your browser, or the other way around? The best option is to design a hybrid mobile app using our specialised approach.",
  },
  {
    img: choiceImg4,
    title: "React Native Apps Maintenance & Support",
    desc: "The very best post-live support for your app for all time, from patches to app updates.",
  },
];

//---------------------------------- Choice End ----------------------------------------

import App from "@/assets/All-Icons/app.svg";
import Keywords from "@/assets/All-Icons/keyword-palnner.svg";
import location from "@/assets/All-Icons/location.svg";
import Tracking from "@/assets/All-Icons/test-rail.svg";
import Download from "@/assets/All-Icons/cake-php.svg";
import Promotions from "@/assets/All-Icons/codigniter.svg";
import Features from "@/assets/All-Icons/foundation.svg";
// ----------------------------------SelectedTabs Start---------------------

const Apps = [
  {
    head: "App Icons",
    dis: "An app icon is the first graphic element which people observe when they see the app store listings. An icon needs to immediately express what an app is all about in the easiest possible manner. We evade all difficult icon designs otherwise it might be hard to decide on small devices.",
    icons: [
      { name: "AppStore", icon: App },
      { name: "App Icons", icon: App },
    ],
  },
];

const Optimization = [
  {
    head: "On-site Optimization",
    dis: "On-site optimization is the initial step of ASO and we organize effective strategies for driving additional organic traffic. At Digital Elliptical Enterprise Solutions, we optimize content as per search results. We twist App title for suitable keyword usage, keywords data, and App description until that works perfectly fine for you and becomes available for the key audiences.",
    icons: [
      { name: "AppStore", icon: App },
      { name: "App Icons", icon: App },
      { name: "Keyword", icon: Keywords },
    ],
  },
];

const Localization = [
  {
    head: "Maximum Localization",
    dis: "We, at Digital Elliptical Enterprise Solutions have the knowledge to help you create applications with optimum localization. Translating Apps into various local languages may significantly increase downloads as well as expose the app to potential audience..",
    icons: [
      { name: "App Localization", icon: location },
      { name: "AppStore", icon: App },
    ],
  },
];

const Keyword = [
  {
    head: "Keyword Tracking & Optimization",
    dis: "We use applicable keywords in App title for improving the search engine rankings. We concentrate to include natural keywords, continuously track keywords as well as monitor rankings at a substantial level. We can use different app analytics tools if required. We find strengths as well as weaknesses to rectify them.",
    icons: [
      { name: "AppStore", icon: App },
      { name: "Tracking", icon: Tracking },
    ],
  },
];

const Downloads = [
  {
    head: "Number of Downloads",
    dis: "Total number of downloads have a great impact on any app’s performance. The majority of users download any app after going through the popularity and reviews. We assist you in App reviews; real social media presence for promoting the app as well as increasing downloads.",
    icons: [
      { name: "Downloads", icon: Download },
      { name: "Promotions", icon: Promotions },
    ],
  },
];

const Description = [
  {
    head: "App Description",
    dis: "We maintain uncluttered content, transparency, and easy-to-understand functionalities whereas describing the applications together with the screenshots, video creations to showcase app with emphasized features, and video submissions on video sites like You Tube..",
    icons: [
      { name: "AppStore", icon: App },
      { name: "Features", icon: Features },
    ],
  },
];

export const tabsData = {
  Apps,
  Optimization,
  Localization,
  Keyword,
  Downloads,
  Description,
};

export const tabsApps = [
  { name: "A", spanText: "PP", tab: "Apps" },
  { name: "Op", spanText: "-site", tab: "Optimization" },
  { name: "Lo", spanText: "calization", tab: "Localization" },
  { name: "ke", spanText: "yword", tab: "Keyword" },
  { name: "do", spanText: "wnloads", tab: "Downloads" },
  { name: "De", spanText: "scription", tab: "Description" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------

// ---------------------------Faq Start ----------------------------------

export const faqs = [
  {
    question: "Do you support the most recent iOS versions?",
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
    question: "Would you be willing to work on app backends as well?",
    answer:
      "Yes, we offer a reliable and scalable Mobile Application back-end, as well as a custom API that allows you to easily manage the app's process and data access.",
  },
  {
    question: "Why should I choose Digital Elliptical to create an iPhone app?",
    answer:
      "We have 9 years of experience developing iPhone apps. As a mobile app development business, we can provide exceptional standard mobile applications in every category..",
  },
];
// ---------------------------Faq End ----------------------------------

// --------------Review ------------------------