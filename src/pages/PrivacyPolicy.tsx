import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';

const PrivacyPolicy: React.FC = () => {
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
              Privacy <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              At Aneja Transport, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you share with us.
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
                            Your data, our responsibility – We safeguard your privacy at every step.
                        </h2>
                        
                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Information We Collect
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>Basic contact details such as name, phone number, email, and address when you inquire or book our services.</li>
                                <li>Transaction details related to payments and service usage.</li>
                                <li>Information collected through our website, such as cookies and browsing activity, to improve user experience.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                How We Use Your Information
                            </h3>
                            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5">
                                <li>To provide and manage transport and logistics services.</li>
                                <li>To communicate updates, confirmations, or important service information.</li>
                                <li>To improve our operations, customer support, and website functionality.</li>
                                <li>To comply with legal or regulatory requirements.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Data Security
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">We take appropriate measures to protect your information from unauthorized access, misuse, or disclosure.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Sharing of Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">We do not sell or rent your personal information. Data may only be shared with trusted partners or service providers required to fulfill your booking or comply with legal obligations.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                How We Use Your Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">You can request access, correction, or deletion of your personal information by contacting us directly.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Updates to This Policy
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                Contact Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc">For questions about this Privacy Policy, please reach out to us at <a href="mailto:anejabareilly@gmail.com">anejabareilly@gmail.com</a>.</p>
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

export default PrivacyPolicy;