import React from "react";
import Image from "next/image";



const ConditionPage = () => {
  return (
    <div>
        <div className='text-center bg-[#152331] text-white py-20'>
            {/* Heading */}
            <div className='container'>
            <h1 className='text-[25px] md:text-[40px] lg:text-[50px] font-medium mb-3 tracking-wide'>
                Terms & Conditions
            </h1>

            {/* Subheading */}
            <p className='text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-4 leading-relaxed'>
                Please read these terms and conditions carefully before using the website<br></br>
                https://www.digitalelliptical.com/ herein referred to as &quot;website&quot; and services offered
            </p>
            </div>
        </div>

        <div className='container  p-6 lg:p-12'>
            {/* Main Content */}
            <div className='md:container'>
            <div className='px-6 md:px-24 mt-6 '>
                
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-6'>
                    This Terms of Use outlines the user policy of The Digital Elliptical, its services and liabilities involving the use of our services and products. By registering for any of our services, you agree that you have read and accepted all the terms and conditions outlined in this document.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Coverage & scope
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    This Terms of Use covers the treatment of use of services and products The Digital Elliptical and/or a website owned and operated by The Digital Elliptical. This document is not applicable to companies that The Digital Elliptical has no ownership of or does not control, or of persons that are not under the employment and management of The Digital Elliptical including any third-party service and/or product providers bound by contract and any third-party websites to which The Digital Elliptical website links.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Filing a complaint:
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    In case of filing a complaint, The Digital Elliptical will try and come to a mutually acceptable solution if a user is unsatisfied with any of our services. Revocation occurs when things don’t work out. If You think about filing a claim, please write to us before launching a request. You should only file complaints if we are unable to affect a mutually satisfactory solution.
                </p>
              
                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Eligibility for refund
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    We handle every project in a professional manner to ensure that the client is delivered what was mentioned as per the terms and conditions of the proposal. However, if the client has gone through the dispute resolution process, refund claims will be considered as per the following schedule which clearly lists the services and our Terms of Use related to each service.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Application programming
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    We will offer a full refund if, for some reason, the project has not been initiated. An agreement is drafted for every application programming project. In case no agreement has been devised and/or there is no mention of a Terms of Use, we will apply the following delivery policy: The Digital Elliptical will issue a partial refund upon the discretion of the service provider if the project does not get finalized as mentioned in the delivery policy and contract. The proportion of the project completed will be calculated by The Digital Elliptical and the proportion that is not complete will be treated as per the pre-defined scope of the project.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Dedicated Hiring
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    The Digital Elliptical offers a full refund if there is a delay in starting the project by either the programr / designer / content writer / SEO expert (or any other resource / staff). We will offer a proportionate refund if the client cancels the project at any point in time. We offer no refund for days worked. If the client is not satisfied with the work at any point in time, they must immediately notify our Project Manager and ask for discounts for any work not carried out. We will not accept any such negotiation at a later date.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C]  mt-8'>
                    Applicability of the delivery policy
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    Timely payments: A project is not considered to be void if the agreed upon / listed payments are not clear Timely communication from the client: The Digital Elliptical is not bound by the Terms of Use. The client must provide timely information for successful completion of the project. The Digital Elliptical will not accept any responsibility for the delay or failure of completing the project arising out of miscommunication or lack of communication in a timely manner. Completeness of information provided by the client: The Digital Elliptical is not obligated to respect its delivery and/or refund commitments if the client fails to provide complete information/scope of the project to The Digital Elliptical at initialising stage of the project. The Digital Elliptical will only compensate for the delay of delivery, unless there is a special agreement signed with a penalty clause for delay in delivery.
                </p>

                <h2 className='text-lg  lg:text-xl font-semibold text-[#005E7C] mt-8'>
                    Limitation of Liability
                </h2>
                <p className='text-sm sm:text-base text-gray-500 leading-6  mt-2'>
                    The Digital Elliptical’ liability is limited in as much to the value of the portion of the project (as per The Digital Elliptical’ proposal) which may be incomplete at any given point of time. The Digital Elliptical will not be held responsible for losses arising out of the services delivered / not delivered or the delay in the same. The Digital Elliptical is only liable to refund if the client cancels the project, and as such, the cancellation has been communicated to The Digital Elliptical in writing.
                </p>

            </div>
            </div>
        </div>
    </div>
  );
};

export default ConditionPage;
