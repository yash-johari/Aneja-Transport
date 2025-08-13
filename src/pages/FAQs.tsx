import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Phone, Mail } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const FAQs: React.FC = () => {
  // const [openItems, setOpenItems] = useState<number[]>([]);
  const [openItem, setOpenItem] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState('');

  // const toggleItem = (index: number) => {
  //   setOpenItems(prev => 
  //     prev.includes(index) 
  //       ? prev.filter(item => item !== index)
  //       : [...prev, index]
  //   );
  // };
  const toggleItem = (index: number) => {
  setOpenItem(prev => prev === index ? null : index);
};


  const faqCategories = [
    {
      category: 'Booking & Pricing',
      icon: '💰',
      faqs: [
        {
          question: 'How do I book transport services with Aneja Transport?',
          answer: 'You can book our services through multiple channels: (1) Fill out our online booking form on the Contact page, (2) Call us directly at +91 9897030631, (3) Send us a WhatsApp message, or (4) Email us at anejabareily@gmail.com. Our team will respond within 2 hours with a detailed quote and booking confirmation.'
        },
        {
          question: 'How are transport charges calculated?',
          answer: 'Our pricing is based on several factors: distance between pickup and delivery locations, weight and dimensions of cargo, type of vehicle required, urgency of delivery, and any special handling requirements. We provide transparent pricing with no hidden charges. All quotes include fuel, tolls, and driver charges.'
        },
        {
          question: 'Do you provide free estimates?',
          answer: 'Yes, we provide completely free, no-obligation estimates for all transport services. Simply provide us with pickup/delivery locations, cargo details, and preferred timeline, and we\'ll send you a detailed quote within 2 hours during business hours.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, bank transfers, UPI, credit/debit cards, and cheques. For corporate clients, we offer credit terms based on agreement. Complete payment can be made either at the beginning of the shipment or upon delivery, as per your preference.'
        }
      ]
    },
    {
      category: 'Service Coverage',
      icon: '🗺️',
      faqs: [
        {
          question: 'Which cities and states do you serve?',
          answer: 'We operate in more than 100 cities across India, with an extensive network that also enables us to reach remote locations through trusted partner transporters.'
        },
        {
          question: 'Do you provide door-to-door service?',
          answer: 'Yes, we offer complete door-to-door pickup and delivery services. Our team will collect your goods from your specified location and deliver them directly to the destination address. This includes loading, unloading, and basic packing if required.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery time depends on distance and service type: Same city deliveries are completed within a few hours, within state deliveries take a short transit time, and neighboring state deliveries are scheduled promptly. We also offer express services for urgent shipments with guaranteed timelines.'
        },
        {
          question: 'Do you operate on weekends and holidays?',
          answer: 'Yes, we operate all 7 days a week from 9 AM to 1 AM, including weekends and holidays. Please note, delivery timelines may be slightly affected during major festivals or public holidays due to traffic restrictions and limited on-ground staff.'

        }
      ]
    },
    {
      category: 'Safety & Insurance',
      icon: '🛡️',
      faqs: [
        {
          question: 'What safety measures do you take?',
          answer: 'We ensure maximum safety through: GPS-enabled vehicles with real-time tracking, experienced and verified drivers, regular vehicle maintenance and safety checks, secure packaging and loading procedures, 24/7 customer support for emergencies, and comprehensive insurance coverage.'
        },
        {
          question: 'What happens if my goods are damaged?',
          answer: 'In the rare event of damage, immediately notify us with photos and details. We will ensure quick resolution and take corrective measures. We also conduct thorough investigations to prevent future incidents.'
        },
        {
          question: 'How do you handle fragile items?',
          answer: 'Fragile items receive special attention with extra padding, bubble wrap, and secure placement in vehicles. We use "Fragile" labels and brief drivers on careful handling. For high-value fragile items, we recommend additional insurance and specialized packing services.'
        }
      ]
    },
    {
      category: 'Tracking & Updates',
      icon: '📱',
      faqs: [
        {
          question: 'How will I be notified about delivery updates?',
          answer: 'We provide regular updates via SMS, WhatsApp, and phone calls at key milestones: pickup confirmation, dispatch notification, in-transit updates, out-for-delivery alert, and delivery confirmation with recipient details.'
        },
        {
          question: 'What if I need to change the delivery address?',
          answer: 'Address changes are possible before dispatch at no extra charge. After dispatch, address changes within the same city incur minimal charges. For different cities, additional transport charges apply. Contact us immediately for address modifications.'
        },
        {
          question: 'Do you provide delivery confirmation?',
          answer: 'Yes, you\'ll receive immediate delivery confirmation with recipient name, time, and signature/photo proof. For valuable shipments, we also provide delivery receipt copies via WhatsApp/email for your records.'
        }
      ]
    },
    {
      category: 'Special Requirements',
      icon: '⚙️',
      faqs: [
        {
          question: 'Do you handle oversized or heavy cargo?',
          answer: 'Yes, we have specialized vehicles and equipment for oversized and heavy cargo up to 25 tons. This includes industrial machinery, construction equipment, and large furniture. Special permits and escorts are arranged when required.'
        },
        {
          question: 'Can you provide packing services?',
          answer: 'We offer professional packing services for fragile, valuable, or complex items. Our team uses quality materials including bubble wrap, thermocol, wooden crates, and waterproof covers. Packing charges are based on item size and complexity.'
        },
        {
          question: 'Do you transport hazardous materials?',
          answer: 'We transport certain hazardous materials with proper permits and safety protocols. Items like chemicals, flammable liquids, and batteries require special documentation. Contact us to discuss specific requirements and safety measures.'
        },
        {
          question: 'Can I send perishable goods?',
          answer: 'Yes, we transport perishable goods with appropriate arrangements. For temperature-sensitive items, we can arrange refrigerated transport. Quick delivery options are recommended for perishables to maintain quality.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

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
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">FAQs</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Find answers to commonly asked questions about our transport services, pricing, and policies
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: HelpCircle, number: '50+', label: 'FAQs Covered' },
              { icon: MessageCircle, number: '24/7', label: 'Support Available' },
              { icon: Phone, number: '< 2hr', label: 'Response Time' },
              { icon: Mail, number: '100%', label: 'Questions Answered' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-4">
                  <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No FAQs Found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
                </p>
                <Button onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              </motion.div>
            ) : (
              filteredFAQs.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      // const isOpen = openItems.includes(globalIndex);
                      const isOpen = openItem === globalIndex;

                      
                      return (
                        <Card key={faqIndex} className="overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left focus:outline-none"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                {faq.question}
                              </h3>
                              <div className="flex-shrink-0">
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-orange-500" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                              </div>
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4">
                                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Still Have <span className="text-orange-500">Questions</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Our customer support team is available 24/7 to help you with any queries about our transport services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Speak directly with our transport experts
                </p>
                <Button variant="outline" className="w-full">
                  <a href="tel:+919897030631">Call Now</a>
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Quick responses via WhatsApp chat
                </p>
                <Button variant="outline" className="w-full">
                  <a href="https://wa.me/919897030631" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Detailed responses within 2 hours
                </p>
                <Button variant="outline" className="w-full">
                  <a href="mailto:anejabareilly@gmail.com">Send Email</a>
                </Button>
              </Card>
            </div>

            <div className="mt-12">
              <Button size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;