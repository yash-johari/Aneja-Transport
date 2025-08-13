import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Users, MapPin, Award, Clock, Shield } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home: React.FC = () => {
  const heroImages = [
    {
      url: 'https://images.pexels.com/photos/1606957/pexels-photo-1606957.jpeg',
      title: 'Our Fleet',
      link: '/fleet',
      description: 'Modern trucks for all your transport needs'
    },
    {
      url: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpo=1',
      title: 'Our Services',
      link: '/services',
      description: 'Comprehensive logistics solutions'
    },
    {
      url: 'https://images.pexels.com/photos/7363099/pexels-photo-7363099.jpeg',
      title: 'About Us',
      link: '/about',
      description: 'Three generations of trust and reliability'
    },
    {
      url: 'https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg',
      title: 'Happy Clients',
      link: '/clients',
      description: 'Testimonials from satisfied customers'
    }
  ];

  const stats = [
    { icon: Clock, label: '50+ Years', value: 'Experience' },
    { icon: Truck, label: '20+ Vehicles', value: 'Fleet Size' },
    { icon: Users, label: '20,000+', value: 'Happy Clients' },
    { icon: MapPin, label: '100+ Cities', value: 'Coverage' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your goods are insured and handled with utmost care throughout the journey.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on punctual deliveries with real-time tracking updates.'
    },
    {
      icon: Award,
      title: 'Trusted Legacy',
      description: 'Three generations of excellence in transport services across India.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 dark:from-orange-900/30 dark:to-red-900/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpo=1')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Aneja Transport
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              Trusted Pan-India Logistics Solutions Since 1971
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Three generations of reliable transport services from Bareilly to nationwide. 
              We deliver your goods with care, precision, and the trust that comes from over 50 years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" icon={ArrowRight}>
                <Link to="/contact">Book Transport Now</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-orange-500" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Explore Our <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover what makes Aneja Transport the preferred choice for businesses and individuals across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={image.link}>
                  <Card className="overflow-hidden group cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose <span className="text-green-500">Aneja Transport</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the difference that comes with generations of expertise and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 text-center h-full">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Experience Reliable Transport?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust Aneja Transport for their logistics needs across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                <Link to="/contact">Get Quote Now</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;