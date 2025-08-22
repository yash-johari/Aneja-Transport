import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';

const TermsOfService: React.FC = () => {
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
              Terms of <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Welcome to Aneja Transport. By using our services, you agree to the following terms and conditions. Please read them carefully.
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
                <div className="flex flex-col items-center p-8">
                    <div className="max-w-3xl w-full text-left space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Clear terms, reliable service – Building trust through transparency.
                        </h2>
                        
                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Service Use
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>Our transport and logistics services are provided for business and personal use as agreed at the time of booking.</li>
                                <li>You agree to provide accurate details about shipment, delivery addresses, and contact information.</li>
                                <li>Prohibited items or illegal goods are not allowed for transport.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Booking & Payments
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>Bookings are confirmed only after receiving complete shipment details.</li>
                                <li>Payments must be made as agreed, either before shipment or upon delivery.</li>
                                <li>Failure to make payment may result in suspension or delay of services.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Delivery & Timelines
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>We strive to ensure timely and secure deliveries.</li>
                                <li>Delivery times may vary depending on distance, service type, traffic, or unforeseen circumstances.</li>
                                <li>In rare cases of delay, we will inform you promptly.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Liability
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>We take utmost care of your goods during transit.</li>
                                <li>Our responsibility is limited to safe transport; we are not liable for delays due to external factors such as strikes, accidents, or natural events.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Modifications & Cancellations
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>Any changes to bookings should be informed in advance.</li>
                                <li>Cancellation charges may apply based on the stage of shipment.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Changes to Terms
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">We may update these Terms of Service from time to time. Continued use of our services means you accept the updated terms.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Contact Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">For any questions regarding these Terms of Service, please contact us at <a href="mailto:anejabareilly@gmail.com">anejabareilly@gmail.com</a>.</p>
                        </div>

                    </div>
                </div>
            </Card>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;