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
import App from "@/assets/All-Icons/app.svg";
import Website from "@/assets/All-Icons/website.svg";
import PageSpeed from "@/assets/All-Icons/speed-meter-1.svg";
import Keywords from "@/assets/All-Icons/keyword-palnner.svg";
import GTMetrix from "@/assets/All-Icons/speed-meter-2.svg";
import Serp from "@/assets/All-Icons/serp.svg";
import Remarketing from "@/assets/All-Icons/remarketing.svg";
import SearchEngine from "@/assets/All-Icons/marketing-1.svg";
import Sem from "@/assets/All-Icons/sem.svg";
import LinkBuilding from "@/assets/All-Icons/link.svg";
import KeywordSelection from "@/assets/All-Icons/keyword-selection.svg";
import location from "@/assets/All-Icons/location.svg";
import LeadGeneration from "@/assets/All-Icons/lead-generation.svg";
import LeadNurturing from "@/assets/All-Icons/lead-nurturing.svg";
import SocialNetworking from "@/assets/All-Icons/social-media-marketing.svg";
import News from "@/assets/All-Icons/news-latter.svg";
import Research from "@/assets/All-Icons/research.svg";
import LaunchStrategy from "@/assets/All-Icons/bulb.svg";
import MarketingPlan from "@/assets/All-Icons/product-marketing-plan.svg";
import Prelaunch from "@/assets/All-Icons/rocket.svg";
import ViralMarketing from "@/assets/All-Icons/marketing-1.svg";
import SocialMedia from "@/assets/All-Icons/social-media-marketing.svg";
import PCampaigns from "@/assets/All-Icons/ppc-campaign.svg";
import PManagement from "@/assets/All-Icons/ppc-management.svg";
import GoogleAdwords from "@/assets/All-Icons/google-adwords.svg";
import Traffic from "@/assets/All-Icons/traffic.svg";
import DisplayAds from "@/assets/All-Icons/ad.svg";
import SearchAds from "@/assets/All-Icons/search.svg";
import Behance from "@/assets/All-Icons/behance.svg";
import Dribble from "@/assets/All-Icons/dribble.svg";
import Facebook from "@/assets/All-Icons/facebook.svg";
import Instagram from "@/assets/All-Icons/instagram.svg";
import Linkedin from "@/assets/All-Icons/linkedin.svg";
import Medium from "@/assets/All-Icons/m.svg";
import Pinterest from "@/assets/All-Icons/pinterest.svg";
import Tumblr from "@/assets/All-Icons/t.svg";
import Twitter from "@/assets/All-Icons/twitter.svg";
import Youtube from "@/assets/All-Icons/youtube.svg";

const SEO = [
  {
    head: "SEARCH ENGINE OPTIMIZATION (SEO)",
    dis: "In the previous several years, search engines have improved significantly, and our expert SEO services have progressed alongside them. Keyword stuffing and poor content are no longer enough to deceive algorithms. High-ranking content must provide the most comprehensive responses to search queries.",
    icons: [
      { name: "Website", icon: Website },
      { name: "Google Page Speed", icon: PageSpeed },
      { name: "Keyword-Planner", icon: Keywords },
      { name: "GTMetrix", icon: GTMetrix },
      { name: "SERP", icon: Serp },
    ],
  },
];

const SEM = [
  {
    head: "SEARCH ENGINE MARKETING (SEM)",
    dis: "Search Engine Marketing refers to using the capabilities of internet search engines to boost a company's online visibility. It includes the use of paid sources to increase the number of people that visit your website..",
    icons: [
      { name: "Remarketing", icon: Remarketing },
      { name: "Search-engine-campaigns", icon: SearchEngine },
      { name: "SEM", icon: Sem },
    ],
  },
];

const ASO = [
  {
    head: "APP STORE OPTIMIZATION (ASO)",
    dis: "App Store Optimization (ASO) is a technique for increasing the exposure of mobile apps produced for a variety of platforms, including iOS, Android, Windows, Blackberry, and cross-platform apps.",
    icons: [
      { name: "Link-Building", icon: LinkBuilding },
      { name: "App-store-optimization", icon: App },
      { name: "Keyword-Selection", icon: KeywordSelection },
      { name: "App-Localization", icon: location },
    ],
  },
];

const SMM = [
  {
    head: "SOCIAL MEDIA MARKETING (SMM)",
    dis: "Are you looking for strategies to help you raise brand recognition and establish a social presence? If you answered yes, expert social media marketing services may be the perfect solution for your needs.",
    icons: [
      { name: "Behance", icon: Behance },
      { name: "Dribble", icon: Dribble },
      { name: "Facebook", icon: Facebook },
      { name: "Instagram", icon: Instagram },
      { name: "Linkedin", icon: Linkedin },
      { name: "Medium", icon: Medium },
      { name: "Pinterest", icon: Pinterest },
      { name: "Tumblr", icon: Tumblr },
      { name: "Twitter", icon: Twitter },
      { name: "Youtube", icon: Youtube },
    ],
  },
];

