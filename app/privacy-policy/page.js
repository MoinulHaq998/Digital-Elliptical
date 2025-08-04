import React from "react";
import Image from "next/image";

const PrivacyPage = () => {
  return (
    <div>
        <div className='text-center bg-[#152331] text-white py-20'>
            {/* Heading */}
            <div className='container'>
            <h1 className='text-[25px] md:text-[40px] lg:text-[50px] font-medium mb-3 tracking-wide'>
                Privacy Policy
            </h1>

            {/* Subheading */}
            <p className='text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-4 leading-relaxed'>
                Please read these privacy policy carefully before using the website<br></br>
                https://www.digitalelliptical.com/ herein referred to as &quot;website&quot; and services offered
            </p>
            </div>
        </div>

        <div className='container  p-6 lg:p-12'>
            {/* Main Content */}
            <div className='md:container'>
            
            <div className='px-6 md:px-24 mt-6'>
                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Privacy Policy
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    By using the website in any manner, including but not limited to visiting or browsing the Site, 
                    you (the &quot;User&quot; or &quot;You&quot;) agree to be bound by the terms of this Agreement:
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    APPLICABLE:
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    The Terms and Condition apply to Users of the website with immediate effect. The Website 
                    may revise these Terms and Conditions at any time without any notice by updating this 
                    post. User will be bound by any such updates of these terms and conditions.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Website Regulations:
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    Users agree that they will use the website for lawful purpose and in lawful manner. 
                    While using the website, you abide to the following rules:
                </p>
              
                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Services:
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    These are services provided based on Projects that have a Statement of Work and Timeline 
                    with a Project initiation date and completion date. Custom Projects includes:
                </p>
                <ul className='text-sm sm:text-base lg:text-md text-gray-500 leading-6  mt-2 list-decimal ml-5'>
                    <li>Mobile App Development</li>
                    <li>Mobile Product Strategy</li>
                    <li>Strategic Design Consultancy</li>
                    <li>Mobile App QA and Testing</li>
                    <li>Web Portal and Development</li>
                    <li>Connected Devices</li>
                </ul>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Payments:
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    The Digital Elliptical accepts payments using credit cards, wire transfer and check only. 
                    Online payments using credit cards and debit cards will only be made where the total project 
                    cost is less than $4000. In case the project cost is more than $5000, the total cost will be 
                    broken into parts based on project timelines and milestones and will be done through wire or 
                    check. All orders will be executed based on the signed contract between the company and the 
                    customer. Customer is bind to agree the contract terms for Payment schedule.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Refunds:
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    Refunds will be applicable only for milestones that have not been delivered to the client as 
                    per the contract. After the Contract is signed, Client accepts and understands the project 
                    deliverables on a specified time. All approved project deliverables will NOT be included in 
                    the refund process including any delays in the deliverables where the delay was caused due to 
                    nonavailability of client for feedback and issues with 3rd party API/Plug-ins used for integration.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Resolution Of Disputes:
                </h2>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    If a dispute arises, The Digital Elliptical goal is to resolve such dispute amicably. Accordingly, 
                    you and we agree that we will resolve any claim or dispute that arises between you and the 
                    company of this Agreement or the Services (a “Claim”) in accordance with this section, entitled 
                    “Resolution of Disputes.” Before resorting to any other alternatives, you agree to first contact 
                    us directly to seek a resolution.<br></br></p>
                <p className='text-sm sm:text-base  text-gray-500 leading-6  mt-2'>
                    You agree that by entering into this agreement, you and The Digital Elliptical are each waiving 
                    the right to trial by jury or to participate in a class action. You and The Digital Elliptical 
                    agree that each may bring claims against the other only in your or its individual capacity and 
                    not as a plaintiff or class member in any purported class or representative proceeding. Any 
                    arbitration will take place on an individual basis; class arbitrations and class actions are 
                    not permitted.
                </p>

            </div>
            </div>
        </div>
    </div>
  );
};

export default PrivacyPage;


