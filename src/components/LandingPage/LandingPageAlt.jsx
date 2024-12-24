import React from "react";

const Land = () => {
  return (
    <React.Fragment>
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            Hello<span className="text-pink-500">.</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="space-x-8 hidden md:flex">
            <a href="#why" className="text-gray-600 hover:text-gray-800 transition">Why Hello?</a>
            <a href="#features" className="text-gray-600 hover:text-gray-800 transition">Features</a>
            <a href="#platform" className="text-gray-600 hover:text-gray-800 transition">Platform</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-800 transition">Pricing</a>
          </nav>

          {/* Login & Signup Buttons */}
          <div className="space-x-4">
            <button className="text-gray-600 hover:text-gray-800">Login</button>
            <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            It's <span className="text-pink-500">The Bright One</span>, It's The Right One.
          </h1>
          <p className="text-gray-600 mb-8">
            Functional and practical. Start tracking your progress in the most efficient way possible.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          {/* Replace these with actual logo images */}
          {["Airbnb", "Fivetran", "Pendo", "Airtable", "Framer", "Pipedrive"].map((company) => (
            <span key={company} className="text-gray-500 text-lg">
              {company}
            </span>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Let Your SaaS Do The Walking.</h2>
          <p className="text-gray-600 mb-16">
            Manage your time on your tasks and increase your efficiency; create as many projects as you want.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Track time", description: "Create your projects and start tracking time immediately" },
              { title: "Performance", description: "Manage your time on your tasks and increase your efficiency" },
              { title: "Reports", description: "Generate and export reports of your specific projects" },
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Taste Great, Less Cloud.",
            "Software Wins Again.",
            "I Feel Like SaaS Tonight.",
            "Software With Idea",
            "Because SaaS Can’t Drive.",
          ].map((highlight, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{highlight}</h3>
              <p className="text-gray-500">
                {/* Sample description */}
                Explore powerful tools that streamline your productivity and improve efficiency.
              </p>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Land;
