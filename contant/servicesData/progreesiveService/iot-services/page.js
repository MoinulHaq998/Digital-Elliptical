// --------------------------------------------  Service data --------------------------------------------


// ----------------------------------SelectedTabs Start---------------------
import AWS from "@/assets/All-Icons/aws.svg";
import MQTT from "@/assets/All-Icons/mqtt.svg";
import XMPP from "@/assets/All-Icons/xmpp.svg";
import AMQP from "@/assets/All-Icons/amqp.svg";
import COAP from "@/assets/All-Icons/coap.svg";
import Wireless from "@/assets/All-Icons/net.svg";
import Ethernet from "@/assets/All-Icons/enternet.svg";
import Bluetooth from "@/assets/All-Icons/bluetooth.svg";
import LTE from "@/assets/All-Icons/4g.svg";
import GSM from "@/assets/All-Icons/gsm.svg";
import Sensors from "@/assets/All-Icons/sensor.svg";
import CloudSync from "@/assets/All-Icons/cloud-sync.svg";
import REST from "@/assets/All-Icons/rest.svg";
import SOAP from "@/assets/All-Icons/soap.svg";
import Apple from "@/assets/All-Icons/apple.svg";
import Andriod from "@/assets/All-Icons/android.svg";


const Supported = [
  {
    head: "Supported Protocols",
    dis: "Digital Elliptical designs and develops next-generation IoT solutions for industrial automation, home automation, and other IoT use cases byutilizingall existing IoT protocols. With their extensive experience dealing with complex frameworks for cutting-edge performance and connection, our IoT developers are a source of information.",
    icons: [
      { name: "MQTT", icon: MQTT },
      { name: "XMPP", icon: XMPP },
      { name: "AMQP", icon: AMQP },
      { name: "COAP", icon: COAP },
    ],
  },
];

const Device = [
  {
    head: "Device Connectivity",
    dis: "The calibre, extent, and degree of connectivity that the network provides determine how effective the IoT network is. Our IoT solutions are built to take advantage of all current connectivity methods, allowing for the simultaneous connection of several devices. We provide end-to-end connectivity technologies for IoT systems.",
    icons: [
      { name: "Wireless", icon: Wireless },
      { name: "Ethernet", icon: Ethernet },
      { name: "Bluetooth", icon: Bluetooth },
      { name: "4G LTE", icon: LTE },
      { name: "GSM Network (2G/3G and SMS)", icon: GSM },

    ],
  },
];

const Cloud = [
  {
    head: "Cloud Platform",
    dis: "We make use of the cutting-edge cloud computing infrastructure provided by Amazon Web Services, which guarantees minimal downtime and total accessibility. To ensure that everything is available constantly, we use AWS cloud technology across all of our IoT products.",
    icons: [
      { name: "AWS", icon: AWS },
    ],
  },
];

const Driving = [
  {
    head: "Driving Forces for IoT",
    dis: "Any IoT network relies on technology as its foundation. We use cutting-edge software, frameworks, and hardware to promote growth through IoT. Our IoT-based solutions are propelled by a strong and dependable sensor and cloud synchronisation technology.",
    icons: [
      { name: "Sensors", icon: Sensors },
      { name: "Cloud Sync", icon: CloudSync },
     
    ],
  },
];

const Web = [
  {
    head: "Web Service",
    dis: "We employ dependable web service technologies that encourage compatibility between hardware and operating systems. By doing this, you can guarantee that your IoT network may be accessed remotely via a web app or web service without being dependent on a terminal or an operating system.",
    icons: [
      { name: "REST", icon: REST },
      { name: "SOAP", icon: SOAP },
     
    ],
  },
];

const OS= [
  {
    head: "O.S",
    dis: "For all popular mobile operating systems, our knowledgeable team can provide IoT networks and solutions. This implies that iOS and Android devices can be used to operate IoT products and networks.",
    icons: [
      { name: "IOS", icon: Apple },
      { name: "Android", icon: Andriod },
     
    ],
  },
];

export const tabsData = {
  Supported,
  Device,
  Cloud,
  Driving,
  Web,
  OS
};

export   const tabsApps = [
  { name: "Su", spanText: "pported", tab: "Supported" },
  { name: "De", spanText: "vice", tab: "Device" },
  { name: "Cl", spanText: "oud", tab: "Cloud" },
  { name: "Dr", spanText: "iving", tab: "Driving" },
  { name: "We", spanText: "b", tab: "Web" },
  { name: "O", spanText: "S", tab: "OS" },

];

// ----------------------------------SelectedTabs End---------------------

// ------------------ industriesCardData Start  --------------------------
import MultiMedia from "@/assets/All-Icons/multimedia.svg";
import BeaconApp from "@/assets/All-Icons/beacon.svg";
import Enterprise from "@/assets/All-Icons/enterprise.svg";
import location from "@/assets/All-Icons/location.svg";
import Business from "@/assets/All-Icons/business-app.svg";
import Chat from "@/assets/All-Icons/social.svg";

export const industriesCardData= [
  { title: "Mobile End-user Apps", icon: MultiMedia },
  { title: "Bluetooth App Development", icon: Bluetooth },
  { title: "iBeacon App Development", icon: BeaconApp },
  { title: "Backend & API Development", icon: Enterprise },
  { title: "App Security Consulting", icon: Chat },
  { title: "Big Data Analytics", icon: Business },
  { title: "M2M Communication", icon: location },
  { title: "Wired and Wi-Fi Solutions", icon: Wireless },
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


