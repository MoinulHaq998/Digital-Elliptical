import Image from "next/image";
import garment1 from '@/assets/success-stories/garment/1-01.webp'
import garment3 from '@/assets/success-stories/garment/1-07.webp'
import garment4 from '@/assets/success-stories/garment/1-08.webp'
import garment5 from '@/assets/success-stories/garment/1-09.webp'
import garment6 from '@/assets/success-stories/garment/1-10.webp'

import ecommerce1 from '@/assets/success-stories/ecommerce-store/1-01.png'
import ecommerce2 from '@/assets/success-stories/ecommerce-store/1-13.png'
import ecommerce3 from '@/assets/success-stories/ecommerce-store/1-07.png'
import ecommerce4 from '@/assets/success-stories/ecommerce-store/1-08.png'
import ecommerce5 from '@/assets/success-stories/ecommerce-store/1-09.png'
import ecommerce6 from '@/assets/success-stories/ecommerce-store/1-10.png'

import investment1 from "@/assets/success-stories/investment/1-01.png";
import investment2 from "@/assets/success-stories/investment/1-08.png";
import investment3 from "@/assets/success-stories/investment/1-07.png";
import investment4 from "@/assets/success-stories/investment/1-09.png";
import investment5 from "@/assets/success-stories/investment/1-10.png";


import flexWheeler1 from "@/assets/success-stories/flex-wheeler/1-02.webp";
import flexWheeler2 from "@/assets/success-stories/flex-wheeler/flex-11.png";
import flexWheeler3 from "@/assets/success-stories/flex-wheeler/flex-12.png";
import flexWheeler4 from "@/assets/success-stories/flex-wheeler/flex-13.png";
import flexWheeler5 from "@/assets/success-stories/flex-wheeler/flex-14.png";

import avGlobal1 from "@/assets/success-stories/av-global/1-02.webp";
import avGlobal3 from "@/assets/success-stories/av-global/1-10.png";
import avGlobal4 from "@/assets/success-stories/av-global/1-11.png";
import avGlobal5 from "@/assets/success-stories/av-global/1-12.png";

import Donation1 from "@/assets/success-stories/donation/DONATION-01.png";
import Donation2 from "@/assets/success-stories/donation/DONATION-07.png";
import Donation3 from "@/assets/success-stories/donation/DONATION-08.png";
import Donation4 from "@/assets/success-stories/donation/DONATION-09.png";
import Donation5 from "@/assets/success-stories/donation/DONATION-10.png";

import services1 from "@/assets/success-stories/services/services-01.png";
import services2 from "@/assets/success-stories/services/services-07.png";
import services3 from "@/assets/success-stories/services/services-08.png";
import services4 from "@/assets/success-stories/services/services-09.png";
import services5 from "@/assets/success-stories/services/services-10.png";

