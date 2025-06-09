import React from 'react';
import { Calendar, User, MessageCircle, ArrowRight, Tag, Star, TrendingUp } from 'lucide-react';

const Community = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Best Used Cars for Las Vegas Heat: A Buyer\'s Guide',
      excerpt: 'Living in Las Vegas means dealing with extreme heat. Here are the most reliable used cars that can handle the desert climate.',
      author: 'Mike Rodriguez',
      date: '2024-01-15',
      category: 'Buying Tips',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      readTime: '5 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Nellis AFB Community Car Show Returns This Spring',
      excerpt: 'The annual Nellis Air Force Base car show is back! Join us for a celebration of classic and modern vehicles.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'Events',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      readTime: '3 min read',
      featured: false
    },
    {
      id: '3',
      title: 'Winter Maintenance Tips for Desert Driving',
      excerpt: 'Even in Las Vegas, winter brings unique challenges. Learn how to keep your vehicle running smoothly year-round.',
      author: 'Tom Wilson',
      date: '2024-01-10',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg',
      readTime: '7 min read',
      featured: true
    },
    {
      id: '4',
      title: 'New Dealership Opens on Nellis Boulevard',
      excerpt: 'Mountain View Motors has opened its doors, specializing in SUVs and trucks for the adventurous Las Vegas lifestyle.',
      author: 'Lisa Chen',
      date: '2024-01-08',
      category: 'News',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
      readTime: '4 min read',
      featured: false
    },
    {
      id: '5',
      title: 'Financing Options for Military Families',
      excerpt: 'Special programs and benefits available for active duty and veteran families looking to purchase a vehicle.',
      author: 'David Martinez',
      date: '2024-01-05',
      category: 'Financing',
      image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg',
      readTime: '6 min read',
      featured: false
    },
    {
      id: '6',
      title: 'Electric Vehicle Charging Stations Coming to Nellis Blvd',
      excerpt: 'The future is electric! New charging infrastructure will support the growing EV market in our community.',
      author: 'Jennifer Adams',
      date: '2024-01-03',
      category: 'News',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      readTime: '5 min read',
      featured: true
    }
  ];

  const events = [
    {
      id: '1',
      title: 'Nellis Boulevard Auto Show',
      date: '2024-03-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Nellis AFB Community Center',
      description: 'Annual showcase of classic cars, hot rods, and modern vehicles from local enthusiasts.',
      featured: true
    },
    {
      id: '2',
      title: 'First-Time Buyer Workshop',
      date: '2024-02-20',
      time: '6:00 PM - 8:00 PM',
      location: 'Vegas Premier Auto',
      description: 'Free workshop covering financing, insurance, and what to look for when buying your first car.',
      featured: false
    },
    {
      id: '3',
      title: 'Military Appreciation Day',
      date: '2024-02-10',
      time: '9:00 AM - 6:00 PM',
      location: 'Thunderbird Motors',
      description: 'Special deals and recognition for active duty and veteran families.',
      featured: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Buying Tips': 'bg-blue-100 text-blue-800',
      'Events': 'bg-green-100 text-green-800',
      'Maintenance': 'bg-purple-100 text-purple-800',
      'News': 'bg-red-100 text-red-800',
      'Financing': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Community</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stay connected with the Nellis Boulevard automotive community
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-10 text-gray-900">Latest News & Articles</h2>
            <div className="space-y-10">
              {blogPosts.map((post) => (
                <article key={post.id} className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${post.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 cursor-pointer transition-colors duration-300 group-hover:text-blue-600">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <span className="font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 flex items-center font-semibold transition-all duration-300 group-hover:translate-x-1">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className={`border-l-4 border-blue-600 pl-6 py-4 ${event.featured ? 'bg-blue-50 rounded-r-xl pr-4' : ''}`}>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 font-medium">
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </p>
                    <p className="text-sm text-gray-600 mb-3 font-medium">{event.location}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
                    {event.featured && (
                      <div className="mt-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          FEATURED EVENT
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
                <Tag className="h-6 w-6 text-blue-600 mr-3" />
                Categories
              </h3>
              <div className="space-y-3">
                {['Buying Tips', 'Events', 'Maintenance', 'News', 'Financing'].map((category) => {
                  const count = blogPosts.filter(post => post.category === category).length;
                  return (
                    <div key={category} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-300">
                      <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">{category}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">({count})</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-green-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 leading-relaxed">Get the latest news and updates from the Nellis Boulevard auto community.</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-900 hover:bg-gray-100 py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                Community Stats
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Active Dealerships</span>
                  <span className="font-bold text-2xl text-blue-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Vehicles Available</span>
                  <span className="font-bold text-2xl text-green-600">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Service Centers</span>
                  <span className="font-bold text-2xl text-purple-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Happy Customers</span>
                  <span className="font-bold text-2xl text-red-600">2,500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Respectful Communication</h3>
              <p className="text-gray-600 leading-relaxed">Maintain a professional and respectful tone in all interactions with community members</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Authentic Reviews</h3>
              <p className="text-gray-600 leading-relaxed">Share honest experiences to help fellow community members make informed decisions</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Tag className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Relevant Content</h3>
              <p className="text-gray-600 leading-relaxed">Keep discussions focused on automotive topics and local community interests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;