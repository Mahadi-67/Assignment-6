import React from 'react';

const StepsSection = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            // Simple icon path - replace with your actual SVG or Image
            icon: (
                <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: "02",
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            icon: (
                <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            id: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            icon: (
                <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-6xl font-[900] text-gray-900 mb-6">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-xl">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step) => (
                        <div key={step.id} className="relative group">
                            
                            {/* The Floating Number Badge */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-[#4547bd] text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                                {step.id}
                            </div>

                            {/* The Card */}
                            <div className="h-full bg-white border border-gray-100 rounded-[20px] p-12 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-md">
                                
                                {/* Icon Container (Circular Background) */}
                                <div className="w-32 h-32 bg-[#f0f2ff] rounded-full flex items-center justify-center mb-10">
                                    {step.icon}
                                </div>

                                {/* Text Content */}
                                <h3 className="text-3xl font-[800] text-gray-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;