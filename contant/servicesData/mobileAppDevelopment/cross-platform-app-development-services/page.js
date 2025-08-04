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
import Ionic from "@/assets/All-Icons/ionic.svg";
import ReactNative from "@/assets/All-Icons/reactjs.svg";
import Flutter from "@/assets/All-Icons/flutter.svg";
import Nodejs from "@/assets/All-Icons/nodejs.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import Redis from "@/assets/All-Icons/redis.svg";
import Sqlite from "@/assets/All-Icons/sql-lite.svg";
import Realm from "@/assets/All-Icons/realm.svg";
import XCode from "@/assets/All-Icons/x-code.svg";
import Android from "@/assets/All-Icons/android.svg";

const frontend = [
  {
    head: "Frontend",
    dis: "Our expert cross-platform app developers use cutting-edge frontend technology and robust frontend frameworks to create engaging and intuitive mobile apps that operate across many operating systems.",
    icons: [
      { name: "react-native", icon: ReactNative },
      { name: "ionic", icon: Ionic },
      { name: "flutter", icon: Flutter },
    ],
  },
];

const backend = [
  {
    head: "Backend",
    dis: "We develop a solid backend architecture driven by the newest frameworks byutilizingthe finest in backend technologies. For developing and implementing dependable backend architecture, our professional team uses cutting-edge Node.JS and Laravel backend technologies.",
    icons: [
      { name: "Node js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
    ],
  },
];

const database = [
  {
    head: "Data Base",
    dis: "For the success of a mobile app, our dexterous cross-platform app developers recognise the necessity of a dependable and strong database. We create solid data structures and database connections for your app using cutting-edge database technologies.",
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
    dis: "The integrated development environment simplifies the whole mobile app development process while also giving you more flexibility. We build easy cross-platform apps using sophisticated IDEs that are tailored to specific business needs.",
    icons: [
      { name: "X-Code", icon: XCode },
      { name: "Android-studio", icon: Android },
    ],
  },
];

export const tabsData = {
  frontend,
  backend,
  database,
  ide,
};
export const tabsApps = [
  { name: "Fr", spanText: "ontend", tab: "frontend" },
  { name: "Ba", spanText: "ckend", tab: "backend" },
  { name: "Da", spanText: "tabase", tab: "database" },
  { name: "ID ", spanText: " E", tab: "ide" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import Calender from "@/assets/All-Icons/calendar-app.svg";
import Crossplat from "@/assets/All-Icons/cross-platform.svg";
import Classified from "@/assets/All-Icons/classified-app.svg";
import Ondemand from "@/assets/All-Icons/demand.svg";
import Business from "@/assets/All-Icons/business-app.svg";
import SocialNetworking from "@/assets/All-Icons/social-media-marketing.svg";
import Enterprise from "@/assets/All-Icons/enterprise.svg";
import location from "@/assets/All-Icons/location.svg";

export const industriesCardData = [
  { title: "Calender Apps", icon: Calender },
  { title: "Classified Apps", icon: Classified },
  { title: "Enterprise Apps", icon: Enterprise },
  { title: "Ondemand Apps", icon: Ondemand },
  { title: "Socialnetwork Apps", icon: SocialNetworking },
  { title: "crossplat form desktop Apps", icon: Crossplat },
  { title: "Business App", icon: Business },
  { title: "Geolocation Application", icon: location },
];

// ------------------ industriesCardDataStart  --------------------------

export const faqs = [
  {
    question: "What is the definition of cross-platform app development? ",
    answer:
      "Cross-Platform App Development is a process for building a mobile application for several platforms at the same time.",
  },
  {
    question:
      "What distinguishes us as a top Cross-Platform Mobile App Development firm?",
    answer:
      "We like to first understand the problem you're trying to solve with your mobile app before recommending options that fit your company's needs.",
  },
  {
    question: "How Do You Create A Multi-Platform App?",
    answer:
      "To design and create your multiplatform apps, we use a variety of technologies and devices. These apps share a single codebase, as well as the same APIs and frameworks.",
  },
  {
    question:
      "What is the difference between developing a native mobile app and developing a hybrid app?",
    answer:
      "Platform-specific languages are used to develop native apps. Cross-Platform Apps are written in Javascript and operate on a variety of systems.",
  },
  {
    question:
      "Which sophisticated programming language is Utilized to create cross-platform apps?",
    answer:
      "A cross-platform app development team should be knowledgeable in JavaScript,.NET, or C#, as well as the React Native, Titanium, or Xamarin frameworks.",
  },
  {
    question: "How often should my Cross-Platform Application be updated?",
    answer:
      "Updating a Cross-Platform Application is totally dependent on the new technology or feature you want to include, as well as the issues you're having with your app.",
  },
  {
    question:
      "How many developers have you tasked with working on the project?",
    answer:
      "Your project will be allocated to an experienced team of developers based on your needs after the specs for your Flutter App Development project have been accepted.",
  },
  {
    question:
      "Why should I use Digital Elliptical to create Cros-Platform apps?",
    answer:
      "We have 9 years of expertise developing cross-platform apps. We provide excellent standard mobile applications in all categories.",
  },
];