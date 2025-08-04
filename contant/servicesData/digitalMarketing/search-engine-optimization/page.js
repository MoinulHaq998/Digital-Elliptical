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

import Website from "@/assets/All-Icons/niche_research.svg";
import PageSpeed from "@/assets/All-Icons/speed_optimization.svg";
import Keywords from "@/assets/All-Icons/keyword_research.svg";

import SocailShares from "@/assets/All-Icons/social_share.svg";
import LinkBuilding from "@/assets/All-Icons/link_building.svg";
import GuestPost from "@/assets/All-Icons/guest.svg";
import PdfSubmission from "@/assets/All-Icons/pdf_submission.svg";
import ProfileBacklink from "@/assets/All-Icons/profile_backlink.svg";
import Comment from "@/assets/All-Icons/blog_comment.svg";
import Web3 from "@/assets/All-Icons/web_3.0.svg";
import Article from "@/assets/All-Icons/article_submission.svg";
import InternalBuilding from "@/assets/All-Icons/internal_backlink.svg";
import External from "@/assets/All-Icons/external.svg";



const OnPage = [
  {
    head: "On-Page SEO",
    dis: "Optimizing web content for search engine visibility and user experience.",
    icons: [
      { name: "Niche Research", icon: Website },
      { name: "Keyword Research", icon: PageSpeed },
      { name: "Speed Optimize", icon: Keywords },
    
    ],
  },
];

const Backlinks = [
  {
    head: "Backlinks Analysis",
    dis: "Backlink analytics: Uncover site link performance and competitor insights effortlessly.",
    icons: [
      { name: "Socail Shares", icon: SocailShares },
      { name: "Link Building", icon: LinkBuilding },
      { name: "Guest Post", icon: GuestPost },
      { name: "Pdf Submission", icon: PdfSubmission },
      { name: "Profile Backlink", icon: ProfileBacklink },
      { name: "Blog Comment", icon: Comment },
      { name: "Web 3.0", icon: Web3 },
      { name: "Article Submission", icon: Article },
      
    ],
  },
];

const Techical = [
  {
    head: "Techical",
    dis: "Optimizing website for search engines, enhancing performance, and user experience.",
    icons: [
      { name: "Internal", icon: InternalBuilding },
      { name: "External", icon: External },
      
    ],
  },
];

export const tabsData = {
  OnPage,
  Backlinks,
  Techical,
};
export const tabsApps = [
  { name: "On", spanText: "-page", tab: "OnPage" },
  { name: "Ba", spanText: "cklinks", tab: "Backlinks" },
  { name: "Te", spanText: "chical", tab: "Techical" },

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

// -------------------------Solution--------------------------------------------
import icon1 from "@/assets/services/digital-markiting/seo.svg";
import icon2 from "@/assets/services/digital-markiting/app-store-optimization.svg";
import icon3 from "@/assets/services/digital-markiting/social-media-marketing.svg";
import icon4 from "@/assets/services/digital-markiting/pay-per-click.svg";
export const solution = [
  {
    img: icon1,
    title: "SEARCH ENGINE OPTIMIZATION",
    desc: "Make a beneficial influence on your brand's online traffic, internet marketing, online product reputation, and online ranking.",
  },
  {
    img: icon2,
    title: "APP STORE OPTIMIZATION",
    desc: "Optimize the search results for your mobile apps in the app store, such as the iPhone App Store, Google Play, Blackberry App Store, and Windows App Store.",
  },
  {
    img: icon3,
    title: "SOCIAL MEDIA MARKETING",
    desc: "Allows you to interact with new consumers and raise brand recognition among current and potential customers.",
  },
  {
    img: icon4,
    title: "PAY PER CLICK",
    desc: "Get immediate traffic to your website. PPC advertising strives to provide the highest possible return on investment in a cost-effective manner.",
  },
];