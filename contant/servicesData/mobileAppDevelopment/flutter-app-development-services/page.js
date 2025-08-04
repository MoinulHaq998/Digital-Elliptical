// --------------------------------------------  Service data --------------------------------------------

// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/flutter1.webp";
import choiceImg2 from "@/assets/services/choice/flutter2.webp";
import choiceImg3 from "@/assets/services/choice/flutter3.webp";
import choiceImg4 from "@/assets/services/choice/flutter4.webp";
import choiceImg6 from "@/assets/services/choice/flutter6.webp";
import choiceImg5 from "@/assets/services/choice/flutter5.webp";

export const choiceCardData = [
  {
    img: choiceImg1,
    title: "Hybrid App Development",
    desc: "The distinctive feature of Flutter app development is cross-platform interoperability. Get that benefit for your application.",
  },
  {
    img: choiceImg2,
    title: "Flutter for Web Development",
    desc: "Now, with the help of Flutter web development frameworks, offer your website and web applications all the strength they require.",
  },
  {
    img: choiceImg3,
    title: "Flutter Customization Service",
    desc: "Have a feature that is novel to the market? Services for Flutter customization might make things simpler for developers.",
  },
  {
    img: choiceImg4,
    title: "Android and iOS App Development",
    desc: "With Flutter, you can create two unique native apps at the same time as one.",
  },
  {
    img: choiceImg5,
    title: "End-to-End Project Management",
    desc: "We are in charge of the app development process after consultation. Leave project management to us and concentrate on what counts.",
  },
  {
    img: choiceImg6,
    title: "Flutter App Support & Maintenance",
    desc: "The very best post-live support for your app for all time, from patches to app updates.",
  },
];

//---------------------------------- Choice End ----------------------------------------

// ----------------------------------SelectedTabs Start---------------------

import Nodejs from "@/assets/All-Icons/nodejs.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import Redis from "@/assets/All-Icons/redis.svg";
import AndroidWear from "@/assets/All-Icons/android-watch.svg";
import AppleWatch from "@/assets/All-Icons/apple-watch.svg";
import Fitness from "@/assets/All-Icons/fitness-watch.svg";
import Aws1 from "@/assets/All-Icons/aws-s3.svg";
import Aws2 from "@/assets/All-Icons/aws-ec2.svg";
import Aws3 from "@/assets/All-Icons/aws-ebs.svg";
import Aws4 from "@/assets/All-Icons/aws-sqs.svg";
import Aws5 from "@/assets/All-Icons/aws-cloud-trail.svg";
import Aws6 from "@/assets/All-Icons/aws-dynamic.svg";
import Aws7 from "@/assets/All-Icons/aws-lambda.svg";
import Aws8 from "@/assets/All-Icons/cloud-watch.svg";

const backend = [
  {
    head: "Backend",
    dis: "The backend needs to be as stable as feasible in order for the frontend to run without a hitch. And that's exactly what our backend Flutter app development services provide. perfect and tight.",
    icons: [
      { name: "Node js", icon: Nodejs },
      { name: "Laravel", icon: Laravel },
    ],
  },
];

const database = [
  {
    head: "Database",
    dis: "The database design we create sets industry benchmarks, providing your app the advantage it needs to outperform rivals.",
    icons: [
      { name: "Mysql", icon: MySql },
      { name: "PostGresql", icon: PostGresql },
      { name: "Mango-DB", icon: MongoDB },
      { name: "Redis", icon: Redis },
    ],
  },
];
const wearables = [
  {
    head: "Wearables",
    dis: "In addition to creating custom apps for Flutter, we also create wearable apps for devices like smartwatches, fitness trackers, and more.",
    icons: [
      { name: "Android Wear", icon: AndroidWear },
      { name: "Apple Watch", icon: AppleWatch },
      { name: "Fitness Tracker", icon: Fitness },
    ],
  },
];
const cloud = [
  {
    head: "Cloud Architecture",
    dis: "For each new product or concept, we create a custom cloud architecture. On this basis, we guarantee the greatest outcomes and optimized features for your app.",
    icons: [
      { name: "AWS S3", icon: Aws1 },
      { name: "AWS EC2", icon: Aws2 },
      { name: "AWS EBS", icon: Aws3 },
      { name: "AWS SQS", icon: Aws4 },
      { name: "AWS Cloud Trail", icon: Aws5 },
      { name: "AWS Dynamo DB", icon: Aws6 },
      { name: "AWS Lambda", icon: Aws7 },
      { name: "AWS CloudWatch", icon: Aws8 },
    ],
  },
];

export const tabsData = {
  backend,
  database,
  wearables,
  cloud,
};
export const tabsApps = [
  { name: "Ba", spanText: "ckend", tab: "backend" },
  { name: "Da", spanText: "tabase", tab: "database" },
  { name: "We", spanText: "arables", tab: "wearables" },
  { name: "Cl", spanText: "oud", tab: "cloud" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import MultiMedia from "@/assets/All-Icons/multimedia.svg";
import VoipApp from "@/assets/All-Icons/voip-app.svg";
import DataApp from "@/assets/All-Icons/db.svg";
import Enterprise from "@/assets/All-Icons/enterprise.svg";
import SocialNetworking from "@/assets/All-Icons/social-media-marketing.svg";
import MobileGame from "@/assets/All-Icons/game.svg";
import location from "@/assets/All-Icons/location.svg";
import Wearable from "@/assets/All-Icons/fitness-watch.svg";
import ArVr from "@/assets/All-Icons/arvr.svg";
import BeaconApp from "@/assets/All-Icons/beacon.svg";
import Ecommerce from "@/assets/All-Icons/ecommerce.svg";
import Utility from "@/assets/All-Icons/utility-app.svg";

export const industriesCardData = [
  { title: "Multimedia App", icon: MultiMedia },
  { title: "Voip App", icon: VoipApp },
  { title: "Data App", icon: DataApp },
  { title: "Enterprise App", icon: Enterprise },
  { title: "Social-networking App", icon: SocialNetworking },
  { title: "Mobile Game App", icon: MobileGame },
  { title: "location App", icon: location },
  { title: "Wearable App", icon: Wearable },
  { title: "Ar/Vr App", icon: ArVr },
  { title: "Beacon App", icon: BeaconApp },
  { title: "E-commerce App", icon: Ecommerce },
  { title: "Utility App", icon: Utility },
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