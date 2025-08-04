// --------------------------------------------  Service data --------------------------------------------




//---------------------------------- Choice End ----------------------------------------


// ----------------------------------SelectedTabs Start---------------------
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import NodeJS from "@/assets/All-Icons/nodejs.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import php from "@/assets/All-Icons/php.svg";
import AWS from "@/assets/All-Icons/aws.svg";
import GoogleApp from "@/assets/All-Icons/googleapp.webp";
import MSAzure from "@/assets/All-Icons/azure.webp";

const Database = [
  {
    head: "Database",
    dis: "The database architecture we develop set benchmarking standards in the market, giving your website the edge that it needs to outdo its competitors.",
    icons: [
      { name: "Postgre", icon: PostGresql },
      { name: "MySql", icon: MySql },
      { name: "Mongo DB", icon: MongoDB },
 
    ],
  },
];
const FullStack= [
  {
    head: "Full Stack",
    dis: "We make use of advanced full stack technologies to develop and deploy intuitive progressive web apps for different use cases. Our expert team of progressive web app developers is proficient in leveraging the all major full stack frameworks to create stunning and feature-rich solutions according to the custom requirements.",
    icons: [
      { name: "Node js", icon: NodeJS },
      { name: "Laravel", icon: Laravel },
      { name: "Php", icon: php },

    ],
  },
];
const Cloud = [
  {
    head: "Cloud",
    dis: "Cloud platforms offer scalability, reliability and remote connectivity to progressive web apps. We make use of all leading cloud technologies, platforms and frameworks to ensure your app is available round-the-clock.",
    icons: [
      { name: "Google App Engine", icon: GoogleApp },
      { name: "Microsoft Azure", icon: MSAzure },
      { name: "AWS", icon: AWS },
    ],
  },
];
export const tabsData = {
  Database,
  FullStack,
  Cloud,
};
export const tabsApps = [
  { name: "Da", spanText: "tabase", tab: "Database" },
  { name: "Fu", spanText: "llStack", tab: "FullStack" },
  { name: "Cl", spanText: "oud", tab: "Cloud" },
];
// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import Retail from "@/assets/All-Icons/retail.svg";
import Media from "@/assets/All-Icons/media.webp";
import Ecommerce from "@/assets/All-Icons/ecommerce1.webp";
import Banking from "@/assets/All-Icons/banking.svg";
import RealEstate from "@/assets/All-Icons/real-estate.svg";
import Automotive from "@/assets/All-Icons/car.webp";
import Hospitality from "@/assets/All-Icons/hospitality.webp";
import Manufacturing from "@/assets/All-Icons/manufacturing.svg";
import Government from "@/assets/All-Icons/government1.webp";

export const industriesCardData= [
  { title: "Media", icon: Media },
  { title: "E-commerce", icon: Ecommerce },
  { title: "Banking & Finance", icon: Banking },
  { title: "Real Estate", icon: RealEstate },
  { title: "Transport & Automotive", icon: Automotive },
  { title: "Travel & Hospitality", icon: Hospitality },
  { title: "Manufacturing", icon: Manufacturing },
  { title: "Government", icon: Government },
  { title: "Retail", icon: Retail },
];

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
    answer: "The cost of developing an iPhone app is determined by a variety of factors, including the development platform, app categories, app complexity, and amount of features.",
  },
  {
    question: "In which categories have you created mobile apps?",
    answer: "Our staff has experience developing a variety of mobile applications, including media and entertainment, travel, banking, social networking, and hospitals, among others.",
  },
  {
    question: "What industries have you provided services for?",
    answer: "Many company owners in areas such as eCommerce, education, healthcare, media, retail, NGOs, and others have benefited from our services.",
  },
  {
    question: "Would you be willing to work on app backends as well?",
    answer: "Yes, we offer a reliable and scalable Mobile Application back-end, as well as a custom API that allows you to easily manage the app's process and data access.",
  },
  {
    question: "Why should I choose Digital Elliptical to create an iPhone app?",
    answer: "We have 9 years of experience developing iPhone apps. As a mobile app development business, we can provide exceptional standard mobile applications in every category.",
  },
];
// ---------------------------Faq End ----------------------------------


