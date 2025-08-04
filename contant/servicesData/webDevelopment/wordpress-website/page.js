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
    title: "WooCommerce Development",
    desc: "All your eCommerce features developed at one reliable spot by our team of experts.",
  },
  {
    img: choiceImg2,
    title: "Open source CMS development",
    desc: "Make blogging, cataloging, profile generation and more processes simpler with our elite CMS development services.",
  },
  {
    img: choiceImg3,
    title: "Responsive WordPress Theme Development",
    desc: "Screen sizes are no longer concerns as our responsive theme development services are designed for all aspect ratios and screen variants.",
  },
  {
    img: choiceImg4,
    title: "WordPress Plugin Development",
    desc: "Have a unique concern to solve? Get a custom WordPress plugin developed for added convenience.",
  },
  {
    img: choiceImg5,
    title: "API Integration & Module Management",
    desc: "Experience the best of APi integration and module management services with our WordPress website development services.",
  },
  {
    img: choiceImg6,
    title: "WordPress Migration And Maintenance Services",
    desc: "Moving your website from a different CMS to WordPress? Not a problem as we offer optimum migration and maintenance assistance.",
  },
];

//---------------------------------- Choice End ----------------------------------------


// ----------------------------------SelectedTabs Start---------------------
import MySql from "@/assets/All-Icons/mySql.svg";
import PostGresql from "@/assets/All-Icons/postgre-sql.svg";
import MongoDB from "@/assets/All-Icons/mongoDB.svg";
import PayPal from "@/assets/All-Icons/paypal.webp";
import Stripe from "@/assets/All-Icons/stripe.webp";
import Braintree from "@/assets/All-Icons/braintree.webp";
import Razorpay from "@/assets/All-Icons/razorpay.webp";
import PayCheck from "@/assets/All-Icons/paycheck.webp";
import CartBounty from "@/assets/All-Icons/cartbounty.webp";

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
      { name: "Braintree for WooCommerce Payment Gateway", icon: Braintree },
      { name: "Razorpay for WooCommerce", icon: Razorpay },
      { name: "Stripe Payments", icon: Stripe },

    ],
  },
];

const Cart = [
  {
    head: "Cart Plugins",
    dis: "A well-designed cart can increase conversions and that’s exactly what we as a Magento development company offer through our cart design services.",
    icons: [
      { name: "Woocommerce PayPal Checkout", icon: PayCheck },
      { name: "Abandoned Cart", icon: PayCheck },
      { name: "CartBounty", icon: CartBounty },
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


