import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Wrench, MapPin, Clock, Award } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Fleet: React.FC = () => {
  const vehicles = [
    {
      name: 'Containerised Vehicles',
      capacity: '7-16 Tons',
      description: 'Ideal for long-distance hauls with sealed protection for sensitive and high-value cargo.',
      features: ['Weatherproof', 'Tamper-Proof', 'Secure Transit', 'Long-Haul Ready'],
      image: 'https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg',
      count: '10+'
    },
    {
      name: 'Light Commercial Vehicles',
      capacity: '1-3 Tons',
      description: 'Perfect for small to medium shipments and urban deliveries.',
      features: ['GPS Tracking', 'Fuel Efficient', 'Quick Loading', 'City Access'],
      image: 'https://images.pexels.com/photos/17024742/pexels-photo-17024742.jpeg',
      count: '10+'
    },
    {
      name: 'GPS-enabled Trucks',
      capacity: '3-25 Tons',
      description: 'Equipped with real-time tracking to ensure transparency, safety, and better route management.',
      features: ['Live Tracking', 'Route Optimization', 'Increased Security', '24/7 Monitoring'],
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
      count: '5+'
    }
  ];

  const specifications = [
    {
      category: 'Safety Features',
      items: ['Anti-lock Braking System (ABS)', 'Electronic Stability Control', 'Emergency Braking', 'Driver Assistance Systems', 'Fire Extinguishers', '24/7 Emergency Support']
    },
    {
      category: 'Technology',
      items: ['Real-time GPS Tracking', 'Route Optimization', 'Fuel Monitoring', 'Driver Behavior Analysis', 'Mobile App Integration', 'Electronic Logging']
    },
    {
      category: 'Maintenance',
      items: ['Regular Service Schedule', 'Preventive Maintenance', 'Quality Spare Parts', 'Certified Technicians', 'Breakdown Support', 'Fleet Management System']
    },
    {
      category: 'Cargo Protection',
      items: ['Weather Protection', 'Secure Loading Systems', 'Cargo Insurance*', 'Temperature Monitoring', 'Theft Protection', 'Damage Prevention']
    }
  ];

  const certifications = [
    { name: 'Safety First', description: 'Transport Compliance Standards' },
    { name: 'Motor Transport', description: 'Licensed Operator' },
    { name: 'Insurance Coverage*', description: 'Comprehensive Protection' },
    { name: 'Environmental Compliance', description: 'Eco-friendly Operations' }
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
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fleet</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Modern, well-maintained vehicles equipped with the latest technology for safe and efficient transport
            </p>
          </motion.div>

          {/* Fleet Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '20+', label: 'Total Vehicles', icon: Truck },
              { number: '99.8%', label: 'Uptime Rate', icon: Clock },
              { number: '24/7', label: 'Maintenance', icon: Wrench },
              { number: '100%', label: 'GPS Enabled', icon: MapPin }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Vehicle <span className="text-green-500">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose from our diverse fleet of vehicles designed to meet every transport requirement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {vehicle.count} Units
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {vehicle.name}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {vehicle.capacity}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {vehicle.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Link to="/contact">Book This Category</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Fleet <span className="text-blue-500">Specifications</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every vehicle in our fleet meets the highest standards of safety, technology, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    {spec.category}
                  </h3>
                  <ul className="space-y-3">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Safety & <span className="text-orange-500">Maintenance</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Our commitment to safety goes beyond compliance. Every vehicle undergoes rigorous maintenance 
                schedules and safety inspections to ensure optimal performance and cargo protection.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Preventive Maintenance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Regular service schedules ensure maximum uptime and reliability for your shipments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg flex-shrink-0">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Expert Technicians
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Certified mechanics and technicians maintain our fleet to manufacturer standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Every vehicle meets stringent quality and safety standards before deployment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Our Premium Fleet
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your transport with confidence knowing your goods are in safe, reliable hands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                <Link to="/contact">Book Transport Now</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;