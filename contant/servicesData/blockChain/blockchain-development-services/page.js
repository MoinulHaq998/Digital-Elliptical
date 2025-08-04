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
import Hyperledger from "@/assets/All-Icons/hyperledger.svg";
import Ethereum from "@/assets/All-Icons/etherium.svg";
import Solidity from "@/assets/All-Icons/solidity.svg";
import Nodejs from "@/assets/All-Icons/nodejs.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";



const Framework = [
  {
    head: "Framework",
    dis: "For the creation of your cryptocurrency app, we use the most secure and stable blockchain architecture available. This helps you to keep track of your clients' bitcoin exchange needs and provide them with the finest services possible.",
    icons: [
      { name: "Hyperledger", icon: Hyperledger },
      { name: "Ethereum", icon: Ethereum },
      { name: "Solidity", icon: Solidity },
    ],
  },
];

const Backend= [
  {
    head: "Backend",
    dis: "Precision, speed, and functionality are all important in cryptocurrency apps, and our secure backend designs assure that.",
    icons: [
 
      { name: "nodejs", icon: Nodejs },
    ],
  },
];

const Database = [
  {
    head: "Database",
    dis: "The database design we provide sets industry benchmarks, providing your Ethereum cryptocurrency solutions app the competitive edge it needs to succeed.",
    icons: [
      { name: "MongoDb", icon: MongoDB },
    ],
  },
];

export const tabsData = {
    Framework,
    Backend,
    Database,
};

export const tabsApps = [
    { name: "Fr", spanText: "amework", tab: "Framework" },
    { name: "Ba", spanText: "ckend", tab: "Backend" },
    { name: "Da", spanText: "tabase", tab: "Database" },
  ];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import Banking from "@/assets/All-Icons/banking.svg";
import Transport from "@/assets/All-Icons/transport.svg";
import Health from "@/assets/All-Icons/health-1.svg";
import Ecommerce from "@/assets/All-Icons/ecommerce.svg";
import Education from "@/assets/All-Icons/graduation.svg";
import RealEstate from "@/assets/All-Icons/real-estate.svg";
import Government from "@/assets/All-Icons/goverment.svg";
import Insurance from "@/assets/All-Icons/insurance.svg";
import Trading from "@/assets/All-Icons/trading.svg";
import Retail from "@/assets/All-Icons/retail.svg";
import Logistics from "@/assets/All-Icons/logestic.svg";
import Manufacturing from "@/assets/All-Icons/manufacturing.svg";

export const industriesCardData= [
  { title: "Banking Finance", icon: Banking },
  { title: "Transport", icon: Transport },
  { title: "Healthcare Fitness", icon: Health },
  { title: "E Shopping", icon: Ecommerce },
  { title: "ELearning", icon: Education },
  { title: "Real Estate", icon: RealEstate },
  { title: "Government", icon: Government },
  { title: "Insurance", icon: Insurance },
  { title: "Trading", icon: Trading },
  { title: "Retail", icon: Retail },
  { title: "Logistics", icon: Logistics },
  { title: "Manufacturing", icon: Manufacturing },
];

// ------------------ industriesCardDataStart  --------------------------




// ---------------------------Faq Start ----------------------------------

export const faqs = [
  {
    question:
      "What exactly is a cryptocurrency?",
    answer:
      "Cryptocurrency is a type of digital money that was created to serve as an exchange element for securing online transactions via the use of cryptography.",
  },
  {
    question: "What is the Importance of Cryptocurrency Development?",
    answer:
      "Cryptocurrency development is critical because decentralized currencies are flourishing and poised to become the corporate world's future currency.",
  },
  {
    question: "How much does it cost to create a cryptocurrency application?",
    answer:
      "Cryptocurrency's Price The cost of app development varies based on the app's complexity, intended user base, functionality, and other factors.",
  },
  {
    question:
      "Is it possible to employ cryptocurrency engineers in under 72 hours?",
    answer:
      "Yes. You might start working with a designer within 72 hours of signing up, depending on availability and how quickly you can proceed.",
  },
  {
    question:
      "What is the difference between a coin and a token?",
    answer:
      "Tokens rely on a blockchain, such as Ethereum, which is used to store assets. Coins, on the other hand, require their own blockchain in order to be used elsewhere.",
  },
  {
    question:
      "How can I make my Cryptocurrency App more secure?",
    answer:
      "Integrating security measures like as biometric verification, two-factor authentication, password-protected access, and more may improve the security of a cryptocurrency app.",
  },
  {
    question: "How will I judge the success of the Cryptocurrency App?",
    answer:
      "It is entirely dependent on your goal. Is it the number of downloads or session time, or the amount of money you may make with your Cryptocurrency App?",
  },
  {
    question: "Why should you create Cryptocurrency Apps with Digital Elliptical?",
    answer:
      "Our programrs are well-versed in Cryptocurrency Trading and Exchange App development solutions tailored to the needs of customers.",
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