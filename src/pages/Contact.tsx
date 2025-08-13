import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, Loader2, CheckCircle } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  preferredDate: string;
  cargoType: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Handle form submission here
    console.log('Form Data:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'Leechi Bagh, NH24 Qila, Bareilly',
        'Uttar Pradesh - 243003',
        'India'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MapPin,
      title: 'Booking Office',
      details: [
        'Gangapur, Bareilly',
        'Uttar Pradesh - 243003',
        'India'
      ],
      color: 'from-red-500 to-yellow-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 9897030631 (Head Office)',
        '+91 9286801108 (Main Office)',
        '+91 8650638631 (Booking Office)',
        'Available 24/7'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'anejabareilly@gmail.com'
      ],
      color: 'from-blue-500 to-green-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon - Sun: 9:00 AM - 1:00 AM',
        'Emergency: 24/7 Available'
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const quickActions = [
    {
      icon: Phone,
      title: 'Call Now',
      description: 'Speak with our transport experts',
      action: 'tel:+919897030631',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick quote via WhatsApp',
      action: 'https://wa.me/919897030631',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed enquiry via email',
      action: 'mailto:anejabareilly@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  const cargoTypes = [
    'Household Goods',
    'Commercial Goods',
    'Electronics',
    'Furniture',
    'Industrial Equipment',
    'Textiles',
    'Automotive Parts',
    'Other (Specify in message)'
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
              Contact <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get in touch for reliable transport solutions across India. We're here to help with all your logistics needs.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.action}
                target={action.action.startsWith('http') ? '_blank' : undefined}
                rel={action.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${action.color} text-white p-6 rounded-xl text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                <action.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Book Transport / Get Quote
                  </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Transport Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        {...register('pickupLocation', { required: 'Pickup location is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="City, State"
                      />
                      {errors.pickupLocation && (
                        <p className="text-red-500 text-sm mt-1">{errors.pickupLocation.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Drop Location *
                      </label>
                      <input
                        type="text"
                        {...register('dropLocation', { required: 'Drop location is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="City, State"
                      />
                      {errors.dropLocation && (
                        <p className="text-red-500 text-sm mt-1">{errors.dropLocation.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        {...register('preferredDate')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Cargo Type
                      </label>
                      <select
                        {...register('cargoType')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select cargo type</option>
                        {cargoTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Details / Special Requirements
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please provide details about your cargo, weight, dimensions, special handling requirements, or any other information that would help us provide an accurate quote..."
                    />
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      <strong>Privacy Note:</strong> Your information is secure and will only be used to provide transport services. 
                      We respect your privacy and never share personal details with third parties.
                    </p>
                  </div>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-green-800 dark:text-green-200 font-semibold">
                          Enquiry Submitted Successfully!
                        </h4>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          Thank you for your enquiry! We will contact you within 2 hours with a detailed quote.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    // icon={isSubmitting ? Loader2 : Send}
                    disabled={isSubmitting}
                  >
                    <span className="flex items-center">
                      {isSubmitting && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </span>
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We're here to help with all your transport needs. Contact us through any of the following methods, 
                  and our experienced team will respond promptly with personalized solutions.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 dark:text-gray-400">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Find Us
                  </h3>
                </div>
                {/* <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">
                      Google Maps integration will be added here<br />
                      showing our Bareilly head office location
                    </p>
                  </div>
                </div> */}
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7557.8731678509885!2d79.39345223346201!3d28.37000242133286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00741463aa149%3A0xf84883d7fa8f827!2sAneja%20Transport!5e0!3m2!1sen!2sin!4v1753968258775!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aneja Transport Map"
                  ></iframe>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href="https://maps.app.goo.gl/rL7SprpzxMAaScvK8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quick Response Guaranteed
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We understand that transport needs are often urgent. Our team commits to responding 
              to all enquiries within 2 hours during business hours, with detailed quotes and solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">&lt; 2 Hours</div>
                <div className="opacity-90">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Emergency Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="opacity-90">Detailed Quotes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;