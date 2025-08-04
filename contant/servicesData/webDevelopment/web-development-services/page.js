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
import NodeJS from "@/assets/All-Icons/nodejs.svg";
import Laravel from "@/assets/All-Icons/laravel.svg";
import Bootstrap from "@/assets/All-Icons/bootstrap.svg";
import Download from "@/assets/All-Icons/cake-php.svg";
import Wordpress from "@/assets/All-Icons/wordpress.svg";
import Magento from "@/assets/All-Icons/Megento.svg";
import Html5 from "@/assets/All-Icons/html.svg";
import Css from "@/assets/All-Icons/Css.svg";
import Joomla from "@/assets/All-Icons/joomla.svg";
import Drupal from "@/assets/All-Icons/drupal.svg";
import Reactjs from "@/assets/All-Icons/react-native.svg";
import Yii from "@/assets/All-Icons/yii.svg";
import Zend from "@/assets/All-Icons/ze.svg";
import Symfony from "@/assets/All-Icons/sf.svg";
import CodeIgniter from "@/assets/All-Icons/codigniter.svg";
import Features from "@/assets/All-Icons/foundation.svg";
import Grid from "@/assets/All-Icons/grid.svg";
import Angularjs from "@/assets/All-Icons/angular.svg";
import JQuery from "@/assets/All-Icons/jquery.svg";
import Ember from "@/assets/All-Icons/ember.svg";
import Kendo from "@/assets/All-Icons/kendo.svg";


const PHP = [
  {
    head: "PHP",
    dis: "PHP is one of the most popular web development programming languages on the planet. Our experienced PHP experts utilize the framework’s capabilities and functionalities to develop cutting-edge web development solutions. We make use of advanced PHP technologies, frameworks and development methodologies.",
    icons: [
      { name: "CakePHP", icon: Download },
      { name: "Yii", icon: Yii },
      { name: "laravel", icon: Laravel },
      { name: "Zend", icon: Zend },
      { name: "Codigniter", icon: CodeIgniter },
      { name: "Symfony", icon: Symfony },
    ],
  },
];

const HTMLCSS = [
  {
    head: "HTML CSS",
    dis: "Together, HTML5 and CSS3 can deliver fantastic online apps and solutions with gorgeous interfaces and remarkable functionality that will attract and engage a huge number of people. We are HTML5 site design and development experts who Utilize dependable technology and cutting-edge tools to provide a web solution with helpful features.",
    icons: [
      { name: "HTML5", icon: Html5 },
      { name: "CSS3", icon: Css },
      { name: "BootStrap", icon: Bootstrap },
      { name: "Foundation3", icon: Features },
      { name: "Gridsystem", icon: Grid },
      { name: "HTML5Boilerplate", icon: Html5 },
    ],
  },
];

const Open = [
  {
    head: "Open source",
    dis: "The web development industry as a whole benefits from open source frameworks and technology. To reduce development expenses and speed up the whole web development process, we employ promising open source technologies like as Magento, Joomla, and Drupal.",
    icons: [
      { name: "Magento", icon: Magento },
      { name: "wordpress", icon: Wordpress },
      { name: "Joomla", icon: Joomla },
      { name: "Drupal", icon: Drupal },
    ],
  },
];

const Javascript = [
  {
    head: "Javascript",
    dis: "No other technology has had as an impact on the current online experience as JavaScript. During the web design and development process, we use efficient JavaScript frameworks and tools to help us realise its full potential. Using powerful tools based on JavaScript technology, our experienced team of JavaScript engineers and specialists bring out the most in a web project.",
    icons: [
      { name: "Kendo", icon: Kendo },
      { name: "CSS3", icon: Css },
      { name: "Nodejs", icon: NodeJS },
      { name: "JQuery", icon: JQuery },
      { name: "angular", icon: Angularjs },
      { name: "ember", icon: Ember },
      { name: "React js", icon: Reactjs },
    ],
  },
];

export const tabsData = {
  PHP,
  HTMLCSS,
  Open,
  Javascript,
};
export const tabsApps = [
  { name: "PH", spanText: "P", tab: "PHP" },
  { name: "HT", spanText: "MLCSS", tab: "HTMLCSS" },
  { name: "Op", spanText: "en", tab: "Open" },
  { name: "Ja", spanText: "vascript", tab: "Javascript" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import Education from "@/assets/All-Icons/graduation.svg";
import Logistics from "@/assets/All-Icons/logestic.svg";
import Ondemand from "@/assets/All-Icons/demand.svg";
import FinTech from "@/assets/All-Icons/fintech.svg";
import Banking from "@/assets/All-Icons/banking.svg";
import Retail from "@/assets/All-Icons/retail.svg";

import Automobile from "@/assets/All-Icons/auto-mobile.svg";
import Travel from "@/assets/All-Icons/travel.svg";

export const industriesCardData = [
  { title: "Education and EdTech", icon: Education },
  { title: "Logistic", icon: Logistics },
  { title: "On-demand Marketplace", icon: Ondemand },
  { title: "FinTech", icon: FinTech },
  { title: "Banking", icon: Banking },
  { title: "Automobile", icon: Automobile },
  { title: "Travel-and-Hospitality", icon: Travel },
  { title: "Retail-Industry", icon: Retail },
];

// ------------------ industriesCardDataStart  --------------------------

// ---------------------------Faq Start ----------------------------------

export const faqs = [
  {
    question: "How much does it cost to create a website? ",
    answer:
      "Each project has a unique budget and requires a variety of resources. Every website is one-of-a-kind, and we create custom websites to meet your specific requirements.",
  },
  {
    question:
      "In terms of web development, what modern technologies do you use?",
    answer:
      "JavaScript, Vue.js, React, Node.js, Amazon Web Services, and MongoDB are among our specialties. It might be decided on the basis of the website's functioning.",
  },
  {
    question: "Will my website be search engine optimized?",
    answer:
      "Our designs adhere to SEO rules, whether they are for a start-up, a small business, or a large corporation. To learn more, get in contact with us.",
  },
  {
    question:
      "How long will the design and construction of my custom website take?",
    answer:
      "The length of time it takes to build a website is determined by the project's complexity. If you have a deadline, we will make every attempt to fulfil it, and the speed with which every project is completed is determined by its usefulness.",
  },
  {
    question: "Who owns the source code when the project is completed?",
    answer: "You control the source code when the website is finished and delivered, and we provide total transparency and security throughout the process.",
  },
  {
    question: "Do you accept responsibility for the website's security?",
    answer: "We do, in fact. We use the most up-to-date technologies to ensure that your website is totally safe.",
  },
  {
    question: "How will I assess the website design and development's success?",
    answer: "It all depends on what you want to achieve. Is it the quantity of visitors or the amount of time they spend on your website, or the amount of money you can make from it?",
  },
  {
    question: "Why should I use Digital Elliptical to develop my website?",
    answer:
      "We have 9 years of expertise developing web applications. We can provide outstanding standard web applications for any business as a Website Design & Development firm.",
  },
];
// ---------------------------Faq End ----------------------------------

// --------------Review ------------------------



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
