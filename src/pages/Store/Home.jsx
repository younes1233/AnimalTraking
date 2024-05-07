import React from 'react';
import Footer from '../../components/Store/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold">Animal Tracker</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to Animal Tracker</h2>
          <p className="text-lg text-gray-600 mb-8">Explore and monitor the wildlife around the farm.</p>
          <div className="flex justify-center space-x-4">
            <a href="/lb-admin/map" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Explore Map
            </a>
            <a href="/about" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded">
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-500 py-4 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 14a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4zm-2-3a1 1 0 0 1 0-2 1 1 0 0 1 0 2zM7 6a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V6zm-1 5a1 1 0 0 1 0-2 1 1 0 0 1 0 2zM2 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4v14h12v-5a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Track animals in real-time using GPS technology.</p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-500 py-4 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.414 4.586A2 2 0 0 0 12 4.172V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.172a2 2 0 0 0-.586.414L10 11l-5-5V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2.586l1.707-1.707a1 1 0 1 1 1.414 1.414l-3 3zM3 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zM7 7a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm10 10a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h2.586l-7.293-7.293A1 1 0 1 1 8.707 9.707L13 14.414V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1h8.586l4 4H16a1 1 0 0 1 1 1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Species</h3>
                <p className="text-gray-600">Learn about different animal species and their habitats.</p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-yellow-500 py-4 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 1a1 1 0 0 1 1 1v2h8V2a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zm10 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable Alerts</h3>
                <p className="text-gray-600">Set up alerts for specific animal movements and behaviors.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
