"use client"
import React, { useState } from 'react'
import ThemeButton from '@/components/ui/ThemeButton'


// Images
import Image from 'next/image'
import Left from '@/assets/multi-apps/learning/left.webp'
import Right from '@/assets/multi-apps/learning/right.webp'
import Banner from '@/assets/multi-apps/learning/bannar.webp'
import One from '@/assets/multi-apps/learning/one.webp'
import Second from '@/assets/multi-apps/learning/second.webp'
import Down from '@/assets/multi-apps/learning/down.webp'
import Agreement from '@/assets/multi-apps/cate/1.webp'
import Cutomization from '@/assets/multi-apps/cate/2.webp'
import Setup from '@/assets/multi-apps/cate/3.webp'
import Assistance from '@/assets/multi-apps/cate/4.webp'
import Thirteen from '@/assets/multi-apps/cate/13.webp'
import Fourteen from '@/assets/multi-apps/cate/14.webp'
import Fifteen from '@/assets/multi-apps/cate/15.webp'
import { Icon } from '@iconify/react'


const customer = [
    "Easy profile creation",
    "Connectivity with learners",
    "Video chat feature",
    "Feedbacks",
    "Reviews & Ratings",
    "Profile Management",
    "Edit the account settings",
    "Individual assessment",
];

const student = [
    "Easy registration",
    "Online group studie",
    "Ask queries through chat",
    "Take mock tests",
    "Live video conferencing",
    "Select teachers of your choice",
];

const faqs = [
    {
        question: "How much it would cost to build an e-learning app?",
        answer: "The e-learning app development cost depends on several factors like the number of features, app size, location, development team, customization, etc."
    },
    {
        question: "Can I make changes to my e-learning app?",
        answer: "Upon your request, our development team can help you make changes to your app. The cost for the required changes would be based on the time and models you choose."
    },
    {
        question: "How much time it would take to build an e-learning app?",
        answer: "Well, the time to build an e-learning app depends on multiple factors like app complexity, size of the app, app design, app functionality, etc."
    },
    {
        question: "How would custom e-learning apps benefit my business?",
        answer: "Custom e-learning apps are developed to meet the specific requirements of your business. As they are designed to meet specific needs, they offer excellent learning experiences for your users."
    },
    {
        question: "What type of e-learning apps you can create?",
        answer: "We are proficient and have enough experience in creating almost all types of e-learning apps which include ERP, learning management, fun learning, CRM, VR classroom, and many more."
    }
];

