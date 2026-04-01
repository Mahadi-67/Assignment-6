import { useState } from 'react';
import Banner from "./banner";
import Footer from "./footer";
import NavBar from "./navbar";
import Models from "./models";
import StatsSection from "./statsSection";
import StepsSection from "./steps";
import Pricing from './pricing';
import CTASection from './action';
import { toast } from 'react-toastify';

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState('products');

  // Cart state
  const [cart, setCart] = useState([]);

  //  Add to cart function with alert
  const addToCart = (model) => {
    const exists = cart.find(item => item.id === model.id);

    if (!exists) {
      setCart([...cart, model]);
      // alert("Added to Cart"); 
      toast.success("Added to cart!");
    } else {
      // alert("Already in Cart"); 
      toast.error("Already in cart!");
    }
  };

  return (
    <>
      <NavBar />
      <Banner />
      <StatsSection />
      
      <div className='text-center mb-10'>
        <h2 className='text-5xl font-bold mb-2'>Premium Digital Tools</h2>
        <p className='opacity-60'>
          Choose from our curated collection of premium digital products designed <br /> 
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-box bg-transparent flex justify-center gap-2">
        <button 
          onClick={() => setActiveTab('products')}
          className={`tab w-40 rounded-full transition-all ${activeTab === 'products' ? 'tab-active bg-primary text-white' : ''}`}
        >
          Products
        </button>

        <button 
          onClick={() => setActiveTab('cart')}
          className={`tab w-40 rounded-full transition-all ${activeTab === 'cart' ? 'tab-active bg-primary text-white' : ''}`}
        >
          Cart ({cart.length})
        </button>
      </div>

      <div className="mt-20 min-h-[400]">
        {activeTab === 'products' ? (
          <Models 
            modelPromise={modelPromise} 
            addToCart={addToCart}  
            cart={cart} 
          />
        ) : (

          /* --- CART SECTION --- */
          <div className="max-w-4xl mx-auto p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold mb-6">Your Cart</h2>
            
            {cart.length > 0 ? (
              <div className="flex flex-col gap-4">

                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-xl shadow-sm">
                        <img src={item.icon} alt="" className="size-10" />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                        <p className="text-gray-500 text-sm">${item.price}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => setCart(cart.filter(c => c.id !== item.id))}
                      className="text-red-500 font-medium hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Total */}
                <div className="mt-8 pt-6 border-t flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Total:</span>
                  <span className="text-2xl font-black">
                    ${cart.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>

                {/* Checkout button */}
                <button 
                  onClick={() => {
                    if (cart.length === 0) {
                      // alert("Cart is empty");  
                      toast.error("Cart is empty!");
                      return;
                    }

                    // alert("Order Placed Successfully"); 
                    toast.success("Payment is done!");
                    setCart([]); 
                  }}
                  className="btn btn-primary mt-6 w-full rounded-full bg-indigo-600 border-none h-14 text-white text-lg"
                >
                  Proceed To Checkout
                </button>

              </div>
            ) : (
              <div className="text-center py-10 opacity-50">
                Your cart is empty
              </div>
            )}
          </div>
        )}
      </div>

      <StepsSection />
      <Pricing />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;