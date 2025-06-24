import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PricingCard from './components/PricingCard'

function App() {
  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center justify-center py-12 px-2">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12">Pricing</h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 w-full max-w-5xl justify-center items-center">
        <div className="flex-1 flex justify-center">
          <PricingCard
            plan="Standard"
            price="$100"
            features={['50,000 Requests', '4 contributors', 'Up to 3 GB storage space']}
          />
        </div>
        <div className="flex-1 flex justify-center sm:-mt-12 z-10">
          <PricingCard
            plan="Pro"
            price="$200"
            features={['100,000 Requests', '7 contributors', 'Up to 6 GB storage space']}
            isFeatured
          />
        </div>
        <div className="flex-1 flex justify-center">
          <PricingCard
            plan="Expert"
            price="$500"
            features={['200,000 Requests', '11 contributors', 'Up to 10 GB storage space']}
          />
        </div>
      </div>
    </div>
  )
}

export default App
