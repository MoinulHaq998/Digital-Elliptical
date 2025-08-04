// --------------------------------------------  Service data --------------------------------------------

import Java from "@/assets/All-Icons/java.svg";
import Xml from "@/assets/All-Icons/xml.svg";
import Kotlin from "@/assets/All-Icons/kotlin.svg";
import ReactNative from "@/assets/All-Icons/reactjs.svg";
import objectivc from "@/assets/All-Icons/objective-c.svg";
import Nodejs from "@/assets/All-Icons/nodejs.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import Redis from "@/assets/All-Icons/redis.svg";
import Sqlite from "@/assets/All-Icons/sql-lite.svg";
import Realm from "@/assets/All-Icons/realm.svg";
import XCode from "@/assets/All-Icons/x-code.svg";
// ----------------------------------SelectedTabs Start---------------------
const frontend = [
  {
    head: "Frontend",
    dis: "To provide a fantastic user experience, our expert Android app development team employs best-in-class frontend frameworks and technologies. We assure excellent responsiveness, intuitiveness, and functionality by employing best design and frontend development principles.",
    icons: [
      { name: "Java", icon: Java },
      { name: "Xml", icon: Xml },
      { name: "Kotlin", icon: Kotlin },
      { name: "React-native", icon: ReactNative },
      { name: "objective-c", icon: objectivc },
    ],
  },
];

const backend = [
  {
    head: "Backend",
    dis: "Any Android application's backend design is critical to its success. We employ cutting-edge technology to improve the backend and add essential functionality and features to a mobile app.",
    icons: [
      { name: "Node js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
    ],
  },
];

const database = [
  {
    head: "Database",
    dis: "Database technologies that are dependable and robust are used to support our intelligent database management methods and database structures. To increase user confidence and app reliability, we make sure your app database is always safe.",
    icons: [
      { name: "Mysql", icon: MySql },
      { name: "PostGresql", icon: PostGresql },
      { name: "Mango-DB", icon: MongoDB },
      { name: "Redis", icon: Redis },
      { name: "Sqlite", icon: Sqlite },
      { name: "Realm", icon: Realm },
    ],
  },
];

const ide = [
  {
    head: "IDE",
    dis: "Our Android app development method takes use of a popular integrated development environment. The IDE method enables us to maintain control throughout the whole development lifecycle and achieve the best possible outcomes from development efforts.",
    icons: [{ name: "X-Code", icon: XCode }],
  },
];

export const tabsData = {
  frontend,
  backend,
  database,
  ide,
};

export const tabsApps = [
  { name: "fr", spanText: "ontend", tab: "frontend" },
  { name: "ba", spanText: "kend", tab: "backend" },
  { name: "da", spanText: "tabase", tab: "database" },
  { name: "id", spanText: "de", tab: "ide" },
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
    question:
      "What programming language do you employ while creating Android apps? ",
    answer:
      "For Android Mobile App Development, we employ the Java and Kotlin programming languages. For Android apps, we use React Native and Flutter for cross-platform development.",
  },
  {
    question: "How do you go about creating Android apps?",
    answer:
      "Android app development projects receive the same level of attention from our developers as any other aspect of the product.",
  },
  {
    question: "Do I have ownership of the app and its code?",
    answer:
      "Yes. Despite the fact that we developed the app, you own your new Android app and its code. We dont have any rights to your apps code.",
  },
  {
    question:
      "Will we sign a non-disclosure agreement (NDA) to protect an Android app concept?",
    answer:
      "Yes. We usually sign an NDA as soon as we have an app concept. Even before we make the first contact to our clients, the cycle is complete.",
  },
  {
    question:
      "What should you look for when selecting an Android Mobile App Development firm?",
    answer:
      "When it comes to selecting an Android app development firm, there are several factors to consider, including development process, portfolio, personnel strength, and so on.",
  },
  {
    question:
      "Will you help me submit my Android app to the Google Play Store?",
    answer:
      "Indeed. In reality, we assume full responsibility for launching an Android application on the Play Store.",
  },
  {
    question: "Would you be willing to work on application backends as well?",
    answer:
      "Yes, we offer a reliable and scalable application backend as well as a custom API that lets you easily manage the app process and data access.",
  },
  {
    question: "Why should I choose Digital Elliptical to create Android apps?",
    answer:
      "As a top Android app development firm, we are capable of providing world-class applications in every category.",
  },
];
// ---------------------------Faq End ----------------------------------

// --------------Review ------------------------