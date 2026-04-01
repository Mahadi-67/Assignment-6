import React from 'react';

const CTASection = () => {
    return (
        <section className="text-white py-20 px-6 bg-[#7C3AED]">
           <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-4xl mb-6'>Ready to Transform Your Workflow?</h2>
            <p className='text-lg mb-10 max-w-2xl mx-auto opacity-80'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
           </div>

           <div className='gap-3 flex max-w-2xl mx-auto justify-center'>
            <button className='bg-white text-[#7C3AED] px-6 py-4 rounded-full hover:bg-gray-50  '>Explore Products</button>
            <button className='bg-transparent border-2 border-white text-white px-6 py-4 rounded-full hover:bg-white/10 transition-colors'>View Pricing</button>
           </div>
           <p className='max-w-2xl mx-auto text-center pt-3 opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
        </section>
    );
};

export default CTASection;