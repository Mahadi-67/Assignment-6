import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            tagline: "Perfect for getting started",
            price: "0",
            period: "/Month",
            features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
            buttonText: "Get Started Free",
            isPopular: false
        },
        {
            name: "Pro",
            tagline: "Best for professionals",
            price: "29",
            period: "/Month",
            features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
            buttonText: "Start Pro Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            tagline: "For teams and businesses",
            price: "99",
            period: "/Month",
            features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-800 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`relative rounded-[2.5rem] p-10 transition-all duration-300 ${
                                plan.isPopular 
                                ? 'bg-[#7C3AED] text-white shadow-2xl scale-105 z-10' 
                                : 'bg-gray-50 text-gray-900 border border-gray-100'
                            }`}
                        >
                            {/* Most Popular Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.isPopular ? 'text-indigo-100' : 'text-gray-500'}`}>
                                    {plan.tagline}
                                </p>
                            </div>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-black">${plan.price}</span>
                                <span className={`text-lg font-medium ${plan.isPopular ? 'text-indigo-100' : 'text-gray-400'}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm font-medium">
                                        <svg 
                                            className={`size-5 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} 
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold text-lg transition-colors ${
                                plan.isPopular 
                                ? 'bg-white text-[#7C3AED] hover:bg-gray-50' 
                                : 'bg-[#7C3AED] text-white hover:bg-indigo-700'
                            }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;