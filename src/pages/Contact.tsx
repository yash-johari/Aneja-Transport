import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Loader2, CheckCircle, ChevronDown } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { sendEmail } from '../services/emailService';

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

// Custom Searchable Dropdown Component
interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  error
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Filter options based on search term
  React.useEffect(() => {
    if (searchTerm === '') {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchTerm, options]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionSelect = (option: string) => {
    onChange(option);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleInputClick = () => {
    setIsOpen(true);
    if (value) {
      setSearchTerm('');
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={isOpen ? searchTerm : value}
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder={placeholder}
          className={`w-full px-4 py-3 pr-10 rounded-lg border ${
            error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
          autoComplete="off"
        />
        <ChevronDown 
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white transition-colors duration-150"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
              No cities found matching "{searchTerm}"
            </div>
          )}
        </motion.div>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>();

  // Watch form values for controlled components
  const pickupLocation = watch('pickupLocation', '');
  const dropLocation = watch('dropLocation', '');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await sendEmail(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Something went wrong while sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


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
        '+91 9286801108 (Qila Office)',
        '+91 8650638631 (Nai Basti Office)',
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
        'Mon - Sun: 10:00 AM - 9:00 PM'
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
                    {/* ✅ Searchable Pickup Location Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Pickup Location *
                      </label>
                      <SearchableSelect
                        options={coverage}
                        value={pickupLocation}
                        onChange={(value) => setValue('pickupLocation', value, { shouldValidate: true })}
                        placeholder="Search and select pickup city"
                        error={errors.pickupLocation?.message}
                      />
                      <input
                        type="hidden"
                        {...register('pickupLocation', { required: 'Pickup location is required' })}
                      />
                    </div>

                    {/* ✅ Searchable Drop Location Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Drop Location *
                      </label>
                      <SearchableSelect
                        options={coverage}
                        value={dropLocation}
                        onChange={(value) => setValue('dropLocation', value, { shouldValidate: true })}
                        placeholder="Search and select drop city"
                        error={errors.dropLocation?.message}
                      />
                      <input
                        type="hidden"
                        {...register('dropLocation', { required: 'Drop location is required' })}
                      />
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