const data = [
    //Garment Store----------------------------------------
    {   
        // Section Fisrt
        slug: "garment-store",
        first: garment1 ,
        bgColor: "#3e464d",
        
        heading: "GARMENTS STORE",
        description: "The Garments Store is an online platform offering a wide range of men's and women's apparel, accessories, and customized collections. With an emphasis on quality, affordability, and trendiness, the store aims to provide customers with an easy and enjoyable shopping experience. The platform includes features like a sleek dashboard for the admin, a user-friendly website, and mobile apps designed for seamless shopping.",

        // Section Two
        third: garment3,
        fourHeading: "UI/UX Design and Prototype:",
        
        foreDescription: [
          {
              para: "The Garments Store’s UI/UX design is focused on simplicity, speed, and ease of use. A minimalistic design approach with intuitive navigation ensures that customers can quickly find products, navigate between categories, and complete their purchases without any hassle.",
          },
          {
              para: "- Prototype: We created an interactive prototype to visualize the user journey, testing various interactions and designs to ensure optimal usability.",
          },
          {
              para: "- Mobile and Desktop Views: Both the mobile app and the website are responsive, providing a seamless shopping experience across devices.",
          },
       
      ],

        // Section Three
        fiveHeading: "Challenges Faced During Development:",
        fiveDescription: `Customization Integration: One of the key challenges was integrating the customized collection feature, where we had to ensure that the customization options worked flawlessly across all devices, and orders were captured accurately in the system. \n\nInventory Management: Keeping track of product availability in real-time and managing stock across multiple platforms (mobile and website) posed synchronization challenges. \n\nMobile Responsiveness: Optimizing the mobile app and website to ensure they work smoothly across different screen sizes and resolutions required extensive testing and fine-tuning. \n\nPayment Gateway Compatibility: Ensuring that the payment system works seamlessly with different currencies and payment methods, especially for international customers, was a crucial challenge.\n\nPerformance Optimization: Ensuring fast loading speeds despite having high-resolution product images and interactive UI elements was a technical challenge that required optimization at both the server and frontend levels.`,

        technologies: [
          {
            tech: "TypeScript",
          },
          {
            tech: "Nest.js",
          },
          {
            tech: "Angular",
          },
          {
            tech: "MongoDB",
          },
          
        ],
        // Section Four
        slider1: garment3,
        slider2: garment6,
        slider3: garment4,
        slider4: garment5,
        

        // Section Four
        faqs: [
            {
              question: "What products do you offer?",
              answer: "We offer a wide range of men's and women's clothing, accessories, and customized products that you can personalize according to your preferences.",
            },
            {
              question: "How do I customize a product?",
              answer: "To customize a product, simply select the 'Customize' option on the product page, choose your desired color, style, and any other available options, and place your order.",
            },
            {
              question: "Can I return customized products?",
              answer: "Unfortunately, customized products cannot be returned unless they are defective. Please ensure that your customizations are accurate before confirming your order.",
            },
            {
              question: "How do I track my order?",
              answer: "Once your order is shipped, you will receive a tracking number via email or SMS, which you can use to track your shipment.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept major credit/debit cards, PayPal, and other secure online payment methods for your convenience.",
            },
        ]              

    },

    //E-Commerce Store---------------------------------------- 
    {
        slug: "e-commerce-store",
        first: ecommerce1,
        bgColor: "#a39492",

        heading: "E-Commerce Store",
        description: "The E-Commerce Store is an online platform offering a diverse selection of products from various categories. With a user-friendly interface and seamless navigation, the platform allows customers to explore products, make secure purchases, and track their orders. The website and mobile apps are designed to ensure an optimal shopping experience, with a comprehensive admin dashboard to manage all operations.",

        // Section Two
        third: ecommerce2,
        fourHeading: "UI/UX Design and Prototype:",
        fourDescription: `The design of the E-Commerce Store focuses on ease of use and smooth navigation, ensuring that customers can quickly find the products they need and complete purchases without friction. The prototype was tested extensively to optimize the user journey, from browsing through categories to completing a secure checkout.`,
        foreDescription: [
                {
                    para: "Responsive Design: The website adapts seamlessly to all devices, while the mobile apps for Android and iOS provide an intuitive and fast shopping experience.",
                },
                {
                    para: "User-Friendly Interface: A clean and simple design with easy-to-use product filters, shopping cart management, and checkout options.",
                },
             
            ],


        // Section Three
        fiveHeading: "Challenges Faced During Development:",
        
        fiveDescription: `Category Management: Ensuring all categories were easy to navigate without overwhelming users.`,
        fiveDescription1: `Mobile App Optimization: Making sure the mobile apps provided a smooth experience across various device types.`,
        fiveDescription2: `Payment Integration: Handling multiple payment options and ensuring smooth international transactions.`,

        technologies: [
          {
            tech: "Java Script",
          },
          {
            tech: "Nest.js",
          },
          {
            tech: "AngularJS",
          },
          {
            tech: "MongoDB",
          },
          
        ],
        // Section Four
        slider1: ecommerce3,
        slider2: ecommerce4,
        slider3: ecommerce5,
        slider4: ecommerce6,
        

        // Section Four
        faqs: [
            {
              question: "What types of products are available on the platform?",
              answer: "We offer a variety of products, including electronics, groceries, fashion, health and beauty items, and more.",
            },
            {
              question: "How can I track my order?",
              answer: "You’ll receive a tracking number once your order is shipped, which you can use to track the delivery.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept credit/debit cards, PayPal, and mobile wallet payments.",
            },
            {
              question: "Can I return products?",
              answer: "Yes, we offer a 30-day return policy for most products.",
            },
            {
              question: "How do I receive updates on discounts?",
              answer: "You can sign up for our newsletter to receive promotional updates, discounts, and special offers.",
            },
        ]              
    },

    //Investment-Store---------------------------------------- 
    {
      slug: "investment-store",
      first: investment1,
      bgColor: "#284481",

      heading: "Investment-Store",
      description: "The Investment Store is a robust platform designed to simplify and streamline investment opportunities for users. This platform offers a range of financial products and investment solutions while delivering an intuitive user experience. The project focuses on providing a secure, scalable, and user-friendly system, integrating innovative features tailored to meet the needs of modern investors.",

      // Section Two
      third: investment2,
      fourHeading: "UI/UX Design and Prototype:",
      fourDescription: `The design process focused on creating a seamless user experience with the following highlights:`,
      foreDescription: [
              {
                  para: "User-Centric Dashboard: An intuitive interface that presents portfolio performance, transaction history, and recommendations at a glance.",
              },
              {
                  para: "Interactive Charts: Real-time data visualization for market trends and user portfolios.",
              },
              {
                  para: "Personalization: Customized content based on user preferences and risk tolerance.",
              },
              {
                  para: "Accessibility: A responsive design compatible with all devices, including desktop, tablet, and mobile.",
              },
           
          ],


      // Section Three
      fiveHeading: "Challenges Faced During Development:",
      
      fiveDescription: `Complex Financial Calculations Challenge: Developing accurate algorithms for ROI, risk profiling, and market trend predictions. Solution: Partnering with financial experts to validate algorithms and utilizing machine learning to improve predictions over time.`,
      fiveDescription1: `Data Security and Privacy Challenge: Ensuring secure transactions and protecting sensitive financial data. Solution: Implementing advanced encryption methods, multi-factor authentication, and compliance with financial regulations like GDPR and PCI DSS.`,
      fiveDescription2: `Scalability Challenge: Handling a growing user base and fluctuating market data in real-time. Solution: Leveraging cloud computing technologies and microservices architecture for scalability and high availability.`,
      fiveDescription3: `Integration with Third-Party APIs Challenge: Seamlessly integrating with financial data providers, payment gateways, and trading platforms. Solution: Using robust middleware and maintaining comprehensive documentation for API integrations.`,
      fiveDescription4: `User Education Challenge: Simplifying complex investment concepts for new users. Solution: Developing an engaging knowledge base with tutorials, guides, and live support. `,

      technologies: [
        {
          tech: "Dart",
        },
        {
          tech: "Flutter",
        },
        {
          tech: "Shelf",
        },
        {
          tech: "Firebase",
        },
        
      ],
      // Section Four
      slider1: investment3,
      slider2: investment2,
      slider3: investment4,
      slider4: investment5,
      

      // Section Four
      faqs: [
          {
            question: "What types of investments are available on the platform?",
            answer: "The Investment Store offers mutual funds, stocks, bonds, real estate, cryptocurrency, savings plans, and retirement funds.",
          },
          {
            question: "Is my financial data secure?",
            answer: "Yes, we use industry-standard encryption, secure payment gateways, and multi-factor authentication to ensure data security.",
          },
          {
            question: "Can I use the platform on mobile devices?",
            answer: "Absolutely! The platform is fully responsive and accessible via mobile apps and web browsers.",
          },
          {
            question: "How does the platform help beginners?",
            answer: "We offer educational resources like blogs, tutorials, and webinars to guide new investors step by step.",
          },
          {
            question: "What is the role of a Raiser?",
            answer: "A Raiser is an investment manager who creates and manages investment products on the platform.",
          },
          {
            question: "Can I customize my dashboard?",
            answer: "Yes, users can personalize their dashboards based on preferences and investment goals.",
          },
      ]              
    },

    //Ride Projects---------------------------------------- 
    {
      slug: "ride-projects",
      first: flexWheeler1,
      bgColor: "#00b2ac",

      heading: "Ride Projects: A Comprehensive Ride-Hailing Solution",
      description: "Our Ride Projects aim to create a seamless and efficient ride-hailing platform, designed to connect riders with drivers in real time. The goal was to build a highly functional and user-friendly application, which integrates a rider app, driver app, and an admin dashboard to facilitate smooth operations for both customers and operators.",

      // Section Two
      third: flexWheeler2,
      fourHeading: "UI/UX Design and Prototype:",
      fourDescription: `The design of the Ride Projects is centered around simplicity and user convenience. The UI/UX approach emphasizes:`,
      foreDescription: [
              {
                  para: "Rider App: A clean, intuitive interface with easy navigation to allow users to book rides in a few taps. The app includes features such as ride scheduling, real-time tracking, and multiple payment options.",
              },
              {
                  para: "Driver App: Designed with easy-to-follow instructions, the driver app includes features for ride requests, navigation, earnings tracking, and in-app communication with riders.",
              },
              {
                  para: "Admin Dashboard: A web-based interface for administrators that is sleek, minimalistic, and fully functional. It allows real-time tracking of drivers, riders, and payments, as well as the ability to generate reports and analyze key performance indicators.",
              },
              
           
          ],


      // Section Three
      fiveHeading: "Challenges Faced During Development:",
      
      fiveDescription: `- Real-Time Tracking Integration: Implementing real-time ride tracking was a challenge due to the need for accurate geolocation services. We integrated APIs like Google Maps to ensure seamless real-time data flow between the rider, driver, and admin.`,
      fiveDescription1: `- Scalability: Ensuring that the platform could scale effectively as users increased required robust backend infrastructure. Optimizations were made to handle large numbers of concurrent users and rides.`,
      fiveDescription2: `- Payment Gateway Integration: Integrating multiple payment gateways, especially region-specific ones, posed challenges. We overcame this by carefully selecting payment solutions that were secure and easy to integrate.`,
      fiveDescription3: `- Cross-Platform Compatibility: Ensuring a smooth user experience across both iOS and Android for the apps, while keeping the website responsive across various devices, required extensive testing and adjustments.`,
      fiveDescription4: `- User Data Security: Security protocols were crucial to protect user data, especially during payment processing and user authentication.`,

      technologies: [
        {
          tech: "Kotlin",
        },
        {
          tech: "WebFlux",
        },
        {
          tech: "Javalin",
        },
        {
          tech: "MySql",
        },
        
      ],
      // Section Four
      slider1: flexWheeler2,
      slider2: flexWheeler3,
      slider3: flexWheeler4,
      slider4: flexWheeler5,
      

      // Section Four
      faqs: [
          {
            question: "What payment methods are available on the platform?",
            answer: "Riders can pay using credit/debit cards, wallets, or cash. Multiple payment gateways ensure secure transactions.",
          },
          {
            question: "How are ride fares calculated?",
            answer: "Fares are based on distance, time taken, and the type of ride chosen. Surge pricing may apply during peak hours.",
          },
          {
            question: "Can a rider cancel a ride after booking?",
            answer: "Yes, riders can cancel a ride, but a cancellation fee may apply if the driver is already on the way.",
          },
          {
            question: "How does the driver know when to pick up the rider?",
            answer: "Once a ride is booked, the driver is notified with the rider’s pick-up location and can navigate directly using the in-app GPS.",
          },
          {
            question: "Can an admin track rides in real-time?",
            answer: "Yes, the admin can monitor all active rides through the admin dashboard and can intervene if necessary.",
          },
          {
            question: "How do drivers earn on the platform?",
            answer: "Drivers earn based on the fare of each completed ride, minus a small commission taken by the platform.",
          },
          {
            question: "How does the app handle customer support?",
            answer: "In-app support is available for both riders and drivers. Issues can be reported, and a support team responds promptly.",
          },
      ]              
    },

    //Auction Project---------------------------------------- 
    {
      slug: "auction-project",
      first: avGlobal1,
      bgColor: "#f09019",

      heading: "Auction Project: Revolutionizing Online Bidding and Selling",
      description: "Our Auction Project was designed to transform how users interact with auctions by creating a seamless platform for online bidding and selling. With advanced features tailored for administrators, users, and riders, the solution aimed to bring simplicity and efficiency to the auctioning experience. The platform encompasses intuitive mobile apps for Android and iOS, a user-friendly website, a comprehensive admin dashboard, and robust support for riders to manage logistics.",

      // Section Two
      third: avGlobal1,
      fourHeading: "UI/UX Design and Prototype:",
      fourDescription: `Our design philosophy centered around simplicity and user engagement. Key highlights include:`,
      foreDescription: [
              {
                  para: "- Modern Aesthetics: A sleek, clean interface to ensure users could navigate effortlessly.",
              },
              {
                  para: "- Interactive Prototypes: Early prototypes showcased real-time bidding processes, product exploration, and secure payment gateways, allowing stakeholders to test the flow before full development.",
              },
              {
                  para: "- Responsive Design: Ensuring the platform performed seamlessly across all devices—mobile, tablet, and desktop.",
              },
           
          ],


      // Section Three
      fiveHeading: "Challenges Faced During Development:",
      
      fiveDescription: `Real-Time Bidding System:  - Developing a lag-free, scalable bidding system required advanced server-side technologies and thorough stress testing. `,
      fiveDescription1: `Identity Verification: - Ensuring a secure KYC (Know Your Customer) process for both buyers and sellers. `,
      fiveDescription2: `Payment Security: - Implementing secure and seamless payment systems to handle high-value transactions. `,
      fiveDescription3: `UI Consistency: - Designing an intuitive experience that worked equally well across apps and the website. `,
      
      technologies: [
        {
          tech: "Python",
        },
        {
          tech: "Django",
        },
        {
          tech: "Flask API",
        },
        {
          tech: "PostgreSQL",
        },
        
      ],
      // Section Four
      slider1: avGlobal3,
      slider2: avGlobal4,
      slider3: avGlobal5,
      slider4: avGlobal3,
      

      // Section Four
      faqs: [
          {
            question: "What categories of products can be listed for auction?",
            answer: "Our platform supports various categories, including electronics, fashion, real estate, automobiles, and art collectibles.",
          },
          {
            question: "Is the bidding process real-time?",
            answer: "Yes, all auctions operate in real-time, with instant updates and notifications.",
          },
          {
            question: "How secure is the platform for transactions?",
            answer: "We use encrypted payment gateways and follow industry-standard security protocols to ensure all transactions are safe.",
          },
          {
            question: "Can sellers set reserve prices for auctions?",
            answer: "Yes, sellers can define reserve prices to ensure products are not sold below their minimum expected value.",
          },
          {
            question: "Does the platform support international auctions?",
            answer: "Currently, the platform supports auctions within select regions but can be scaled for international use.",
          },
         
      ]              
    },

    //Donation Project---------------------------------------- 
    {
      slug: "donation-project",
      first: Donation1,
      bgColor: "#091f1b",


      heading: "Donation Project",
      description: "The Donation Project aimed to create a digital platform where donors and recipients could connect seamlessly. The goal was to build an intuitive application and website that facilitated donations, tracked campaigns, and managed both donor and recipient accounts effectively. Our comprehensive approach included designing a user-friendly interface, robust admin dashboard, and scalable backend systems.",

      // Section Two
      third: Donation2,
      fourHeading: "UI/UX Design and Prototype:",
      
      foreDescription: [
              {
                  para: "- Designed a clean, minimal interface to ensure accessibility for all users.",
              },
              {
                  para: "- Prototypes were tested with real users to optimize navigation and usability.",
              },
              {
                  para: "- Developed real-time notifications for updates on campaigns and donations.",
              },
             
          ],

      // Section Three
      fiveHeading: "Challenges Faced During Development:",
      
      fiveDescription: `Scalability: Building a platform to handle a high volume of simultaneous users required robust backend architecture. We implemented cloud services to ensure scalability. `,
      fiveDescription1: `User Trust: Gaining trust for a donation platform was critical. To address this, we added features like verified campaigns, secure payments, and user reviews. `,
      fiveDescription2: `Payment Gateway Integration: Different regions had unique payment requirements. We collaborated with multiple gateways to ensure global functionality. `,
      fiveDescription3: `Data Privacy: Since sensitive user information was involved, implementing advanced security measures like data encryption and GDPR compliance was essential. `,
      fiveDescription4: `User Retention: Providing value beyond donations, such as engagement metrics for donors and success stories from recipients, helped retain users. `,

      technologies: [
        {
          tech: "Bootstrap",
        },
        {
          tech: "Laravel",
        },
        {
          tech: "PHP",
        },
        {
          tech: "MySql",
        },
        
      ],
      // Section Four
      slider1: Donation3,
      slider2: Donation2,
      slider3: Donation4,
      slider4: Donation5,

      // Section Four
      faqs: [
          {
            question: "What security measures are in place for donations?",
            answer: "All transactions are encrypted, and campaigns are verified to prevent fraud.",
          },
          {
            question: "Can I track how my donation is being used?",
            answer: "Yes, our app provides transparency reports and regular updates on the progress of campaigns.",
          },
          {
            question: "Is there a fee for using the platform?",
            answer: "The platform charges a minimal fee to cover operational costs, with the majority of the donation reaching the intended recipient.",
          },
          {
            question: "How can organizations register their campaigns?",
            answer: "Registered non-profits can sign up via the recipient dashboard, complete the verification process, and start listing campaigns.",
          },
          {
            question: "What happens if a campaign doesn’t reach its goal?",
            answer: "Depending on campaign settings, funds can either be refunded to donors or used for similar causes.",
          },
         
      ]              
    },

     //Services Project---------------------------------------- 
     {
      slug: "services-project",
      first: services1,
      bgColor: "#001837",


      heading: "Services Project",
      description: "The Services Project aimed to revolutionize the way users access and manage on-demand services. Our objective was to create a multi-faceted platform catering to customers, vendors, and managers while providing administrators with powerful tools for oversight. The project included mobile applications for end-users, vendors, and managers, as well as a robust admin dashboard for platform management.",

      // Section Two
      third: services2,
      fourHeading: "UI/UX Design and Prototype:",
      
      foreDescription: [
              {
                  para: "- Admin Dashboard: A centralized tool for monitoring platform activity, managing users and vendors, and generating analytics.",
              },
              {
                  para: "- Developed an intuitive and visually appealing interface for all user types to enhance accessibility.",
              },
              {
                  para: "- Conducted user testing with different demographics to ensure a seamless experience across applications.",
              },
              {
                  para: "- Vendor Application: A platform for service providers to manage their offerings, schedules, and customer interactions.",
              },
             
          ],

      // Section Three
      fiveHeading: "Challenges Faced During Development:",
      
      fiveDescription: `Complex User Hierarchy: Balancing the needs of multiple user types—customers, vendors, managers, and administrators—was a key challenge. We created customized workflows to cater to each group effectively. `,
      fiveDescription1: `Real-Time Tracking: Implementing accurate and fast location services required leveraging advanced mapping APIs and optimizing server performance.  `,
      fiveDescription2: `Payment System Complexity: Ensuring secure and seamless payments for a variety of services necessitated working with multiple payment gateways and compliance with regional regulations. `,
      fiveDescription3: `Vendor and Manager Training: Educating vendors and managers to use their respective apps effectively was an essential part of the deployment phase. `,
      fiveDescription4: `Scalability and Load Testing: Simulating real-world conditions with high user loads revealed performance bottlenecks, which were resolved by optimizing the backend. `,

      technologies: [
        {
          tech: "Html",
        },
        {
          tech: "Java Script",
        },
        {
          tech: "Bootstrap",
        },
        {
          tech: "PHP",
        },
        
      ],
      // Section Four
      slider1: services3,
      slider2: services4,
      slider3: services5,
      slider4: services2,

      // Section Four
      faqs: [
          {
            question: "How does the user app connect to vendors?",
            answer: "The app uses real-time location services and intelligent algorithms to match users with the most suitable vendors.",
          },
          {
            question: "Is there a fee for vendors to join the platform?",
            answer: "Vendors pay a nominal subscription fee and a small percentage of each completed transaction.",
          },
          {
            question: "How secure are the payments?",
            answer: "All transactions are encrypted and processed through trusted payment gateways, ensuring maximum security.",
          },
          {
            question: "Can managers customize their dashboards?",
            answer: "Yes, managers can tailor their dashboards to display metrics and reports relevant to their responsibilities.",
          },
          {
            question: "What happens if a service request is not fulfilled?",
            answer: "Users can escalate unresolved issues to managers through the app, who will address and resolve them promptly.",
          },
         
      ]              
    },





    //Dummy----------------------------------------
    // {
    //   slug: "garment-store",
    //   first: garment1 ,
    //   heading: "GARMENTS STORE",
    //   description: "The Garments Store is an online platform offering a wide range of men's and women's apparel, accessories, and customized collections. With an emphasis on quality, affordability, and trendiness, the store aims to provide customers with an easy and enjoyable shopping experience. The platform includes features like a sleek dashboard for the admin, a user-friendly website, and mobile apps designed for seamless shopping.",

    //   // Second Section
    //   second: garment2,
    //   secHeading: "Products Related:",
    //   secDescription: [
    //       {
    //           para: "The Garments Store features a diverse range of products, including:",
    //       },
    //       {
    //           para: "Men’s Collection: This includes everything from casual wear like shirts, pants, and t-shirts to formal suits, outerwear, and accessories like wallets and belts.",
    //       },
    //       {
    //           para: "Women’s Collection: A wide variety of items such as dresses, tops, skirts, trousers, outerwear, and accessories like handbags, jewelry, and scarves.",
    //       },
    //       {
    //           para: "Customized Collection: The store offers a unique collection of customizable products, allowing customers to personalize certain items with their preferred colors, sizes, or embroidery.",
    //       }
    //   ],

    //   // Third Section
    //   second: garment2,
    //   thirdHeading: "Men and Women Collection Related:",
    //   thirdDescription: "The men's and women's collections are designed to cater to a wide range of tastes, from classic to modern styles. Products are organized by categories to make shopping easier. Each category includes detailed descriptions, high-quality images, and size guides to ensure customer satisfaction. A filtering system is provided, allowing users to narrow down their search based on size, color, material, and price range.",
      
    //   cardHeading: "Collection Related",
    //   cardDescription: "One of the key highlights of the Garments Store is the customized collection, where users can personalize products according to their preferences. This feature enables customers to:\n\nChoose fabric, colors, and styles.\n\nAdd their name or initials to items.\n\nSelect specific patterns or designs for select apparel.This section leverages an interactive UI/UX design to enhance the user experience and simplify the customization process.",

    //   cardTwoHeading: "Best Seller:",
    //   cardTwoDescription: "The Best Seller section showcases the top-performing products based on customer reviews, sales volume, and popularity. This curated collection is updated regularly to highlight the latest trends and hot-selling items.",

    //   // Section Four
    //   third: garment3,
    //   fourHeading: "UI/UX Design and Prototype:",
    //   fourDescription: `The Garments Store’s UI/UX design is focused on simplicity, speed, and ease of use. A minimalistic design approach with intuitive navigation ensures that customers can quickly find products, navigate between categories, and complete their purchases without any hassle.\nPrototype: We created an interactive prototype to visualize the user journey, testing various interactions and designs to ensure optimal usability.\nMobile and Desktop Views: Both the mobile app and the website are responsive, providing a seamless shopping experience across devices.`,

    //   // Section Five
    //   fiveHeading: "Challenges Faced During Development:",
    //   fiveDescription: `Customization Integration: One of the key challenges was integrating the customized collection feature, where we had to ensure that the customization options worked flawlessly across all devices, and orders were captured accurately in the system. \n\nInventory Management: Keeping track of product availability in real-time and managing stock across multiple platforms (mobile and website) posed synchronization challenges. \n\nMobile Responsiveness: Optimizing the mobile app and website to ensure they work smoothly across different screen sizes and resolutions required extensive testing and fine-tuning. \n\nPayment Gateway Compatibility: Ensuring that the payment system works seamlessly with different currencies and payment methods, especially for international customers, was a crucial challenge.\n\nPerformance Optimization: Ensuring fast loading speeds despite having high-resolution product images and interactive UI elements was a technical challenge that required optimization at both the server and frontend levels.`,

    //   slider1: garment3,
    //   slider2: garment4,
    //   slider3: garment4,
    //   slider4: garment5,

    //   sixHeading: "Dashboard and Website Related:",
    //   sixDescription: `Admin Dashboard: The admin dashboard is designed to provide easy management of products, inventory, customer data, and order processing. Features include stock management, sales analytics, and promotional campaign tracking.User Registration and Login: Users can register via email or social accounts and log in to their accounts for personalized experiences.\n\nProduct Search and Filtering: The website includes an advanced search functionality, allowing users to filter products by category, price, size, and color.\n\n Payment Gateway Integration: Secure payment methods such as credit cards, debit cards, and PayPal are integrated for easy checkout.`,

    //   faqs: [
    //       {
    //         question: "What products do you offer?",
    //         answer: "We offer a wide range of men's and women's clothing, accessories, and customized products that you can personalize according to your preferences.",
    //       },
    //       {
    //         question: "How do I customize a product?",
    //         answer: "To customize a product, simply select the 'Customize' option on the product page, choose your desired color, style, and any other available options, and place your order.",
    //       },
    //       {
    //         question: "Can I return customized products?",
    //         answer: "Unfortunately, customized products cannot be returned unless they are defective. Please ensure that your customizations are accurate before confirming your order.",
    //       },
    //       {
    //         question: "How do I track my order?",
    //         answer: "Once your order is shipped, you will receive a tracking number via email or SMS, which you can use to track your shipment.",
    //       },
    //       {
    //         question: "What payment methods do you accept?",
    //         answer: "We accept major credit/debit cards, PayPal, and other secure online payment methods for your convenience.",
    //       },
    //   ]              

    // },

]


export function findBySlug(slug) {
    const findItem = data.find(item => item.slug === slug)
    return findItem
} 








