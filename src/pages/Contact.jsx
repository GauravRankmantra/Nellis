import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Star, Award } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Get in touch with the Nellis Boulevard Auto Dealers community
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                  <option>General Inquiry</option>
                  <option>Vehicle Information</option>
                  <option>Financing Question</option>
                  <option>Service Appointment</option>
                  <option>Dealer Partnership</option>
                  <option>Website Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-5 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
              >
                <Send className="h-6 w-6 mr-3" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            {/* Main Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-6">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-700 text-lg">
                      1892 Ringe Lane<br />
                      Las Vegas, NV 89156
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                      Serving Nellis Boulevard from Craig Road to Russell Road
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-xl mr-6">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Phone</h3>
                    <a href="tel:(702) 555-AUTO" className="text-blue-600 hover:text-blue-800 text-xl font-semibold transition-colors duration-300">
                      (702) 555-AUTO
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-xl mr-6">
                    <Mail className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
                    <a href="mailto:info@nellisauto.com" className="text-blue-600 hover:text-blue-800 text-xl font-semibold transition-colors duration-300">
                      info@nellisauto.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-6">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Location</h2>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 h-80 rounded-2xl flex items-center justify-center mb-6 border-2 border-blue-200">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <p className="text-gray-600 font-semibold text-xl">Interactive Map</p>
                  <p className="text-gray-500 text-lg mt-2">Nellis Boulevard Auto Corridor</p>
                  <p className="text-gray-400 mt-3">From Craig Road to Russell Road</p>
                </div>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Centrally located to serve all Nellis Boulevard dealerships and the surrounding Las Vegas community
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Quick Links</h2>
              <div className="grid grid-cols-2 gap-6">
                <a href="/inventory" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300 hover:translate-x-1">
                  Browse Inventory →
                </a>
                <a href="/financing" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300 hover:translate-x-1">
                  Get Financing →
                </a>
                <a href="/service-parts" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300 hover:translate-x-1">
                  Book Service →
                </a>
                <a href="/dealer-directory" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300 hover:translate-x-1">
                  Find Dealers →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">How do I find vehicles from specific dealerships?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Use our inventory filter to select specific dealerships, or visit our dealer directory to browse individual dealer profiles and their current inventory.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Can I get financing through your platform?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Yes! We work with multiple lenders to help you get pre-approved. Visit our financing page to calculate payments and submit an application.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Do you offer warranties on used vehicles?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Many of our dealer partners offer extended warranties and certified pre-owned programs. Check with individual dealerships for specific warranty options.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">How do I schedule a service appointment?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Visit our Service & Parts page to book appointments online, or contact the specific dealership directly using the information in our dealer directory.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Are there special deals for military families?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Yes! Several of our dealers offer military discounts and special financing. Thunderbird Motors specializes in serving military families with honor.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">How often is inventory updated?</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our inventory is updated daily as dealerships add new vehicles and sell existing ones. Check back frequently for the latest available vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 via-slate-900 to-green-900 text-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-200">Real experiences from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">
                "Excellent service and great selection. Found the perfect car for my family at Vegas Premier Auto. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="ml-4">
                  <div className="font-semibold">John Davis</div>
                  <div className="text-gray-300 text-sm">Las Vegas, NV</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">
                "As a military family, Thunderbird Motors treated us with respect and got us a great deal. Thank you!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Sarah Martinez</div>
                  <div className="text-gray-300 text-sm">Henderson, NV</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">
                "First-time buyer and they made the process so easy. Desert Auto Sales helped me get approved with no credit history."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MR
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Mike Rodriguez</div>
                  <div className="text-gray-300 text-sm">North Las Vegas, NV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;