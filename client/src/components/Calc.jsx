import React, { useState } from "react";

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [mortgageRate, setMortgageRate] = useState("");
  const [percentDown, setPercentDown] = useState("");
  const [amortizationPeriod, setAmortizationPeriod] = useState("");
  const [insuranceRate, setInsuranceRate] = useState("");

  // Stub calculation function
  const calculateMonthlyPayment = () => {
    // TODO: Implement real calculation
    return "0.00";
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Purchase Price</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={purchasePrice}
          onChange={e => setPurchasePrice(e.target.value)}
          placeholder="e.g. 500000"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Mortgage Rate (%)</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={mortgageRate}
          onChange={e => setMortgageRate(e.target.value)}
          placeholder="e.g. 5"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Percent Down (%)</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={percentDown}
          onChange={e => setPercentDown(e.target.value)}
          placeholder="e.g. 20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Amortization Period (years)</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={amortizationPeriod}
          onChange={e => setAmortizationPeriod(e.target.value)}
          placeholder="e.g. 25"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Insurance Rate (%)</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={insuranceRate}
          onChange={e => setInsuranceRate(e.target.value)}
          placeholder="e.g. 2.8"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Monthly Payment</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 bg-gray-100"
          value={calculateMonthlyPayment()}
          readOnly
        />
      </div>
    </div>
  );
};

export default MortgageCalculator;
