import React from "react";

function Features() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={require("../../../assets/1.jpg")}
              alt="App Logo"
              className="w-200 h-200  inline-block mr-2 "
            />
            <p className="text-gray-700">
              Our crowdfunding DApp provides a secure and user-friendly wallet
              system. Each user has their own digital wallet, safeguarded by
              cutting-edge encryption and blockchain technology. This means your
              funds and personal information are protected against unauthorized
              access or fraud.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={require("../../../assets/2.jpg")}
              alt="App Logo"
              className="w-200 h-200  inline-block mr-2 "
            />
            <p className="text-gray-700">
              Description of the second feature goes here. Explain its
              importance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={require("../../../assets/3.jpg")}
              alt="App Logo"
              className="w-200 h-200  inline-block mr-2 "
            />
            <p className="text-gray-700">
              Describe the third feature and how it sets your DApp apart from
              the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
