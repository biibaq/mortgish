import React, { useState } from "react";

const logValues = (
  purchasePrice,
  mortgageRate,
  percentDown,
  amortizationPeriod,
  insuranceRate
) => {
  console.log("purchase price: ", purchasePrice);
  console.log("mortgage rate: ", mortgageRate);
  console.log("percentage of down payment: ", percentDown);
  console.log("amortization period: ", amortizationPeriod);
  console.log("insurance rate: ", insuranceRate);
}

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [mortgageRate, setMortgageRate] = useState(0);
  const [percentDown, setPercentDown] = useState(0);
  const [amortizationPeriod, setAmortizationPeriod] = useState(0);
  const [insuranceRate, setInsuranceRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Stub calculation function
  const calculateMonthlyPayment = () => {
    // TODO: Implement real calculation
    logValues(
      purchasePrice,
      mortgageRate,
      percentDown,
      amortizationPeriod,
      insuranceRate
    );
    const _payment = 1000;
    setMonthlyPayment(_payment);
  };

  return (
    <div className="max-w-3xl mx-auto p-16 bg-white rounded shadow space-y-4">
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
          value={monthlyPayment}
          readOnly
        />
        <input 
          className="block border-0 rounded-md p-2 text-2xl m-auto mt-8 font-medium mb-1 bg-blue-700 text-amber-50" 
          type="button" 
          value="Calculate"
          onClick={calculateMonthlyPayment} />
      </div>
    </div>
  );
};

export default MortgageCalculator;
