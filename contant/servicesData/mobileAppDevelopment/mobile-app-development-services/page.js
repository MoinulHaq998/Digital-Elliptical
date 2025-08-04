// --------------------------------------------  Service data --------------------------------------------



// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/1.webp";
import choiceImg2 from "@/assets/services/choice/2.webp";
import choiceImg3 from "@/assets/services/choice/3.webp";
import choiceImg4 from "@/assets/services/choice/4.webp";
import choiceImg6 from "@/assets/services/choice/6.webp";
import choiceImg5 from "@/assets/services/choice/5.webp";

export const choiceCardData= [
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
import Java from "@/assets/All-Icons/java.svg";
import Kotlin from "@/assets/All-Icons/kotlin.svg";
import Rxjava from "@/assets/All-Icons/rx-java.svg";
import Firebase from "@/assets/All-Icons/firebase.svg";
import AndroidStudio from "@/assets/All-Icons/android.svg";
import Espresso from "@/assets/All-Icons/expresso.svg";
import Crashlytics from "@/assets/All-Icons/crashlytics.svg";
import Amplitude from "@/assets/All-Icons/amplitude.svg";
import Stackover  from "@/assets/All-Icons/stack-overflow.svg";
import Swift from "@/assets/All-Icons/swift.svg";
import Flight from "@/assets/All-Icons/test-flight.svg";
import Rxswift from "@/assets/All-Icons/rx-swift.svg";
import Xctest from "@/assets/All-Icons/check.svg";
import XCode from "@/assets/All-Icons/x-code.svg";
import AndroidWatch from "@/assets/All-Icons/android-watch.svg";
import AppleWatch from "@/assets/All-Icons/apple-watch.svg";
import Fitness from "@/assets/All-Icons/fitness-watch.svg"; 
import ReactNative from "@/assets/All-Icons/reactjs.svg";
import Flutter from "@/assets/All-Icons/flutter.svg";
import Segment from "@/assets/All-Icons/segment.svg";
import Nodejs from "@/assets/All-Icons/nodejs.svg";
import Ruby from "@/assets/All-Icons/ruby.svg";
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import Redis from "@/assets/All-Icons/redis.svg";
import Elastic from "@/assets/All-Icons/elastic.svg";
import Travis from "@/assets/All-Icons/travis-cI.svg";
import Github from "@/assets/All-Icons/github.svg";
import AWS from "@/assets/All-Icons/aws.svg";
import Jenkins from "@/assets/All-Icons/jenkins.svg";
import GoogleCloud from "@/assets/All-Icons/google-cloud.svg";
import Nginx from "@/assets/All-Icons/n.svg";
import Ansible from "@/assets/All-Icons/ansible.svg";
import Terraform from "@/assets/All-Icons/terraform.svg";


const Android = [
  {
    head: "Android app",
    dis: "To create dynamic mobile apps for the Android platform, our Android app development professionals employ UI/UX best practices and contemporary technologies and frameworks. We use diverse technologies and make them operate in sync to develop an integrated solution using clean architecture and agile techniques..",
    icons: [
      { name: "Java", icon: Java},
      { name: "kotlin", icon: Kotlin },
      { name: "Rx-java", icon: Rxjava},
      { name: "Firebase", icon: Firebase },
      { name: "Android-studio", icon: AndroidStudio },
      { name: "Espresso", icon: Espresso },
      { name: "Crashlytics", icon: Crashlytics },
      { name: "Stackover flow", icon: Stackover },
    ],
  },
];

const iOS= [
  {
    head: "iOS",
    dis: "To please high-end customers, an iOS app must be sophisticated and elegant. As a result, we leverage cutting-edge technology and employ new programming techniques to develop a user-friendly mobile app. Our emphasis on a simple UI/UX and user-friendliness ensures that your program is well-liked by iOS users.",
    icons: [
      { name: "Swift", icon: Swift },
      { name: "Fastlane", icon: Rxjava },
      { name: "Test flight", icon: Flight },
      { name: "Rx-swift", icon: Rxswift },
      { name: "Xctest", icon: Xctest },
      { name: "Xcode", icon: XCode },
      { name: "Amplitude", icon: Amplitude},
      { name: "Stackover flow", icon: Stackover },


    ],
  },
];

const Wearables = [
  {
    head: "Wearables app",
    dis: "Due to their unique hardware and software needs, wearables may be extremely challenging. As a result, our wearable app development team uses existing tools and technologies to create feature-rich, yet light and easy apps for Android watch, Apple Watch, or various types of fitness trackers or healthcare wearables.",
    icons: [
      { name: "Android-wear", icon: AndroidWatch },
      { name: "Fitness-tracker", icon: Fitness },
      { name: "apple-watch", icon: AppleWatch },
    ],
  },
];

const Hybrid = [
  {
    head: "Hybrid App",
    dis: "Are you planning to create a cross-platform application? In such case, hybrid apps should be your first pick. We have a specialised hybrid app development team that creates adaptable cross-platform mobile apps for iOS and Android using strong frameworks like React Native and Flutter, among others.",
    icons: [
      { name: "React-native", icon: ReactNative },
      { name: "Firebase", icon: Firebase },
      { name: "Flutter", icon: Flutter },
      { name: "Segment", icon: Segment },
      { name: "Stackoverflow", icon: Stackover },
    ],
  },
];

const Backend= [
  {
    head: "Backend",
    dis: "Our dedication to using scalable backend technology aids in the development of a dependable mobile solution. We provide distributed backend support for expanding apps, startups, and businesses using hexagonal architecture, DDD, and SOA..",
    icons: [
      { name: "Nodejs", icon: Nodejs },
      { name: "Ruby", icon: Ruby },
      { name: "Stackoverflow", icon: Stackover },

    ],
  },
];

const Databases= [
  {
    head: "Databases",
    dis: "Any digital solution needs a solid database as its foundation. We make use of different SQL & NoSQL database types to create an efficient data backbone for the complete product. Because of our modular design, the program does not suffer from database management difficulties.",
    icons: [
      { name: "Mysql", icon: MySql },
      { name: "Mango DB", icon: MongoDB },
      { name: "Postgree Sql", icon: PostGresql },
      { name: "Radis", icon: Redis },
      { name: "StackOverflow", icon: Stackover },
      { name: "Elastic", icon: Elastic },
    ],
  },
];

const Infrastructure= [
  {
    head: "Infrastructure",
    dis: "Our NoOps and automation-driven infrastructure development philosophy contributes to increasing the likelihood of a solution. We infuse your solution with the flexibility to grow with your user base and evolving demands by using a cloud-based secure infrastructure.",
    icons: [
      { name: "Travis", icon: Travis },
      { name: "Github", icon: Github},
      { name: "AWS", icon: AWS },
      { name: "Jenkins", icon: Jenkins},
      { name: "Google-Cloud", icon: GoogleCloud },
      { name: "Nginx", icon: Nginx },
      { name: "Ansible", icon: Ansible},
      { name: "Terraform", icon: Terraform },
    ],
  },
];

export const tabsData = {
  Android,
  iOS,
  Wearables,
  Hybrid,
  Backend,
  Databases,
  Infrastructure
};
export const tabsApps = [
  { name: "An", spanText: "droid", tab: "Android" },
  { name: "Io", spanText: "S", tab: "iOS" },
  { name: "We", spanText: "arables", tab: "Wearables" },
  { name: "Hy", spanText: "brid", tab: "Hybrid" },
  { name: "Ba", spanText: "ckend", tab: "Backend" },
  { name: "Da", spanText: "tabases", tab: "Databases" },
  { name: "In", spanText: "frastructure", tab: "Infrastructure" },

];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import Chat from "@/assets/All-Icons/social.svg";
import Banking from "@/assets/All-Icons/banking.svg";
import Ecommerce from "@/assets/All-Icons/ecommerce.svg";
import MultiMedia from "@/assets/All-Icons/multimedia.svg";
import Ondemand from "@/assets/All-Icons/demand.svg";
import Education from "@/assets/All-Icons/graduation.svg";
import Restaurant from "@/assets/All-Icons/food.svg";
import Enterprise from "@/assets/All-Icons/enterprise.svg";
import RealEstate from "@/assets/All-Icons/real-estate.svg";
import Directory from "@/assets/All-Icons/directory.svg";
import Transport from "@/assets/All-Icons/transport.svg";
import Health from "@/assets/All-Icons/health.svg";

export const industriesCardData= [
  { title: "Social-networking App", icon: Chat},
  { title: "Banking-Finance App", icon: Banking},
  { title: "Food-Restaurant App", icon: Restaurant },
  { title: "Ondemand App", icon: Ondemand },
  { title: "Directory App", icon: Directory },
  { title: "Multimedia App", icon: MultiMedia },
  { title: "Transport-Automotive App", icon: Transport },
  { title: "E-commerce App", icon: Ecommerce },
  { title: "Real-Estate App", icon: RealEstate },
  { title: "Events-Tickets App", icon: Amplitude },
  { title: "Enterprise App", icon: Enterprise },
  { title: "Education-eLearning App", icon: Education},
  { title: "Health care App", icon: Health },

];

// ------------------ industriesCardDataStart  --------------------------



// ---------------------------Faq Start ----------------------------------

export const faqs = [
  {
    question:
      "What does it cost to build a mobile application? ",
    answer:
      "Before we begin work on your project, we collaborate with you to create a thorough project specification and then estimate the cost of completion.",
  },
  {
    question: "Is your Mobile App Development Project regularly serviced and updated?",
    answer:
      "Yes, we provide the option of contacting us on an ad-hoc basis for assistance with your Mobile App Development project.",
  },
  {
    question: "Will I be able to access the App Development project's source code?",
    answer:
      "Yes, the unique code that we develop for your Mobile App Development project will be granted proper copyright or permission rights to you..",
  },
  {
    question:
      "Is it true that my personal information would be kept private?",
    answer:
      "Yes, we sign a non-disclosure agreement (NDA) before beginning work on your Mobile App Development project,and we honour it until the project is completed. We will keep all of your information safe..",
  },
  {
    question:
      "How many developers have you tasked with working on the project?",
    answer:
      "Once the project procedure has been completed, your project will be assigned to an experienced team of developers who will work on it according to your Mobile Application requirements.",
  },
  {
    question:
      "In which categories have you created mobile apps?",
    answer:
      "Our staff has experience developing a variety of mobile applications, including media and entertainment, travel, banking, social networking, and hospitals, among others.",
  },
  {
    question:
      "Is it possible to make modifications to my mobile application after it has been released?",
    answer:
      "Yes, we strongly advise that you begin by releasing the simplest feasible version of your idea and gradually develop it over time.",
  },
  {
    question: "Why should I choose Digital Elliptical to create my mobile app?",
    answer:
      "For every category, we offer top-notch mobile application development services. We offer fully functional Android, iOS, and cross-platform apps.",
  },
 
];
// ---------------------------Faq End ----------------------------------



  // -------------------------Solution--------------------------------------------
  import icon1 from "@/assets/services/service-icon/SinglePage.svg";
  import icon2 from "@/assets/services/service-icon/Multipage.svg";
  import icon3 from "@/assets/services/service-icon/Enterprise.svg";
  import icon4 from "@/assets/services/service-icon/CMS.svg";
   export const solution = [
      {
        img: icon1,
        title: "Single Page Apps",
        desc: "Create and deploy a single-page web app to streamline workflow and provide cutting-edge user-friendliness in order to attract and engage more people.",
      },
      {
        img: icon2,
        title: "Multi-page Apps",
        desc: "A dynamic multi-page web app solution will delight web users with real-time interaction and intuitiveness.",
      },
      {
        img: icon3,
        title: "Enterprise Web Application",
        desc: "A dynamic enterprise web application can help you streamline company procedures and improve internal operations.",
      },
      {
        img: icon4,
        title: "CMS/eCommerce",
        desc: "With the aid of our skilled web developers, you may create your own eCommerce platform or CMS-based website.",
      },
    ];