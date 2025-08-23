import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart, Target, Eye } from 'lucide-react';
import Card from '../components/UI/Card';
import about1965 from "../assets/images/about-image.jpg";
import anejaTransportLaunced from "../assets/images/aneja-transport-launched.png";
import anejaDigitalShift from "../assets/images/aneja-digital-shift.png";
import aboutAneja from "../assets/images/about-aneja.png"

const About: React.FC = () => {
  const timeline = [
    {
      year: '1964',
      title: 'Roots in Moradabad Begin',
      description: 'Started as a delivery partner with Victory Transport by Late Shri Shiv Dayal Aneja in Moradabad.',
      image: anejaTransportLaunced
    },
    {
      year: '1971',
      title: 'Expansion into Bareilly Market',
      description: 'Established full operations in Bareilly by Late Shri Jaswant Lal Aneja, laying the base for future growth.',
      image: about1965
    },
    {
      year: '2025',
      title: 'Advancing Through Digital Shift',
      description: 'Aneja Transport enters the digital era with an online presence and modern logistics solutions under third-generation leadership.',
      image: anejaDigitalShift
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Family Values',
      description: 'We treat every customer as family, ensuring personal attention to their transport needs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to delivering exceptional service quality in every aspect of our operations.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Five decades of consistent, on-time deliveries have built our reputation across India.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Our success is measured by the satisfaction and trust of our valued customers.'
    }
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
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Three generations of dedication, trust, and excellence in transport services across India
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    A Legacy Built on Trust
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    At Aneja Transport, our journey began in 1964 in Moradabad as a delivery partner with Victory Transport. In 1971, we expanded operations to Bareilly, officially establishing Aneja Transport as a trusted name in the transport and logistics sector. Since then, we have built a strong reputation based on reliability, timely delivery, and a commitment to customer satisfaction.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We are a family-run business with deep-rooted values and a vision for growth. Today, as the third generation leads the company, we continue to honor those founding principles while embracing modern technology and innovative logistics solutions. Our family's commitment to excellence remains unchanged as we adapt to the evolving needs of the industry.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Aneja Transport serves diverse sectors—from automobile and FMCG to retail, e-commerce, pharma, and infrastructure—delivering secure, efficient, and scalable transport solutions. Balancing tradition with innovation, we support supply chain goals across India.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500">3</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Generations</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={aboutAneja}
                    alt="Aneja Transport Legacy"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="text-orange-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Five decades of growth, innovation, and unwavering commitment to excellence
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 hidden lg:block"></div>
                
                {/* Year Badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm hidden lg:flex z-10">
                  {item.year}
                </div>

                {/* Content */}
                <div className="lg:w-5/12">
                  <Card className={`p-6 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-center mb-4 lg:hidden">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mr-4">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hidden lg:block">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>

                {/* Image */}
                <div className="lg:w-5/12 mt-6 lg:mt-0">
                  <div className={`${index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  To provide reliable, efficient, and cost-effective transport solutions across India, 
                  maintaining the highest standards of service quality while preserving the personal 
                  touch that has been our hallmark for three generations.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  To be India's most trusted and technologically advanced family-owned transport company, 
                  setting new standards in logistics while maintaining our core values of integrity, 
                  reliability, and customer-centricity.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="text-green-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that have guided us for three generations and continue to shape our future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;