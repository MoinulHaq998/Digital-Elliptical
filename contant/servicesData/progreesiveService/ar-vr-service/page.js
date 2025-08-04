// --------------------------------------------  Service data --------------------------------------------



// -------------------------------------Choice Start ----------------------

import choiceImg1 from "@/assets/services/choice/arvr1.webp";
import choiceImg2 from "@/assets/services/choice/arvr2.webp";
import choiceImg3 from "@/assets/services/choice/arvr3.webp";
import choiceImg4 from "@/assets/services/choice/arvr4.webp";
import choiceImg5 from "@/assets/services/choice/arvr5.webp";
import choiceImg6 from "@/assets/services/choice/arvr6.webp";

export const choiceCardData = [
  {
    img: choiceImg1,
    title: "ARVR App Development",
    desc: " With very few AR/VR apps today, now would be a good time to collaborate with us and introduce one for your market segment.",
  },
  {
    img: choiceImg2,
    title: "Web-based Augmented Reality",
    desc: "Who said AR can be achieved through just smartphones? Try our web-based AR solutions.",
  },
  {
    img: choiceImg3,
    title: "Location-based AR",
    desc: "Help your customers spot your restaurant or apparel store with ease and lure them creatively through location-based AR.",
  },
  {
    img: choiceImg4,
    title: "iOS ARkit Development",
    desc: "Apple powered and approved for all your AR applications for iOS.",
  },
  {
    img: choiceImg5,
    title: "VR Entertainment Apps",
    desc: "From gaming to movies and television series, pop culture works best with VR.",
  },
  {
    img: choiceImg6,
    title: "IoT + ARVR Apps",
    desc: "Let your app interact with more than one connected device in a network and give your users an experience to remember.",
  },
];

//---------------------------------- Choice End ----------------------------------------


// ----------------------------------SelectedTabs Start---------------------
import Kotlin from "@/assets/All-Icons/kotlin.svg";
import ArVr from "@/assets/All-Icons/arvr.svg";
import Arcore from "@/assets/All-Icons/google-arcore.svg";
import Vuforia from "@/assets/All-Icons/vuforia.png";
import Kudan from "@/assets/All-Icons/kudan.png";
import Maxst from "@/assets/All-Icons/maxst.png";
import Deeper from "@/assets/All-Icons/deeper.png";
import Wikitude from "@/assets/All-Icons/wikitude.png";
import object from "@/assets/All-Icons/3d-object.png";
import SmartGlasses from "@/assets/All-Icons/smart-glasses.svg";
import Cloud from "@/assets/All-Icons/cloud.svg";
import Slam from "@/assets/All-Icons/slam.png";
import Unity from "@/assets/All-Icons/unity-3d.svg";
import UnrealEngine from "@/assets/All-Icons/unreal-engine.svg";
import Blender from "@/assets/All-Icons/blender.svg";
import Aframe from "@/assets/All-Icons/a-frame.svg";
import Vizor from "@/assets/All-Icons/vizor.svg";
import Sketchup from "@/assets/All-Icons/sketch.svg";
import Eye from "@/assets/All-Icons/eye.svg";

import GoogleSketch from "@/assets/All-Icons/g-sketch.svg";
import Tilt from "@/assets/All-Icons/tilt.svg";
import Gamekit from "@/assets/All-Icons/game-kit.svg";
import Gdx from "@/assets/All-Icons/gdx.svg";


const arApp = [
  {
    head: "Ar App",
    dis: "Offer fun experiences with the camera on your clients' smartphones and find inventive ways to use them to increase sales, foster loyalty, and more.",
    icons: [
      { name: "Artoolkit", icon: ArVr },
      { name: "Google-arcore", icon: Arcore },
      { name: "Apple arkit", icon: ArVr },
      { name: "Vuforia", icon: Vuforia },
      { name: "Kudan", icon: Kudan },
      { name: "Maxst", icon: Maxst },
      { name: "Deeper", icon: Deeper },
      { name: "Wikitude", icon: Wikitude },
    ],
  },
];

const appTools = [
  {
    head: "APP Tools We Use",
    dis: "We use the most cutting-edge technology, such as 3D object tracking, smart glasses, and cloud recognition, to provide unique experiences for your customers.",
    icons: [
      { name: "3d Object Tracking", icon: object },
      { name: "Smart Glasses", icon: SmartGlasses },
      { name: "Cloud Recognition", icon: Cloud },
      { name: "Slam", icon: Slam },
    ],
  },
];

const vrApp = [
  {
    head: "Vr App",
    dis: "Consider entirely altering your users environment and transporting them to different world to improve their connection to your business.",
    icons: [
      { name: "Unity 3d", icon: Unity },
      { name: "Unreal Engine", icon: UnrealEngine },
      { name: "Cry Engine", icon: Eye },
      { name: "Blender", icon: Blender },
      { name: "Google Sketch Up", icon: GoogleSketch },
      { name: "Tilt Brush", icon: Tilt },
      { name: "Appgamekit Vr", icon: Gamekit },
      { name: "Libgdx", icon: Gdx },
    ],
  },
];

const vrTools = [
  {
    head: "VR Tools We Use",
    dis: "We have a full array of tools at our disposal, ranging from cutting-edge mobile VR tools to tools Utilized in the video game industry like Unreal Engine and Blender.",
    icons: [
      { name: "Unity 3d", icon: Unity },
      { name: "Unreal Engine", icon: UnrealEngine },
      { name: "Blender", icon: Blender },
      { name: "A-frame", icon: Aframe },
      { name: "Vizor.io", icon: Vizor },
      { name: "Sketch-up", icon: Sketchup },
    ],
  },
];

export const tabsData = {
  arApp,
  appTools,
  vrApp,
  vrTools,
};

export const tabsApps = [
  { name: "AR", spanText: "APP", tab: "arApp" },
  { name: "APP", spanText: "Tools", tab: "appTools" },
  { name: "VR", spanText: "APP", tab: "vrApp" },
  { name: "VR", spanText: "TOOLS", tab: "vrTools" },
];
// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardDataARVP Start  --------------------------

import MultiMedia from "@/assets/All-Icons/multimedia.svg";
import VoipApp from "@/assets/All-Icons/voip-app.svg";
import DataApp from "@/assets/All-Icons/db.svg";
import Enterprise from "@/assets/All-Icons/enterprise.svg";
import SocialNetworking from "@/assets/All-Icons/social-media-marketing.svg";
import MobileGame from "@/assets/All-Icons/game.svg";
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



// ------------------ industriesCardDataARVP Start  --------------------------


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


