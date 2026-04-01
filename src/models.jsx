import { use } from 'react';

const Models = ({ modelPromise, addToCart, cart }) => {
    const models = use(modelPromise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-6'>
            {models.map(model => {
                const isInCart = cart.some(item => item.id === model.id);

                return (
                    <div key={model.id} className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="card-body p-8">
                            
                            {/* Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-gray-100 p-3 rounded-2xl">
                                    <img src={model.icon} alt={model.name} className="size-8 object-contain" />
                                </div>
                                <span className={`badge border-none py-3 px-4 font-medium rounded-full ${
                                    model.tagType === 'popular' ? 'bg-purple-100 text-purple-700' : 
                                    model.tagType === 'new' ? 'bg-green-100 text-green-700' : 
                                    'bg-orange-100 text-orange-700'
                                }`}>
                                    {model.tag}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-800">{model.name}</h2>
                            <p className="text-gray-500 text-sm mt-2 leading-relaxed h-12">
                                {model.description}
                            </p>

                            {/* Price */}
                            <div className="mt-6 flex items-baseline gap-1">
                                <span className="text-4xl font-black">${model.price}</span>
                                <span className="text-gray-400 text-sm font-medium">
                                    /{model.period === 'one-time' ? 'one-time' : 'monthly'}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mt-8 flex flex-col gap-4">
                                {model.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="bg-green-100 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <div className="mt-10">
                                <button 
                                    onClick={() => addToCart(model)}
                                    disabled={isInCart}
                                    className={`btn border-none w-full rounded-2xl h-14 text-lg font-bold 
                                        ${isInCart 
                                            ? 'bg-green-500 text-white cursor-not-allowed' 
                                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
                                >
                                    {isInCart ? 'Added to Cart' : 'Buy Now'}
                                </button>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Models;