function page() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null); // Collapse the active FAQ if clicked again
        } else {
            setActiveIndex(index); // Expand the selected FAQ
        }
    };

    return (
        <div>

            <section
                className="multi-apps-bg bg-no-repeat bg-center bg-cover h- w-full py-20 relative overflow-hidden"
            >
                <div className="container">
                    <div className="grid lg:grid-cols-6 gap-4">
                        <div className="col-span-1">
                            <Image src={Left} alt='left' height={2000} width={2000} className='hidden lg:block w-[160px] lg:w-[180px] 2xl:w-[200px] -rotate-12 absolute top-[100px] left-[50px]' />
                        </div>
                        <div className="grid place-content-center gap-6 text-center col-span-4">
                            <h1 className='font-extrabold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px]'>On-Demand eLearning App Development Solutions | Advanced Features & Cost
                            </h1>
                            <p className='text-[20px] lg:text-[22px]'>E-learning applications are interactive digital platforms that make it easier for teachers, students, and other educational institutions to share resources, tools, and expertise. Students can communicate with tutors online to study for their chosen courses and acquire study materials.
                            </p>
                            <div>
                                <ThemeButton>Contact us</ThemeButton>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image src={Right} alt='right' height={2000} width={2000} className='hidden lg:block w-[230px] xl:w-[250px] absolute top-[250px] right-[50px]' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image src={Banner} alt='banner' height={2000} width={2000} className='w-[75%] max-w-[1200px]' />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                E-Learning App Development Solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Digital Elliptical Enterprise Solutions, a respected provider of e-learning app development services with a talented team of e-learning app developers, offers agile e-learning mobile app development services to help clients meet the changing educational expectations of the digital age. In order to make it easier for students to access education, we recognise the benefits of online learning and have created user-friendly white label eLearning app development solutions for educational institutions, private tutors, etc.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Explore New Ways of Learning Through Technology-Driven e-Learning Apps
                            </h2>
                            <p className='text-[19px] text-justify'>
                                The e-learning industry is not an exception to the trend of everything becoming more digital. The e-learning industry needs a strategy for learning promotion in order to reach a larger audience. Students have an easy way to learn and communicate with teachers from around the globe thanks to e-learning apps.
                                <br /><br />
                                By offering consumers personalizedlearning and teaching experiences, you may rethink the traditional educational paradigm with the help of our tailored e-learning solutions. In order for you to fully benefit from cutting-edge e-learning, we help to meet the distant learning needs of students with our slick e-learning app development solutions. Join students and educators from around the world on one platform.
                            </p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                An interactive platform to acquire and impart education, on-demand e-learning app solutions
                            </h2>
                            <p className='text-[19px] text-justify'>
                                The incorporation of cutting-edge technology, such as augmented reality (AR), into e-learning programs allows you to perceive learning more efficiently. Offering easy-to-use mobile app development services is one way that many business owners are capitalising on this profitable industry.
                                <br /><br />
                                Without needing to keep mugging, students can now explore new opportunities for conceptual understanding. By offering fun e-learning options, you can aid your child in concentrating on understanding subjects.
                                <br /><br />
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-[90%] mx-auto flex flex-col md:flex-row md:items-center gap-4 xl:gap-52 bg-[#005e7c38] p-6 rounded-md mb-12'>
                        <div>
                            <h3 className='text-[18px] md:text-[25px] xl:text-[30px] mb-1'>
                                Choose A Highly-Scalable App Development
                            </h3>
                            <p className='text-[15px]'>Solution For Your Restaurant Business</p>
                        </div>
                        <div>
                            <ThemeButton>Contact us</ThemeButton>
                        </div>
                    </div>
                    <div className="lg:w-[65%] mx-auto">
                        <div className='mb-12'>
                            <h2 className='text-[30px] font-semibold mb-5'>
                                Innovative Learning Can Be Found With This Smart On-Demand e-Learning App.
                            </h2>
                            <p className='text-[19px] text-justify'>
                                Digital Elliptical Enterprise Solutions, an established provider of mobile app development services in the USA, provides interactive, unique e-learning app solutions that make it easier to link students and teachers via e-learning platforms. Through powerful e-learning programs, we provide well-balanced learning solutions online to meet contemporary educational needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Thirteen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">On-Demand e-Learning App for Personal Learning</h3>
                            <p className="text-sm">
                                Make sure your users areutilizingthis remote learning tool to its full potential. They can find pre-made, immediately usable online courses here. Ensure that consumers can learn at their own convenience and pace.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Fourteen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">On-Demand e-Learning App for Corporate Training
                            </h3>
                            <p className="text-sm">
                                Provide the corporate sector with sophisticated e-learning applications. Employers should use these apps to virtually train their workers. Facilitate corporate training easily and affordably.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Fifteen} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">On-Demand e-Learning App for Educators
                            </h3>
                            <p className="text-sm">
                                Give each teacher access to the resources they need to deliver thorough lessons. Teachers can view real-time student data engaged in a learning session with highly configurable class presentations and efficient tools.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 xl:gap-8 items-center">
                            <div className='flex justify-center md:justify-start'>
                                <Image src={One} alt='one' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                    Teaching App
                                </h4>
                                <p className='text-[19px]'>
                                    The teacher app helps the teacher manage students information and interact with them.
                                </p>
                                <div className="mt-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {customer.slice(0, 8).map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-4 ">
                                                <div className="bg-[#005e7c38] border border-[#061c2438] font-bold rounded-full py-1 px-2 flex items-center justify-center">
                                                    {`0${index + 1}`}
                                                </div>
                                                <span className="text-lg text-[#005e7c] font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <div className="lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 xl:gap-8 items-center">
                            <div>
                                <h4 className='text-[37px] font-bold mb-6'>
                                    Student App
                                </h4>
                                <p className='text-[19px]'>
                                    The student app helps students connect with tutors, ask queries, submit assignments, etc
                                </p>
                                <div className="mt-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {student.slice(0, 6).map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-4 ">
                                                <div className="bg-[#005e7c38] border border-[#061c2438] font-bold rounded-full py-1 px-2 flex items-center justify-center">
                                                    {`0${index + 1}`}
                                                </div>
                                                <span className="text-lg text-[#005e7c] font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center md:justify-end'>
                                <Image src={Second} alt='second' height={2000} width={2000} className='w-[60%] max-w-[600px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#005e7c] py-10'>
                <div className="container">
                    <div className="grid lg:grid-cols-4 items-center">
                        <div className='flex flex-col gap-4'>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Login
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Content
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Manage Users
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                            <div className='bg-white rounded-md px-8 py-4 text-end text-[19px] font-bold relative'>
                                Formats
                                <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -right-[12px] top-1/2 -translate-y-1/2'></div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-center'>
                            <Image src={Down} alt='down' height={2000} width={2000} className='w-full max-w-[800px]' />
                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Manage Groups & Pages

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Backend

                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Badges
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                                <div className='bg-white rounded-md px-8 py-4 text-start text-[19px] font-bold relative'>
                                    Interactions
                                    <div className='w-6 h-6 bg-white rounded-full border-4 border-[#005e7c] absolute -left-[12px] top-1/2 -translate-y-1/2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container">
                    <h2 className="text-center text-[20px] md:text-[30px] mb-16">
                        Interact More and Connect More through Our User-Friendly e-Learning App Development Solutions
                    </h2>
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Agreement} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Agreement</h3>
                            <p className="text-sm">
                                To begin, we will give you a Proposal and Sample. If you decide to acquire our services, you will be provided a contract to sign. At the time of signing, a 50% down payment will be required.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Cutomization} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Customization & Branding
                            </h3>
                            <p className="text-sm">
                                Our Designers will first give you an improved model of our product that incorporates your logo and colors. Minor layout adjustments will be made if necessary.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Setup} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Launch & Setup</h3>
                            <p className="text-sm">
                                In the next stage, our staff will build up a server and email you the application to trial. Following your approval, the program will be submitted to all of the appropriate App Stores for review.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 flex justify-center items-center">
                                <Image src={Assistance} alt='expextation' width={2000} height={2000} className='w-[70px]' />

                            </div>
                            <h3 className="text-[20px] font-bold mb-2">Assistance</h3>
                            <p className="text-sm">
                                You will be needed to release the other 50% cash once the app is live in app stores, and we will transmit the Entire Code with License. If necessary, our team will explain to you how to access the building
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container text-center">
                    <h2 className='text-[28px] font-bold uppercase mb-10'>
                        Frequently Asked Questions
                    </h2>
                    {/* First FAQ Section */}
                    <div className="lg:w-[75%] mx-auto" >
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-t border-gray-300 border-b overflow-hidden py-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left py-3 px-4 text-xl font-bold focus:outline-none flex items-center justify-between"
                                >
                                    <h3 className="font-bold">{faq.question}</h3>
                                    <Icon icon="basil:caret-right-solid" width="24" height="24" />
                                </button>

                                {/* Content visibility based on activeIndex */}
                                <div
                                    className={`transition-all duration-300 bg-gray-100 ease-in-out ${activeIndex === index ? 'max-h-[200px] p-4' : 'max-h-0 p-0'
                                        }`}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second FAQ Section */}
                </div>
            </section>

        </div>
    )
}

export default page
