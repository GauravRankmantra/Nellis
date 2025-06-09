import React from 'react';
import { Tag, Clock, Star, ArrowRight, Gift, Percent, DollarSign } from 'lucide-react';

const SpecialOffers = () => {
  const offers = [
    {
      id: '1',
      title: 'Military Appreciation Week',
      dealership: 'Thunderbird Motors',
      description: 'Special financing rates starting at 1.9% APR for active military and veterans',
      discount: 'Up to $2,000 off',
      validUntil: '2024-02-15',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      type: 'Financing',
      terms: 'Valid military ID required. Cannot be combined with other offers.',
      featured: true
    },
    {
      id: '2',
      title: 'Trade-In Bonus Event',
      dealership: 'Vegas Premier Auto',
      description: 'Get an extra $1,500 for your trade-in vehicle on select models',
      discount: '$1,500 Trade-In Bonus',
      validUntil: '2024-02-28',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      type: 'Trade-In',
      terms: 'Trade-in must be 2015 or newer with clean title.',
      featured: false
    },
    {
      id: '3',
      title: 'First Time Buyer Special',
      dealership: 'Desert Auto Sales',
      description: 'No credit history? No problem! Special rates for first-time buyers',
      discount: '0% Down Payment',
      validUntil: '2024-03-10',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg',
      type: 'Financing',
      terms: 'Proof of income and residence required. Subject to credit approval.',
      featured: true
    },
    {
      id: '4',
      title: 'Winter Service Special',
      dealership: 'Silver State Auto',
      description: 'Complete winter maintenance package including oil change, tire rotation, and inspection',
      discount: '25% Off Service',
      validUntil: '2024-02-20',
      image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg',
      type: 'Service',
      terms: 'Valid for most makes and models. Additional parts/labor extra.',
      featured: false
    },
    {
      id: '5',
      title: 'Certified Pre-Owned Sale',
      dealership: 'Mountain View Motors',
      description: 'Extended warranty and roadside assistance included with all certified vehicles',
      discount: 'Free Extended Warranty',
      validUntil: '2024-03-01',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
      type: 'Warranty',
      terms: 'Applies to vehicles with CPO certification. 3 year/36,000 mile coverage.',
      featured: false
    },
    {
      id: '6',
      title: 'Bad Credit? No Problem!',
      dealership: 'Desert Auto Sales',
      description: 'Guaranteed financing approval with our buy-here-pay-here program',
      discount: 'Guaranteed Approval',
      validUntil: '2024-12-31',
      image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg',
      type: 'Financing',
      terms: 'Minimum $2,000 down payment required. Higher interest rates apply.',
      featured: true
    }
  ];

  const getOfferColor = (type) => {
    switch (type) {
      case 'Financing': return 'bg-blue-100 text-blue-800';
      case 'Trade-In': return 'bg-green-100 text-green-800';
      case 'Service': return 'bg-purple-100 text-purple-800';
      case 'Warranty': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOfferIcon = (type) => {
    switch (type) {
      case 'Financing': return <Percent className="h-5 w-5" />;
      case 'Trade-In': return <DollarSign className="h-5 w-5" />;
      case 'Service': return <Tag className="h-5 w-5" />;
      case 'Warranty': return <Gift className="h-5 w-5" />;
      default: return <Tag className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 via-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Special Offers</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Exclusive deals and promotions from Nellis Boulevard dealerships
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${offer.featured ? 'ring-2 ring-red-500' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getOfferColor(offer.type)}`}>
                    {getOfferIcon(offer.type)}
                    <span className="ml-1">{offer.type}</span>
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  Special
                </div>
                {offer.featured && (
                  <div className="absolute bottom-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">{offer.dealership}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{offer.description}</p>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-green-600 mr-3" />
                    <span className="font-bold text-green-800 text-lg">{offer.discount}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <Clock className="h-4 w-4 mr-2 text-red-500" />
                  <span className="font-medium">Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                </div>
                
                <div className="text-xs text-gray-500 mb-6 p-3 bg-gray-50 rounded-xl">
                  <strong className="text-gray-700">Terms:</strong> {offer.terms}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Claim This Offer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 via-slate-900 to-red-700 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Never Miss a Deal</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter and be the first to know about exclusive offers and promotions.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Offer Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Percent className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Financing Deals</h3>
            <p className="text-gray-600">Special rates and terms for qualified buyers</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Trade-In Bonuses</h3>
            <p className="text-gray-600">Extra value for your current vehicle</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Service Specials</h3>
            <p className="text-gray-600">Discounted maintenance and repairs</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Warranty Offers</h3>
            <p className="text-gray-600">Extended protection plans included</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;