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
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import AjaxCart from "@/assets/All-Icons/ajax-cart.webp";
import CrossSell from "@/assets/All-Icons/crosssell.webp";
import PreOrder from "@/assets/All-Icons/preorder.webp";
import QuickOrder from "@/assets/All-Icons/quickorder.webp";
import PayPal from "@/assets/All-Icons/paypal.webp";
import Stripe from "@/assets/All-Icons/stripe.webp";
import Checkout from "@/assets/All-Icons/checkout.webp";
import WorldPay from "@/assets/All-Icons/worldpay.webp";
import CartaSi from "@/assets/All-Icons/cartasi.webp";
import SagePay from "@/assets/All-Icons/sagepay.webp";

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

const Payment = [
  {
    head: "Payment Extensions",
    dis: "Seamlessly integrate payment systems into your architecture and push sales effortlessly with our Magento website development services.",
    icons: [
      { name: "Woocommerce PayPal Checkout", icon: PayPal },
      { name: "Stripe Payments", icon: Stripe },
      { name: "2Checkout", icon: Checkout },
      { name: "WorldPay", icon: WorldPay },
      { name: "CartaSi", icon: CartaSi },
      { name: "SagePay", icon: SagePay },

    ],
  },
];

const Cart = [
  {
    head: "Cart Plugins",
    dis: "A well-designed cart can increase conversions and that’s exactly what we as a Magento development company offer through our cart design services.",
    icons: [
      { name: "Ajax Shopping Cart", icon: AjaxCart },
      { name: "Cross-Sell/Upsell Products", icon: CrossSell },
      { name: "Pre-Order", icon: PreOrder },
      { name: "Quick Order", icon: QuickOrder },
    ],
  },
];



export const tabsData = {
  Database,
  Payment,
  Cart,
};
export const tabsApps = [
  { name: "Da", spanText: "tabase", tab: "Database" },
  { name: "Pa", spanText: "yment", tab: "Payment" },
  { name: "Ca", spanText: "rt", tab: "Cart" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------

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


