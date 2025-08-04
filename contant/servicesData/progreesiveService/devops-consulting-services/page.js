// --------------------------------------------  Service data --------------------------------------------



// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/dp1.webp";
import choiceImg2 from "@/assets/services/choice/dp2.webp";
import choiceImg3 from "@/assets/services/choice/dp3.webp";
import choiceImg4 from "@/assets/services/choice/dp4.webp";
import choiceImg5 from "@/assets/services/choice/dp5.webp";
import choiceImg6 from "@/assets/services/choice/dp6.webp";

export const choiceCardData= [
  {
    img: choiceImg1,
    title: "DevOps Consulting",
    desc: "Get professional guidance on a range of issues regarding software development cycles.",
  },
  {
    img: choiceImg2,
    title: "DevOps Automation",
    desc: "Automate redundant jobs that bots and algorithms can complete quickly, and use human resources where they are most required.",
  },
  {
    img: choiceImg3,
    title: "DevOps Assessment",
    desc: "How effective are your company's existing DevOps guidelines and practices? Obtain thorough reports and graphs.",
  },
  {
    img: choiceImg4,
    title: "DevOps Management",
    desc: "Create space for the best team communication and collaboration with reliable DevOps management services.",
  },
  {
    img: choiceImg5,
    title: "DevOps Strategy & Consulting",
    desc: "Your company requires a distinctive DevOps approach that is focused on your market segment, operations, and niche. Get personalizedrecommendations now.",
  },
  {
    img: choiceImg6,
    title: "DevOps As Cloud Platform",
    desc: "Utilize cloud-based continuous integration and delivery strategies to make your workplace more nimble.",
  },
];

//---------------------------------- Choice End ----------------------------------------


// ----------------------------------SelectedTabs Start---------------------

import AWS from "@/assets/All-Icons/aws.svg";
import GoogleCloud from "@/assets/All-Icons/google-cloud.svg";
import Openstack from "@/assets/All-Icons/openstck.svg";
import Rackspace from "@/assets/All-Icons/rackspace.svg";
import Apache from "@/assets/All-Icons/apache.svg";
import Cucumbers from "@/assets/All-Icons/cucumber.svg";
import Symphony from "@/assets/All-Icons/XMLQASymphony.svg";
import ReSharper from "@/assets/All-Icons/ReSharper.svg";
import Rspec from "@/assets/All-Icons/Rspec.svg";
import SauceLab from "@/assets/All-Icons/sauce-labs.svg";
import Selenium from "@/assets/All-Icons/se.svg";
import SonarQube from "@/assets/All-Icons/qube.svg";
import ReactNative from "@/assets/All-Icons/reactjs.svg";
import Angularjs from "@/assets/All-Icons/angular.svg";
import NodeJS from "@/assets/All-Icons/nodejs.svg";
import Vue from "@/assets/All-Icons/vue-js.svg";
import Meteor from "@/assets/All-Icons/meteor.svg";
import AppDynamics from "@/assets/All-Icons/app-dynamics.svg";
import ELKStack from "@/assets/All-Icons/ELK-Stack.svg";
import Logstash from "@/assets/All-Icons/logstash.svg";
import NewRelic from "@/assets/All-Icons/new-relic.svg";
import Sensu from "@/assets/All-Icons/sensu.svg";
import Apple from "@/assets/All-Icons/apple.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import MySQL from "@/assets/All-Icons/mySql.svg";
import Firebase from "@/assets/All-Icons/firebase.svg";
import PostgreSQL from "@/assets/All-Icons/postgre-sql.svg";
import Flutter from "@/assets/All-Icons/flutter.svg";
import Ionic from "@/assets/All-Icons/ionic.svg";
import Download from "@/assets/All-Icons/cake-php.svg";
import CodeIgniter from "@/assets/All-Icons/codigniter.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import Swift from "@/assets/All-Icons/swift.svg";
import XCode from "@/assets/All-Icons/x-code.svg";
import Wordpress from "@/assets/All-Icons/wordpress.svg";
import Zend from "@/assets/All-Icons/ze.svg";
import Tracking from "@/assets/All-Icons/test-rail.svg";

