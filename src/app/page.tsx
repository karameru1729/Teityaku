import { Suspense } from "react";

export default function Instruments() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Instruments</h1>
      <p className="text-lg text-gray-600 mb-8">Explore our collection of musical instruments.</p>
      <Suspense fallback={<div>Loading instruments...</div>}>
        {/* Instrument list component goes here */}
      </Suspense>
    </div>
  );
}
