import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Clock, Shield, Users, Building, Home, Zap } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: 'Full Truck Load (FTL) Services',
      description: 'End-to-end transport for high-volume goods, ensuring fast, secure, and direct delivery across India.',
      features: ['Dedicated Truck Allocation', 'Route Optimization', 'Timely Deliveries', 'Pan-India Reach'],
      image: 'https://images.pexels.com/photos/21615979/pexels-photo-21615979.jpeg'
    },
    {
      icon: Home,
      title: 'Part Load & Shared Cargo Solutions',
      description: 'Affordable and flexible transport for smaller consignments through shared cargo space and consolidated shipments.',
      features: ['Flexible Load Options', 'Consolidated Shipments', 'Optimized Costs', 'Efficient Scheduling'],
      image: 'https://images.pexels.com/photos/6169057/pexels-photo-6169057.jpeg'
    },
    {
      icon: Zap,
      title: 'Warehousing & Distribution',
      description: 'Secure warehousing and streamlined distribution services to manage storage, inventory, and timely deliveries.',
      features: ['Short & Long-term Storage', 'Inventory Management', 'Last-Mile Delivery', 'Strategic Locations'],
      image: 'https://images.pexels.com/photos/6407565/pexels-photo-6407565.jpeg'
    },
    {
      icon: Package,
      title: 'Logistics & Supply Chain Management',
      description: 'Integrated solutions to optimize logistics operations, inventory flow, and supply chain performance.',
      features: ['End-to-End Coordination', 'Order Flow Optimization', 'Custom Planning', 'Performance Tracking'],
      image: 'https://images.pexels.com/photos/16100083/pexels-photo-16100083.jpeg'
    },
    {
      icon: Building,
      title: 'Containerised Transportation',
      description: 'Safe and organized movement of goods using sealed containers for added protection and efficiency.',
      features: ['Secured Container Loads', 'Tamper-Proof Transit', 'Long-Distance Ready', 'Multiple Container Sizes'],
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpo=1'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All shipments are covered under comprehensive insurance for complete peace of mind.'
    },
    {
      icon: Clock,
      title: 'On-Time Guarantee',
      description: 'We commit to delivery schedules and maintain our reputation for punctuality.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer support to track your shipments and resolve any concerns quickly.'
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles equipped with GPS tracking and safety features.'
    }
  ];

  const coverage = [
  'Aligarh', 'Amroha', 'Atrasi', 'Badaun', 'Bagpat', 'Bahjoi', 'Barut', 'Bijnor',
  'Bilari', 'Bilaspur', 'Budhana', 'Bulandshar', 'Chandausi', 'Chandpur', 'Dalpatpur',
  'Dehradun', 'Deoband', 'Dhampur', 'Dhnora', 'Dingarpur', 'Gajraula', 'Gulaothi',
  'Haldaur', 'Hapur', 'Haridwar', 'Hasanpur', 'Joya', 'Jwalapur', 'Kanth', 'Kashipur',
  'Kemri', 'Khatoli', 'Khurja', 'Kiratpur', 'Lakshar', 'Mawana', 'MeerGanj', 'Meerut',
  'Milak', 'Mirapur', 'Modinagar', 'Moradabad', 'Munda Panday', 'Mussoorie',
  'Muzaffarnagar', 'Nagina', 'Nahtaur', 'Najibabad', 'Noorpur', 'Pakwara', 'Purkajee',
  'Rampur', 'Rishikesh', 'Roorkee', 'Saharanpur', 'Sambhal', 'Seohara', 'Shamli',
  'Shariff Nagar', 'Siyana', 'Tanda', 'Thakurdwara'
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-900/20 dark:to-red-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive transport and logistics solutions tailored for businesses and individuals across India
            </p>
          </motion.div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '100+', label: 'Cities Covered' },
              { number: '24/7', label: 'Customer Support' },
              { number: '99.5%', label: 'On-Time Delivery' },
              { number: '100%', label: 'Insured Transport' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Transport Solutions for <span className="text-green-500">Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From business logistics to personal deliveries, we provide reliable transport services across all major Indian cities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="md:flex h-full">
                    <div className="md:w-1/2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose <span className="text-blue-500">Our Services</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the difference that comes with decades of expertise and commitment to customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Broad City <span className="text-orange-500">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We serve major cities and towns across India, ensuring your goods reach their destination safely
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {coverage.map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:shadow-lg transition-shadow duration-200"
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Don't see your city? We're constantly expanding our network.
                </p>
                <Button variant="outline">
                  <Link to="/contact">Check Coverage</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ship with Confidence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a personalized quote for your transport needs. Our team is ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-green-500 hover:bg-gray-100">
                <Link to="/contact">Get Instant Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/fleet">View Our Fleet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;