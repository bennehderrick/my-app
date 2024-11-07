import React, { useState, useEffect } from 'react'

function Billing() {
  const [activeDiv, setActiveDiv] = useState<string | null>(() => {
    return localStorage.getItem('activeDiv') || null;
  });

  const handleDivClick = (divName: string) => {
    setActiveDiv(divName);
    localStorage.setItem('activeDiv', divName);
  };

  useEffect(() => {
    localStorage.setItem('activeDiv', activeDiv || '');
  }, [activeDiv]);

  return (
    <div className="p-4 space-y-6">
      <div
        className={`bg-white shadow-md rounded-lg border-2 p-6 focus-within:ring-2 focus-within:ring-black ${activeDiv === 'business' ? 'border-black' : ''}`}
        onClick={() => handleDivClick('business')}
      >
        <div className="flex justify-between items-center mb-4">
            <div className='flex'>

                <div className="text-lg font-semibold">Business Plan</div>
                <div>
                    <span className="inline-flex items-center justify-center rounded-full bg-orange-100 px-2.5 py-0.5 text-orange-700">
                    <p className="whitespace-nowrap text-sm">Premium</p>
                    </span>
                </div>
            </div>
            <div>
                 <div className="flex justify-between items-center">
          <div className="text-xl font-bold px-1">$14/mo</div>
          <a
            className="group relative inline-block text-sm font-medium text-white focus:outline-none"
          >
            <span className="absolute inset-0 border border-red-600 group-active:border-red-500 rounded-lg"></span>
            <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-lg">
              Upgrade
            </span>
          </a>
        </div>
            </div>
        </div>
       
        <div className="mt-4 text-gray-600">
          Access to AI Insights, unlimited uploads of previous forms, and so much more
        </div>
      </div>

      <div
        className={`bg-white shadow-md rounded-lg border-2 p-6 focus-within:ring-2 focus-within:ring-black ${activeDiv === 'base' ? 'border-black' : ''}`}
        onClick={() => handleDivClick('base')}
      >
        <div className="flex justify-between items-center mb-4">
            <div className='flex p-3'>
                <div className="text-lg font-semibold">Base Plan</div>
                <div className='px-5'>
                    <span className="inline-flex items-center justify-center rounded-full bg-gray-300 px-2.5 py-0.5 text-black-700">
                        <p className="whitespace-nowrap text-sm">Current</p>
                        </span>

                </div>
                <div>

            </div>
           
          </div>
           <div>
            <span>
              <p className="whitespace-nowrap text-sm">$9/mo</p>
            </span>
            </div>
        </div>
        <div className=""> Next billed March 3, 2024</div>
      </div>
    </div>
  )
}

export default Billing