const PPC = [
  {
    head: "PAY PER CLICK (PPC)",
    dis: "Pay Per Click is one of the most effective forms of internet marketing since it generates immediate traffic and increases customer outreach. A PPC campaign brings targeted visitors to a company's website and boosts conversion rates, resulting in increased income.",
    icons: [
      { name: "PPC-Campaigns", icon: PCampaigns },
      { name: "PPC-Management", icon: PManagement },
      { name: "Google-Adwords", icon: GoogleAdwords },
      { name: "Traffic", icon: Traffic },
      { name: "Display-Ads", icon: DisplayAds },
      { name: "Search-Ads", icon: SearchAds },
    ],
  },
];

const EMAIL = [
  {
    head: "EMAIL MARKETING",
    dis: "Customers must be engaged in order for them to complete the conversion. To expedite your sales cycle and connect with your consumers, use our experienced email marketing services. Our campaigns are created to guarantee that the appropriate information is sent to the appropriate consumer at the appropriate moment, resulting in a positive impact.",
    icons: [
      { name: "LeadGeneration", icon: LeadGeneration },
      { name: "Lead-Nurturing", icon: LeadNurturing },
      { name: "Email-Marketing", icon: SocialNetworking },
      { name: "Newsletter", icon: News },
    ],
  },
];

const PRODUCT = [
  {
    head: "PRODUCT AND SERVICE LAUNCH",
    dis: "Our knowledge spans all aspects of a successful product launch. We ensure that you can generate a buzz and make the offering an immediate hit from concept to execution, campaign launch, multi-channel marketing, and assessment of the launch plan.",
    icons: [
      { name: "Research", icon: Research },
      { name: "LaunchStrategy", icon: LaunchStrategy },
      { name: "Product Marketing-Plan", icon: MarketingPlan },
      { name: "Prelaunch", icon: Prelaunch },
      { name: "Viral Marketing", icon: ViralMarketing },
      { name: "Social Media", icon: SocialMedia },
    ],
  },
];

export const tabsData = {
  SEO,
  SEM,
  ASO,
  SMM,
  PPC,
  EMAIL,
  PRODUCT,
};
export const tabsApps = [
  { name: "SE", spanText: "O", tab: "SEO" },
  { name: "SE", spanText: "M", tab: "SEM" },
  { name: "AS", spanText: "O", tab: "ASO" },
  { name: "SM", spanText: "M", tab: "SMM" },
  { name: "PP", spanText: "C", tab: "PPC" },
  { name: "Em", spanText: "ail", tab: "EMAIL" },
  { name: "PR", spanText: "ODUCT", tab: "PRODUCT" },
];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import Education from "@/assets/All-Icons/graduation.svg";
import Photograph from "@/assets/All-Icons/camera.svg";
import Pharma from "@/assets/All-Icons/medicine.svg";
import Recruitment from "@/assets/All-Icons/recruiment.svg";
import Manufacturing from "@/assets/All-Icons/manufacturing.svg";
import Ecommerce from "@/assets/All-Icons/ecommerce.svg";
import Cosmetics from "@/assets/All-Icons/cosmetics.svg";
import Architecture from "@/assets/All-Icons/architecture.svg";
import Banking from "@/assets/All-Icons/banking.svg";

export const industriesCardData = [
  { title: "Education and EdTech", icon: Education },
  { title: "Art-Photograph", icon: Photograph },
  { title: "Pharma", icon: Pharma },
  { title: "Recruitment", icon: Recruitment },
  { title: "Manufacturing", icon: Manufacturing },
  { title: "E-shopping", icon: Ecommerce },
  { title: "Cosmetics", icon: Cosmetics },
  { title: "Architecture", icon: Architecture },
  { title: "Banking Finance", icon: Banking },
];

// ------------------ industriesCardDataStart  --------------------------

// ---------------------------Faq Start ----------------------------------

export const faqs = [
  {
    question: "What does it cost to build a mobile application? ",
    answer:
      "Before we begin work on your project, we collaborate with you to create a thorough project specification and then estimate the cost of completion.",
  },
  {
    question:
      "Is your Mobile App Development Project regularly serviced and updated?",
    answer:
      "Yes, we provide the option of contacting us on an ad-hoc basis for assistance with your Mobile App Development project.",
  },
  {
    question:
      "Will I be able to access the App Development project's source code?",
    answer:
      "Yes, the unique code that we develop for your Mobile App Development project will be granted proper copyright or permission rights to you..",
  },
  {
    question: "Is it true that my personal information would be kept private?",
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
    question: "In which categories have you created mobile apps?",
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