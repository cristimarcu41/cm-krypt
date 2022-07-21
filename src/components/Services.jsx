import React from 'react';
import {BsFillShieldLockFill, BsFillLightningFill, BsCashCoin} from "react-icons/bs";

const ServiceCard = ({color, title, icon, subtitle}) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism px-6 py-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 flex rounded-full justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1 text-white">
            <h1 className="mt-2 text-lg">{title}</h1>
            <p className="mt-2 text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className="flex flex-col mf:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 ">Services that we <br/> continue to improve</h1>
                </div>
            </div>
            <div className="flex flex-col items-center flex-1">
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security Guaranteed"
                    icon={<BsFillShieldLockFill fontSize={21} className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain the quality of our product."
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Best Exchange Rates"
                    icon={<BsCashCoin fontSize={21} className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain the quality of our product."
                />
                <ServiceCard
                    color="bg-[#009688]"
                    title="Fastest Transactions"
                    icon={<BsFillLightningFill fontSize={21} className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain the quality of our product."
                />
            </div>
        </div>
    );
};

export default Services;
