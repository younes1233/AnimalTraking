import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">About Animal Tracker</h1>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="max-w-lg lg:mr-12 mb-8 lg:mb-0">
              <img src="/about-animal-tracker.jpg" alt="About Animal Tracker" className="rounded-lg shadow-md" />
            </div>
            <div className="max-w-lg">
              <p className="text-lg text-gray-700">
                Animal Tracker is dedicated to revolutionizing the way farmers manage their livestock and how wildlife enthusiasts observe and protect local wildlife populations.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Our platform leverages cutting-edge GPS technology to provide real-time updates on animal locations, helping farmers optimize their operations and enabling wildlife enthusiasts to engage with nature in a responsible manner.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/team-member1.jpg" alt="John Doe" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                <p className="text-gray-600">Co-founder & CEO</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/team-member2.jpg" alt="Jane Smith" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                <p className="text-gray-600">Co-founder & CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
