import React, { useState } from "react";

const Services = ({ serviceList }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentIndex = hoveredIndex ?? selectedIndex;
  const serviceContent = [
    "In today’s fast-paced digital world, visibility is everything — and we make sure your brand stands out where it matters most. Our digital marketing strategies are built around real data and targeted outreach to drive measurable results. Whether it’s SEO, PPC, email campaigns, or influencer collaborations, we tailor every move to your goals. We don’t just bring traffic; we attract the right audience who are ready to engage and convert. From awareness to action, we manage every stage of the funnel with precision. Let us turn your online presence into a growth engine for your business.",
    "Your brand is the emotional connection people form with your business — and we make it unforgettable. We dive deep into your values, audience, and goals to build a branding identity that feels authentic and bold. From logos and colors to messaging and personality, every element is crafted with purpose. A strong brand tells a consistent story, builds trust, and creates loyalty over time. We help you become recognizable and respected across all channels and touchpoints. Whether you're starting fresh or rebranding, we shape the perception that sets you apart.",
    "Social media is more than posting pretty pictures — it's about building relationships and driving engagement. We create strategic content that captures attention, encourages interaction, and reflects your brand voice across platforms like Instagram, Facebook, LinkedIn, and more. From planning calendars to designing creatives and analyzing performance, we manage it all so you don’t have to. Our goal is to grow your followers, deepen customer loyalty, and convert likes into leads. We stay ahead of trends to keep your brand relevant and relatable. Let’s turn your social presence into a powerhouse of connection and influence.",
    "First impressions happen in seconds — and a well-designed website makes every second count. We design responsive, visually stunning websites that guide users effortlessly and reflect your brand’s identity. Every layout, color, font, and interaction is chosen with user experience and engagement in mind. Whether it’s a sleek portfolio, a vibrant ecommerce store, or an informative landing page, we make sure your site is both beautiful and functional. Our design process balances creativity with strategy to keep visitors interested and moving. With us, your website won't just look good — it will work hard for your goals.",
    "Great websites don’t just look good — they run smooth, load fast, and perform flawlessly on every device. We specialize in developing responsive, scalable websites using modern technologies that support your business needs. From front-end functionality to backend integrations, every line of code is written with precision and efficiency. Security, performance, and accessibility are built into our foundation. Whether it's a simple landing page or a complex web application, we ensure your website is reliable and easy to maintain. Let us bring your digital vision to life with robust development you can trust.",
    "A logo is the face of your brand — and we make sure yours leaves a lasting impression. We combine design expertise with brand psychology to create logos that are not only visually appealing but also meaningful and memorable. Whether you want something bold, minimal, playful, or elegant, we tailor every concept to match your unique identity. Each logo comes with versatile variations for different use cases, from digital to print. Beyond just aesthetics, we focus on timelessness and recognition. Your logo isn’t just a symbol — it’s the beginning of your brand story.",
    "Powerful visuals are key to professional presentation, and our image editing services bring your photos to perfection. We enhance, retouch, and manipulate images to match your brand’s aesthetic and goals. Whether you need product touch-ups, background removal, color correction, or full photo compositions — we handle it with expert precision. Our edits are subtle yet impactful, ensuring your visuals look polished without feeling overdone. We work with formats and styles suited for websites, social media, ads, or print. With every pixel refined, your visuals will speak clearly and professionally.",
    "Videos are one of the most powerful tools to tell your story — and we craft them to capture attention and emotion. Our video editing services cover everything from basic cuts and transitions to advanced motion graphics, color grading, and sound design. We tailor each video to its purpose, whether it's for social media, ads, presentations, or YouTube content. Every second is edited with storytelling and impact in mind. We ensure pacing, visuals, and audio work together to deliver a smooth, professional product. Let us help you create videos that not only look amazing but also inspire action.",
  ];

  return (
    <section className="flex flex-col justify-evenly items-center w-full min-h-screen space-y-10 text-justify border-b">
      <h1 className="text-3xl pt-10 w-5/6">What We Do</h1>
      <div className="hidden lg:flex flex-1 flex-row justify-evenly items-center w-5/6">
        <div
          className="flex flex-col space-y-5 w-2/6"
          onMouseLeave={() => setHoveredIndex(selectedIndex)}
        >
          {serviceList.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setHoveredIndex(index)}
              onClick={() => setSelectedIndex(index)}
              className={`transition-all duration-200 ${
                selectedIndex === index
                  ? "bg-indigo-600 shadow-lg"
                  : "hover:bg-blue-500 hover:-translate-y-1"
              } rounded-2xl`}
            >
              <h2 className="text-lg card p-2 text-center rounded-2xl cursor-pointer font-bold">
                {item}
              </h2>
            </div>
          ))}
        </div>
        <div className="w-3/6 card rounded-2xl p-5 space-y-10">
          <h1 className="text-center text-2xl">{serviceList[currentIndex]}</h1>
          <div>
            <img
              src={`src/assets/img/serviceImg/${currentIndex}.svg`}
              alt="Service"
              className="w-5/12 float-right m-5"
            />
            <p className="indent-10 leading-7">
              {serviceContent[currentIndex]}
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 flex-1 flex-col justify-evenly items-center space-y-5 lg:hidden mb-10 lg:mb-0">
        {serviceList.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`transition-all duration-200 ${
              selectedIndex === index
                ? "bg-indigo-600 shadow-lg"
                : "hover:bg-blue-500"
            } rounded-2xl`}
          >
            <h1 className="text-lg card p-2 text-center rounded-2xl cursor-pointer font-bold">
              {item}
            </h1>
            {selectedIndex === index && (
              <div className="p-5">
                <img
                  src={`src/assets/img/serviceImg/${selectedIndex}.svg`}
                  alt="Service"
                  className="w-5/12 float-right m-5"
                />
                <p className="indent-10 text-white">
                  {serviceContent[selectedIndex]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
