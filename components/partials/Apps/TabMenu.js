import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import tabImg1 from "@/assets/apps/dummy/img-7.png";
import flexWheelerDash from "@/assets/success-stories/flex-wheeler/1-07.webp"
import avGlobal from "@/assets/success-stories/av-global/1-05.webp";
import aidora4 from "@/assets/success-stories/aidora/1-02.webp";


import Image from 'next/image';


const DashBoard = () => {
    return (
        <div className='bg-white w-full rounded-2xl p-4'>
            <h5 className='text-lg font-bold mb-2'>View the dashboard</h5>
            <p className='text-sm text-gray-600 mb-6'>
                View the summary of riders, drivers, and booking counts, along with your overall earnings, on the dashboard.
            </p>

            <Image src={aidora4} alt='tab image' width={2000} height={2000} className='w-full h-auto rounded-xl' />
        </div>
    );
};
const SiteSettings = () => {
    return (
        <div className='bg-white w-full rounded-2xl p-4'>
            <h5 className='text-lg font-bold mb-2'>View the dashboard</h5>
            <p className='text-sm text-gray-600 mb-6'>
                View the summary of riders, drivers, and booking counts, along with your overall earnings, on the dashboard.
            </p>

            <Image src={flexWheelerDash} alt='tab image' width={2000} height={2000} className='w-full h-auto rounded-xl' />
        </div>
    );
};
const AvGlobal = () => {
    return (
        <div className='bg-white w-full rounded-2xl p-4'>
            <h5 className='text-lg font-bold mb-2'>View the dashboard</h5>
            <p className='text-sm text-gray-600 mb-6'>
                View the summary of riders, drivers, and booking counts, along with your overall earnings, on the dashboard.
            </p>

            <Image src={avGlobal} alt='tab image' width={2000} height={2000} className='w-full h-auto rounded-xl' />
        </div>
    );
};
const TabMenu = () => {
    const [selectedTab, setSelectedTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Murammat' },
        { id: 'tab2', label: 'Flex Wheeler' },
        { id: 'tab3', label: 'AV Global' },
        { id: 'tab4', label: 'Manage vehicle category' },
        { id: 'tab5', label: 'Add cancel reason' },
        { id: 'tab6', label: 'Manage fare' },
    ];
    // Method to render content based on selected tab
    const renderContent = () => {
        switch (selectedTab) {
            case 'tab1':
                return <DashBoard />;
            case 'tab2':
                return <SiteSettings />;
            case 'tab3':
                return <AvGlobal />;
            default:
                return <div className='p-4'>Default content</div>;
        }
    };

    return (
        <div className='md:flex container'>
            <div className='flex flex-col md:w-3/12 text-start'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`py-2 flex gap-1 items-center px-4 text-start mb-3 text-sm duration-700 ${selectedTab === tab.id ? '' : 'text-gray-600'}`}
                        onClick={() => setSelectedTab(tab.id)}
                    >
                        {selectedTab === tab.id && <Icon icon="bxs:circle-half" width="12" height="12" className='duration-700 text-primary' />}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className='ml-4 md:w-9/12 md:pb-0 pb-10'>
                {renderContent()}
            </div>
        </div>
    );
};

export default TabMenu;
