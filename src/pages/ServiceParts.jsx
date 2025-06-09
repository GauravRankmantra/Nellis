import React, { useState } from 'react';
import { Wrench, Package, Calendar, Clock, Car, CheckCircle, Star, Award, Shield } from 'lucide-react';

const ServiceParts = () => {
  const [activeTab, setActiveTab] = useState('service');

  const services = [
    {
      name: 'Oil Change & Filter',
      price: '$39.95',
      time: '30 minutes',
      description: 'Full synthetic oil change with new filter and comprehensive multi-point inspection',
      popular: true
    },
    {
      name: 'Brake Service',
      price: '$199.95',
      time: '2 hours',
      description: 'Complete brake inspection, pad replacement, and rotor resurfacing with warranty',
      popular: false
    },
    {
      name: 'Tire Rotation & Balance',
      price: '$79.95',
      time: '45 minutes',
      description: 'Professional tire rotation, wheel balancing, and pressure check',
      popular: false
    },
    {
      name: 'A/C Service',
      price: '$149.95',
      time: '1.5 hours',
      description: 'A/C system inspection, refrigerant recharge, and comprehensive leak test',
      popular: true
    },
    {
      name: 'Transmission Service',
      price: '$179.95',
      time: '1 hour',
      description: 'Transmission fluid change and filter replacement with system flush',
      popular: false
    },
    {
      name: 'Engine Diagnostics',
      price: '$129.95',
      time: '1 hour',
      description: 'Advanced computer diagnostic scan with detailed report and recommendations',
      popular: false
    }
  ];

  const parts = [
    {
      category: 'Engine Parts',
      items: ['Oil Filters', 'Air Filters', 'Spark Plugs', 'Belts & Hoses'],
      icon: <Car className="h-6 w-6" />
    },
    {
      category: 'Brake Parts',
      items: ['Brake Pads', 'Brake Rotors', 'Brake Fluid', 'Brake Lines'],
      icon: <Shield className="h-6 w-6" />
    },
    {
      category: 'Electrical',
      items: ['Batteries', 'Alternators', 'Starters', 'Fuses'],
      icon: <Wrench className="h-6 w-6" />
    },
    {
      category: 'Suspension',
      items: ['Shocks', 'Struts', 'Springs', 'Control Arms'],
      icon: <Package className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Service & Parts</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional automotive service and genuine parts from certified technicians
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-12">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('service')}
              className={`flex-1 py-6 px-8 text-center font-semibold transition-all duration-300 rounded-t-2xl ${
                activeTab === 'service'
                  ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Wrench className="h-6 w-6 inline mr-3" />
              Service Appointment
            </button>
            <button
              onClick={() => setActiveTab('parts')}
              className={`flex-1 py-6 px-8 text-center font-semibold transition-all duration-300 rounded-t-2xl ${
                activeTab === 'parts'
                  ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Package className="h-6 w-6 inline mr-3" />
              Order Parts
            </button>
          </div>
        </div>

        {activeTab === 'service' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Booking Form */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                Book Service Appointment
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Year</label>
                    <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                      <option>Select Year</option>
                      {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Make</label>
                    <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                      <option>Select Make</option>
                      <option>Honda</option>
                      <option>Toyota</option>
                      <option>Ford</option>
                      <option>Chevrolet</option>
                      <option>Nissan</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter model"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                    <option>Select Service</option>
                    <option>Oil Change</option>
                    <option>Brake Service</option>
                    <option>Tire Service</option>
                    <option>A/C Service</option>
                    <option>Engine Diagnostics</option>
                    <option>General Inspection</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                    <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                      <option>Morning (8AM-12PM)</option>
                      <option>Afternoon (12PM-5PM)</option>
                      <option>Evening (5PM-8PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Describe any specific issues or concerns..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-5 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                >
                  <Calendar className="h-6 w-6 mr-3" />
                  Schedule Appointment
                </button>
              </form>
            </div>

            {/* Service Menu */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Service Menu</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className={`border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${service.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <h3 className="font-bold text-xl text-gray-900">{service.name}</h3>
                        {service.popular && (
                          <span className="ml-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">{service.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-medium">{service.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'parts' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Parts Order Form */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                <div className="bg-green-100 p-3 rounded-xl mr-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                Order Parts
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Year</label>
                    <input
                      type="number"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="2020"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Make</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Honda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Civic"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">VIN (Optional)</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter VIN for exact part matching"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parts Needed</label>
                  <textarea
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="List the parts you need (e.g., brake pads, oil filter, spark plugs)..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Pickup/Delivery</label>
                  <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                    <option>Pickup at dealership</option>
                    <option>Local delivery (+$15)</option>
                    <option>Express delivery (+$25)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-5 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                >
                  <Package className="h-6 w-6 mr-3" />
                  Submit Parts Request
                </button>
              </form>
            </div>

            {/* Parts Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Parts Categories</h2>
              <div className="space-y-8">
                {parts.map((category, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-xl mb-4 flex items-center text-gray-900">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Service Specials */}
        <div className="mt-20 bg-gradient-to-r from-red-700 via-slate-900 to-blue-900 text-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Current Service Specials</h2>
            <p className="text-xl text-gray-200">Limited time offers on essential services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Oil Change Special</h3>
                <p className="text-red-200 mb-2 line-through">Regular $49.95</p>
                <p className="text-4xl font-bold mb-4">$29.95</p>
                <p className="text-sm">Includes synthetic blend oil and filter</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Brake Inspection</h3>
                <p className="text-red-200 mb-2 line-through">Regular $89.95</p>
                <p className="text-4xl font-bold mb-4">FREE</p>
                <p className="text-sm">With any brake service</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">A/C Check</h3>
                <p className="text-red-200 mb-2 line-through">Regular $79.95</p>
                <p className="text-4xl font-bold mb-4">$39.95</p>
                <p className="text-sm">Perfect for Las Vegas heat!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceParts;