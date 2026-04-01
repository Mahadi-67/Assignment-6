import React from 'react';

const Model = ({model}) => {
    return (
            <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                      <span className="badge badge-xs badge-warning">Most Popular</span>
                      <div className="flex justify-between">
                        <img src= {model.icon} alt="" />
                      </div>
                      
                      <div>
                        <p>{model.description}</p>
                      </div>
                      <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          <span>High-resolution image generation</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <button className="btn btn-primary w-full rounded-full">Buy Now</button>
                      </div>
                    </div>
            </div>
    );
};

export default Model;