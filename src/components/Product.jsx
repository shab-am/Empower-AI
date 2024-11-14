import React from 'react';

const EmpowerAI = () => {
  return (
    <div className="bg-zinc-900 mx-[3rem]">
      <div className="pt-4 px-6 mt-[1rem]">
        <h1 className="text-4xl font-bold text-center text-purple-300 mb-4">
          Empower AI: Your Comprehensive Investment Companion
        </h1>

        <p className="text-xl text-gray-300 mb-4">
          Financial Advisor<br />
        </p>
        <hr className="w-full border-purple-500/30 mb-4" />
        <p className="text-xl text-gray-300 mb-8">
          Empower AI is your trusted companion for investment analysis and optimization. Let's delve into its remarkable features:
        </p>

        <div className="max-w-[75vw] mb-[5rem]">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="flex gap-6">
                <div className="space-y-1 flex-1">
                  <label className="text-lg text-purple-300">Asset Name</label>
                  <input
                    type="text"
                    placeholder="Enter an asset's name (e.g., AAPL, BTC, ETH)"
                    className="w-full px-3 py-4 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    aria-label="Asset Name"
                  />
                </div>
                <div className="space-y-1 flex-1">
                  <label className="text-lg text-purple-300">Risk Assessment</label>
                  <input
                    type="text"
                    placeholder="Choose your risk; conservative risk, moderate risk, or aggressive risk"
                    className="w-full px-3 py-4 rounded bg-zinc-800 text-zinc-200 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    aria-label="Risk Level"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[93vw] mx-auto mb-[2rem]">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Sentiment Analysis</h3>
          </div>
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Asset Overview</h3>
          </div>
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Fundamental Analysis</h3>
          </div>
          <div className="px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Technical Analysis</h3>
          </div>
          <div className="col-span-2 px-4 py-2 rounded bg-zinc-800 text-white border border-purple-900/50 hover:border-purple-700/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-[20rem]">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Recommendation</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerAI;
