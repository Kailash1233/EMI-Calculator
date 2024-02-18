import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>EMI CALCULATOR APP</h1>

      <div className="flex flex-col items-center mt-8">
        {/* Loan Amount Input Field */}
        <div className="mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="loanAmount">
            Loan Amount:
          </label>
          <input type="number" id="loanAmount" className="border p-2" />
        </div>

        {/* Graph-like Line for Loan Amount */}
        <div className="w-full h-4 bg-gray-300 mb-8"></div>

        {/* Interest Rate Input Field */}
        <div className="mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="interestRate">
            Interest Rate:
          </label>
          <input type="number" id="interestRate" className="border p-2" />
        </div>

        {/* Graph-like Line for Interest Rate */}
        <div className="w-full h-4 bg-gray-300 mb-8"></div>

        {/* Year of Loan Input Field */}
        <div className="mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="loanYear">
            Year of Loan:
          </label>
          <input type="number" id="loanYear" className="border p-2" />
        </div>

        {/* Graph-like Line for Year of Loan */}
        <div className="w-full h-4 bg-gray-300 mb-8"></div>
      </div>
    </main>
  );
}
