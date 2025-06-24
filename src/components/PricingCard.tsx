import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`
        w-full max-w-xs rounded-lg shadow-lg flex flex-col items-center
        ${isFeatured
          ? "bg-[#3b495a] text-white scale-105 z-20 border-4 border-[#3b495a]"
          : "bg-white text-[#3b495a] border border-gray-200"}
        py-8 px-6 transition-all duration-300
      `}
      style={{
        boxShadow: isFeatured
          ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
          : "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
      }}
    >
      <div className="text-lg font-semibold mb-2">{plan}</div>
      <div className="text-5xl font-bold mb-4">{price}</div>
      <div className="w-full">
        {features.map((feature, idx) => (
          <div
            key={feature}
            className={`py-2 text-center text-base font-medium ${
              idx < features.length - 1
                ? "border-b border-gray-200"
                : ""
            } ${isFeatured ? "text-white" : "text-[#3b495a]"}`}
          >
            {feature}
          </div>
        ))}
      </div>
      <button
        className={`
          mt-8 w-full py-2 rounded font-bold tracking-wide
          ${isFeatured
            ? "bg-white text-[#3b495a] hover:bg-gray-100"
            : "bg-[#3b495a] text-white hover:bg-[#2c3744]"}
          transition
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;
