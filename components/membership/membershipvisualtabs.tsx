"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function MembershipVisualTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      type: "card",
      thumb: "/Master_Card.png",
    },
    {
      type: "image",
      main: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68735de708e980d387732463_membership-sku-2.avif",
      thumb:
        "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688046649437614ee5ce9828_SKU%20Frame%202.avif",
    },
    {
      type: "image",
      main: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688a8c0fd46fba51230bdfcc_image%20(6).avif",
      thumb:
        "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688a8c0fd46fba51230bdfcc_image%20(6).avif",
    },
    {
      type: "image",
      main: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a4d57ea732f68822a4d11e_image%20(13).avif",
      thumb:
        "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a4d57ea732f68822a4d11e_image%20(13).avif",
    },
    {
      type: "image",
      main: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435b09ee408729527dd3_marketplace-white-bg.avif",
      thumb:
        "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435b09ee408729527dd3_marketplace-white-bg.avif",
    },
  ];

  return (
    <div className="membership_left">
      
      <div className="bg-white rounded-3xl p-8 shadow-sm mb-6">
        {tabs[activeTab].type === "card" ? (
          <MembershipCardVisual />
        ) : (
          <img
            src={tabs[activeTab].main}
            alt="Membership feature preview"
            className="w-full h-auto rounded-xl"
          />
        )}
      </div>

      
      <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`rounded-xl overflow-hidden border transition
              ${
                activeTab === index
                  ? "border-orange-500 scale-105"
                  : "border-gray-200 hover:border-orange-300"
              }
            `}
          >
            <img
              src={tab.thumb}
              alt="thumbnail"
              className="w-16 h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// Membership Card
function MembershipCardVisual() {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1400}
      transitionSpeed={500}
      scale={1}
      glareEnable={false}
      gyroscope={false}
      className="relative w-full h-full"
    >
      <img
        src="/Master_Card.png"
        alt="Membership card"
        className="w-full h-full object-cover rounded-xl"
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <div>
          <img
            src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/65b8e9361ddcca5331c27b74_sp-logo.svg"
            alt="Superpower logo"
            className="w-36"
          />

          <p className="text-xl opacity-80">membership</p>
        </div>

        <div>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold">$17</span>
            <span className="text-sm opacity-90 mb-1">/month</span>
          </div>

          <p className="text-sm opacity-80 mt-2">Billed annually at $199</p>
        </div>
      </div>
    </Tilt>
  );
}
