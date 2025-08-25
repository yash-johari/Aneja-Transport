import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building, Users, Award, Heart } from 'lucide-react';
import Card from '../components/UI/Card';
import apollo from "../assets/images/apollo.jpg";
import jkTyres from "../assets/images/jk-tyre.webp";
import nerolac from "../assets/images/nerolac-paints.png";
import ceat from "../assets/images/ceat-tyres.webp";
import bridgestone from "../assets/images/bridgestone.jpg";
import adama from "../assets/images/adama.webp";
import grasim from "../assets/images/grasim.jpg";
import jaswant from "../assets/images/jaswant-rasayan.webp";
import jswPaints from "../assets/images/jsw-paints.png";
import metroTyres from "../assets/images/metro-tyres.jpg";
import shreeRamFertiliers from "../assets/images/Shree-Ram-Fertilizers-&-Chemicals.png";
import unigold from "../assets/images/unigold.png";
import maleUserIcon from "../assets/images/male user icon.png";
import femaleUserIcon from "../assets/images/female user icon.png";
// import { source } from 'framer-motion/client';


const Clients: React.FC = () => {
  const testimonials = [
    {
      name: 'Rahul Sports Accessories',
      position: 'Local Guide',
      // company: 'Apollo Tyres',
      image: maleUserIcon,
      testimonial: 'Best for service in Bareilly, i think.',
      rating: 5,
      source: 'Google',
      // location: 'Delhi NCR'
    },
    {
      name: 'Deepak Dhasmana',
      position: 'Local Guide',
      // company: 'Kansai Narolac Paints',
      image: maleUserIcon,
      testimonial: 'Fast and very prompt delivery.',
      rating: 5,
      source: 'Google',
      // location: 'Mumbai'
    },
    {
      name: 'Gani Fitness Vigour',
      position: ' ',
      // company: 'J.k Tyres & Cavendish',
      image: maleUserIcon,
      testimonial: 'Very fast service.',
      rating: 5,
      source: 'Google'
      // location: 'Surat'
    },
    {
      name: 'Nadir Ali',
      position: 'Local Guide',
      // company: 'Personal Customer',
      image: maleUserIcon,
      testimonial: 'Good and fast service.',
      rating: 5,
      source: 'Google'
      // location: 'Bareilly'
    },
    {
      name: 'Shiv Pratap',
      position: 'Local Guide',
      // company: 'JSW Paints',
      image: maleUserIcon,
      testimonial: 'Very good behaviour.',
      rating: 5,
      source: 'Google'
      // location: 'Bangalore'
    },
    {
      name: 'Vikas Technology Centre',
      position: 'Local Guide',
      // company: 'CEAT Tyres',
      image: maleUserIcon,
      testimonial: 'Very good service.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    },
    {
      name: 'Dr.Rajesh Gangwar (RAJ)',
      position: '',
      // company: 'CEAT Tyres',
      image: maleUserIcon,
      testimonial: 'Very good.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    },
    {
      name: 'Mohd Mohsin',
      position: 'Local Guide',
      // company: 'CEAT Tyres',
      image: maleUserIcon,
      testimonial: 'V good.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    },
    {
      name: 'Saif Khan',
      position: '',
      // company: 'CEAT Tyres',
      image: maleUserIcon,
      testimonial: 'Good Work.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    },
    {
      name: 'Qadri Garments',
      position: '',
      // company: 'CEAT Tyres',
      image: maleUserIcon,
      testimonial: 'Too much useful.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    },
    {
      name: 'G Creative Generation',
      position: 'Local Guide',
      // company: 'CEAT Tyres',
      image: maleUserIcon,
      testimonial: 'Excellent Service.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    },
    {
      name: 'Nupur Agarwal',
      position: 'Local Guide',
      // company: 'CEAT Tyres',
      image: femaleUserIcon,
      testimonial: 'My father is in touch for many years and they are good.',
      rating: 5,
      source: 'Google'
      // location: 'Chennai'
    }
  ];

  const clientLogos = [
    { name: 'Apollo Tyres', logo: apollo },
    { name: 'J.k Tyres & Cavendish', logo: jkTyres },
    { name: 'Kansai Narolac Paints', logo: nerolac },
    { name: 'CEAT Tyres', logo: ceat },
    { name: 'Bridgestone India', logo: bridgestone },
    { name: 'Adama', logo: adama },
    { name: 'Grasim', logo: grasim },
    { name: 'Jaswant Rasayan', logo: jaswant },
    { name: 'JSW Paints', logo: jswPaints },
    { name: 'Metro Tyres', logo: metroTyres },
    { name: 'Shree Ram Fertilizers & Chemicals', logo: shreeRamFertiliers },
    { name: 'Unigold', logo: unigold }
  ];

  const stats = [
    { icon: Users, number: '20,000+', label: 'Happy Customers' },
    { icon: Building, number: '50+', label: 'Business Partners' },
    { icon: Award, number: '50+', label: 'Years of Trust' },
    { icon: Heart, number: '99.5%', label: 'Satisfaction Rate' }
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
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Clients</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Trusted by thousands of businesses and individuals across India for reliable transport solutions
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
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

      {/* Client Logos */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Trusted by <span className="text-green-500">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're proud to serve a diverse range of clients from small businesses to large enterprises
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
                <p>...and many more trusted partners across India</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our <span className="text-blue-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real feedback from businesses and individuals who trust Aneja Transport for their logistics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="text-orange-500 mb-4">
                    <Quote className="w-8 h-8" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}
                      </p>
                      <p className="text-sm text-orange-500 font-medium">
                        {/*{testimonial.company} •*/} {testimonial.source} Review
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Success <span className="text-orange-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Memorable projects and long-term partnerships that showcase our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Manufacturing Excellence
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Over the past decade, we've helped Berger Paints expand their distribution 
                  network across 15 states. Our reliable transport solutions have enabled them 
                  to maintain just-in-time delivery schedules, reducing their inventory costs by 25%.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    "Aneja Transport isn't just our logistics partner - they're an extension of our team."
                  </p>
                  <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                    - Supply Chain Director, Nerolac Paints
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Personal Touch
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  When the Sharma family needed to relocate elderly grandparents' belongings 
                  from their ancestral home in Bareilly to their new residence in Delhi, 
                  we handled every precious item with the care it deserved.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="text-orange-700 dark:text-orange-300 font-medium">
                    "They treated our family treasures like their own. That's the Aneja difference."
                  </p>
                  <p className="text-orange-600 dark:text-orange-400 text-sm mt-2">
                    - The Sharma Family, Delhi
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Family of Satisfied Clients
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the trust, reliability, and personal service that has made us India's 
              preferred transport partner for over six decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-blue-500 hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;