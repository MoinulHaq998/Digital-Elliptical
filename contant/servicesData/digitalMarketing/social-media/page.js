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

// ----------------------------------SelectedTabs Start---------------------
import App from "@/assets/All-Icons/app.svg";
import Facebookp from "@/assets/All-Icons/facebook.svg";
import LinkedIns from "@/assets/All-Icons/linkedin.svg";
import Facebooka from "@/assets/All-Icons/ad.svg";
import Keywords from "@/assets/All-Icons/keyword-palnner.svg";
import Tracking from "@/assets/All-Icons/test-rail.svg";
import Download from "@/assets/All-Icons/cake-php.svg";
import Promotions from "@/assets/All-Icons/codigniter.svg";
import Features from "@/assets/All-Icons/foundation.svg";

const Facebook = [
  {
    head: "Facebook Marketing",
    dis: "Being the best social network, it works as a huge platform for the business owners for targeting an extensive audience base as well as keep current customers well-informed about this company..",
    icons: [
      { name: "Facebook Page", icon: Facebookp },
      { name: "Facebook Ads", icon: Facebooka },
    ],
  },
];

const Twitter = [
  {
    head: "Twitter Marketing",
    dis: "This powerful marketing tool helps you to send business messages, provide information immediately as well as keep the audience well-engaged.",
    icons: [
      { name: "Facebook Page", icon: Facebookp },
      { name: "Facebook Ads", icon: Facebooka },
      { name: "Keyword", icon: Keywords },
    ],
  },
];

const LinkedIn = [
  {
    head: "LinkedIn Marketing",
    dis: "Increase your business through reaching the targeted audience, through using this biggest professional network as well as make new connections for growing your brand.",
    icons: [
      { name: "LinkedIn", icon: LinkedIns },
      { name: "App store", icon: App },
    ],
  },
];

const Instagram = [
  {
    head: "Instagram Marketing",
    dis: "make new connections for growing your brand. And it allows you to promote your brand and product in a friendly, authentic way without hard selling to your customers.",
    icons: [
      { name: "App store", icon: App },
      { name: "Tracking", icon: Tracking },
    ],
  },
];

const Pinterest = [
  {
    head: "Pinterest Marketing",
    dis: "Implementing a Pinterest marketing strategy for your business may increase sales and brand awareness. Fifty percent of people made a purchase after seeing a Promoted pin and 67% say they've discovered a new brand or product from content on the network.",
    icons: [
      { name: "Downloads", icon: Download },
      { name: "Promotions", icon: Promotions },
    ],
  },
];

const Social = [
  {
    head: "Social Media Advertising Services",
    dis: "Our social media advertising services are proven to accelerate your business growth. By advertising through social media, 100% of our clients have seen results at lower costs than before.",
    icons: [
      { name: "App store", icon: App },
      { name: "Features", icon: Features },
    ],
  },
];

export const tabsData = {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Pinterest,
  Social,
};
export const tabsApps = [
  { name: "Fa", spanText: "cebook", tab: "Facebook" },
  { name: "Tw", spanText: "itter", tab: "Twitter" },
  { name: "Li", spanText: "nkedIn", tab: "LinkedIn" },
  { name: "In", spanText: "stagram", tab: "Instagram" },
  { name: "Pi", spanText: "nterest", tab: "Pinterest" },
  { name: "So", spanText: "cial", tab: "Social" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------

import Business from "@/assets/All-Icons/business-app.svg";
import MultiMedia from "@/assets/All-Icons/multimedia.svg";
import VoipApp from "@/assets/All-Icons/voip-app.svg";
import Utility from "@/assets/All-Icons/utility-app.svg";
import location from "@/assets/All-Icons/location.svg";
import ArVr from "@/assets/All-Icons/arvr.svg";
import Chat from "@/assets/All-Icons/social.svg";
import News from "@/assets/All-Icons/news-latter.svg";
import Nfc from "@/assets/All-Icons/nfc-app.svg";
import Health from "@/assets/All-Icons/health-1.svg";
import Weather from "@/assets/All-Icons/weather-app.svg";
import Gaming from "@/assets/All-Icons/game.svg";

export const industriesCardData = [
  { title: "Business applications", icon: Business },
  { title: "Chat application", icon: Chat },
  { title: "Ar/Vr Apps", icon: ArVr },
  { title: "Multimedia", icon: MultiMedia },
  { title: "Voip", icon: VoipApp },
  { title: "News Application", icon: News },
  { title: "Geolocation Application", icon: location },
  { title: "Gaming apps", icon: Gaming },
  { title: "Weather Applications", icon: Weather },
  { title: "Healthfitness Applications", icon: Health },
  { title: "Utility", icon: Utility },
  { title: "NFC Application", icon: Nfc },
];

// ------------------ industriesCardDataStart  --------------------------

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