const Cloud = [
  {
    head: "Cloud",
    dis: "Get the best of cloud computing capabilities for your business and make way for agility.",
    icons: [
      { name: "Amazon web services ", icon: AWS },
      { name: "Google Cloud", icon: GoogleCloud },
      { name: "Microsoft Azure", icon: AWS },
      { name: "openstack", icon: Openstack },
      { name: "Pivotal Cloud Foundry", icon: Openstack },
      { name: "Rackspace", icon: Rackspace },
    ],
  },
];

const Automation= [
  {
    head: "Automation",
    dis: "Our DevOps automation strategies dynamically reduce feedback loops so there's minimal time between iteration updates and their deployment in applications.",
    icons: [
      { name: "Apache JMeter", icon: Apache },
      { name: "Cucumbers", icon: Cucumbers },
      { name: "XMLQA Symphony", icon: Symphony },
      { name: "ReSharper", icon: ReSharper },
      { name: "Rspec", icon: Rspec },
      { name: "Sauce Labs", icon: SauceLab },
      { name: "Selenium", icon: Selenium },
      { name: "Sonar Qube", icon: SonarQube },
      { name: "Test Rail", icon: Tracking },
    ],
  },
];

const JavaScript = [
  {
    head: "JavaScript",
    dis: "We develop the most stable and scalable network-specific DevOps applications with JavaScript.",
    icons: [
      { name: "React", icon: ReactNative },
      { name: "Angular", icon: Angularjs },
      { name: "Node Js", icon: NodeJS },
      { name: "Vue", icon: Vue },
      { name: "Meteor", icon: Meteor },
      
    ],
  },
];

const Monitoring = [
  {
    head: "Monitoring",
    dis: "Seamlessly monitor your software development cycles and pipelines with a bird’s eye view from our dashboards.",
    icons: [
      { name: "App Dynamics", icon: AppDynamics },
      { name: "AWS CloudWatch", icon: AWS },
      { name: "ELK Stack", icon: ELKStack },
      { name: "Logstash", icon: Logstash },
      { name: "New Relic", icon: NewRelic },
      { name: "Sensu", icon: Sensu },
    ],
  },
];

const WebMobile= [
  {
    head: "Web & Mobile",
    dis: "No matter where you are and what device you use, your DevOps frameworks update would reach you intact.",
    icons: [
      { name: "CakePHP", icon: Download },
      { name: "CodeIgniter", icon: CodeIgniter },
      { name: "Flutter", icon: Flutter },
      { name: "Ionic", icon: Ionic },
      { name: "Laravel", icon: Laravel },
      { name: "Apple", icon: Apple },
      { name: "React", icon: ReactNative },
      { name: "Swift", icon: Swift },
      { name: "X-Code", icon: XCode },
      { name: "Wordpress", icon: Wordpress },
      { name: "Zend Framework", icon: Zend },

    ],
  },
];

const DataBase= [
  {
    head: "Web & Mobile",
    dis: "Migration of databases is no longer a concern with our DevOps strategies and solutions.",
    icons: [
      { name: "Firebase", icon: Firebase },
      { name: "MySQL", icon: MySQL },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "MongoDb", icon: MongoDB },
    ],
  },
];
export const tabsData = {
  Cloud,
  Automation,
  JavaScript,
  Monitoring,
  WebMobile,
  DataBase
};
export const tabsApps = [
  { name: "Cl", spanText: "oud", tab: "Cloud" },
  { name: "Au", spanText: "tomation", tab: "Automation" },
  { name: "Ja", spanText: "vaScript", tab: "JavaScript" },
  { name: "Mo", spanText: "nitoring", tab: "Monitoring" },
  { name: "We", spanText: "bMobile", tab: "WebMobile" },
  { name: "Da", spanText: "taBase", tab: "DataBase" },

];
// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------

import MultiMedia from "@/assets/All-Icons/multimedia.svg";
import VoipApp from "@/assets/All-Icons/voip-app.svg";
import DataApp from "@/assets/All-Icons/db.svg";
import Enterprise from "@/assets/All-Icons/enterprise.svg";
import SocialNetworking from "@/assets/All-Icons/social-media-marketing.svg";
import MobileGame from "@/assets/All-Icons/game.svg";
import ArVr from "@/assets/All-Icons/arvr.svg";
import location from "@/assets/All-Icons/location.svg";
import Wearable from "@/assets/All-Icons/fitness-watch.svg";
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



// --------------Review ------------------------


