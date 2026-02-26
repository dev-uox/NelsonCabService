import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCar,
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

// Import images from assets/images
import logo from "../assets/NELSON LOGO.png";
import sliderImg from "../assets/Texi1.png";
import aboutImg from "../assets/Texi2.png";
import deliveryMan from "../assets/delivery-man.png";
import airplane from "../assets/airplane.png";
import backpack from "../assets/backpack.png";
// Updated: Different images for news section
import newsImg1 from "../assets/news-img1.jpg";
import newsImg2 from "../assets/news-img2.jpg";
import newsImg3 from "../assets/news-img3.jpg";
import contactImg from "../assets/contact-img.png";
import deliveryManWhite from "../assets/delivery-man-white.png";
import deliveryManBlack from "../assets/delivery-man-black.png";
import shieldWhite from "../assets/shield-white.png";
import shieldBlack from "../assets/shield-black.png";
import repairingWhite from "../assets/repairing-service-white.png";
import repairingBlack from "../assets/repairing-service-black.png";
import quoteIcon from "../assets/quote.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [bookingForm, setBookingForm] = useState({
    carType: "",
    pickup: "",
    dropoff: "",
    phone: "",
  });
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonials carousel state
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Data Arrays (Unchanged)
  const testimonials = [
    {
      name: "Emily Parker",
      text: "Nelson Taxi has been absolutely reliable every time I've booked with them. The drivers are friendly, on time, and the cars are always spotless. Highly recommended!",
      rating: 5,
    },
    {
      name: "James Cooper",
      text: "I use Nelson Taxi for my daily commute to the office. The service is consistent and the drivers are always respectful and helpful. Excellent experience overall!",
      rating: 5,
    },
    {
      name: "Olivia Mitchell",
      text: "I was impressed by how professional and courteous the driver was. I felt safe and comfortable throughout the journey. Nelson Taxi is now my go-to service.",
      rating: 5,
    },
    {
      name: "Daniel Wright",
      text: "I had to book a ride for a business meeting in a new city. The driver was knowledgeable, polite, and got me to my destination on time. Great first impression!",
      rating: 5,
    },
  ];

  // Updated news array with different images
  const news = [
    {
      date: "29 June 2019",
      title: "Grand Opening of Our New Office",
      description:
        "We celebrated the grand opening of our brand-new headquarters located in the heart of the city's bustling downtown district. This milestone event marked a significant expansion for the company, reflecting our commitment to growth and enhanced customer service.",
      image: newsImg1,
    },
    {
      date: "30 Nov 2021",
      title: "Expansion of Taxi Fleet",
      description:
        "To accommodate increasing demand and ensure superior service quality, we proudly expanded our taxi fleet with the addition of fifty new vehicles. This strategic enhancement includes a diverse range of models from luxurious sedans to environmentally friendly hybrid cars.",
      image: newsImg2,
    },
    {
      date: "10 July 2022",
      title: "Best Service Provider Award",
      description:
        "We were honored to receive the prestigious 'Best Service Provider 2025' award in recognition of our unwavering dedication to customer satisfaction and operational excellence.",
      image: newsImg3,
    },
  ];

  const services = [
    {
      icon: (
        <img
          src={deliveryMan}
          alt="Private Driver"
          className="w-14 h-14 object-contain"
        />
      ),
      title: "Private Driver",
      description:
        "Enjoy a personalized driving experience with our professional drivers. Ideal for business trips, city tours, and hourly hires, ensuring comfort and convenience every mile.",
    },
    {
      icon: (
        <img
          src={airplane}
          alt="Airport Transfer"
          className="w-14 h-14 object-contain"
        />
      ),
      title: "Airport Transfer",
      description:
        "Start or end your journey stress-free with our timely airport transfers. We monitor flight schedules for punctual pick-ups and drop-offs, so you never miss a flight.",
    },
    {
      icon: (
        <img
          src={backpack}
          alt="Luggage Transfer"
          className="w-14 h-14 object-contain"
        />
      ),
      title: "Luggage Transfer",
      description:
        "Need to ship heavy luggage or parcels? Our secure luggage transfer service transports your items safely to any destination, saving you time and effort.",
    },
  ];

  const features = [
    {
      iconWhite: deliveryManWhite,
      iconBlack: deliveryManBlack,
      title: "Best Drivers",
      description:
        "Our drivers are professionally trained, licensed, and experienced to ensure your journey is safe, comfortable, and pleasant.",
    },
    {
      iconWhite: shieldWhite,
      iconBlack: shieldBlack,
      title: "Safe and Secure",
      description:
        "All our vehicles are regularly maintained and equipped with safety features. Your security is our top priority.",
    },
    {
      iconWhite: repairingWhite,
      iconBlack: repairingBlack,
      title: "24x7 Support",
      description:
        "Round-the-clock customer service ensures you can book a ride or get assistance whenever you need it.",
    },
  ];

  // Auto slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) =>
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  const handleBookNow = (e) => {
    e.preventDefault();
    alert("Booking submitted! We will contact you shortly.");
    setBookingForm({ carType: "", pickup: "", dropoff: "", phone: "" });
  };
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };
  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden text-gray-800">
      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-red-600 to-red-400" />
              <div className="flex flex-col items-center mb-4">
                <img
                  src={logo}
                  alt="Nelson Cab Logo"
                  className="w-16 h-auto drop-shadow-sm mb-3"
                />
                <h2 className="text-xl font-bold text-gray-900 text-center">
                  Welcome!
                </h2>
              </div>
              <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                Currently, we are closed. For any queries, please contact us at{" "}
                <a
                  href="mailto:cab@encoretitlesvc.cloud"
                  className="text-red-600 font-bold hover:underline"
                >
                  cab@encoretitlesvc.cloud
                </a>
                .
                <br />
                <br />
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Co-Managed By
                </span>
                <br />
                <span className="text-red-600 font-bold text-base">
                  Vahlay Consulting Inc
                </span>
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPopup(false)}
                className="w-full py-2.5 bg-red-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-red-500/30 hover:bg-red-700 transition-all"
              >
                Continue to Website
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Nelson Cab Logo"
                className="w-12 h-auto transition-transform group-hover:scale-105"
              />
              <div
                className={`transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                <h1 className="text-lg font-extrabold tracking-tight">
                  Nelson Cab
                </h1>
                <p className="text-[10px] font-medium opacity-80 uppercase tracking-widest">
                  Service
                </p>
              </div>
            </a>

            <nav className="hidden md:flex items-center space-x-1">
              {["Home", "About", "Services", "News", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-full text-xs font-semibold transition-all uppercase tracking-wide ${scrolled ? "text-gray-600 hover:text-red-600" : "text-gray-200 hover:text-white"}`}
                >
                  {item}
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="ml-4 px-5 py-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-md hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <HiPhone className="text-sm" /> <span>Call Now</span>
              </motion.a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden text-xl transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <div className="flex flex-col p-4 space-y-1">
                  {["Home", "About", "Services", "News", "Contact"].map(
                    (item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-lg text-sm font-medium transition-colors"
                      >
                        {item}
                      </a>
                    ),
                  )}
                  <a
                    href="tel:+1234567890"
                    className="block px-4 py-3 bg-red-600 text-white text-center rounded-lg text-sm font-bold mt-2"
                  >
                    Call Now
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gray-900"
      >
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={sliderImg}
                alt="Background"
                className="w-full h-full object-cover"
              />
              {/* Changed: Full black transparent overlay instead of directional gradient */}
              <div className="absolute inset-0 bg-black/65" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm"
              >
                Welcome to
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4"
              >
                Nelson{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-300">
                  Cab Service
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-md lg:max-w-lg leading-relaxed"
              >
                Reliable, Safe, and Professional Taxi Services Around the Clock.
                Your comfort is our priority.
              </motion.p>
            </motion.div>

            {/* Booking Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-95 mx-auto lg:ml-auto lg:mr-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center justify-center lg:justify-start gap-3">
                <span className="bg-red-600 p-1.5 rounded-md text-sm">
                  <FaCar />
                </span>
                Get A Taxi Now
              </h3>
              <form onSubmit={handleBookNow} className="space-y-3">
                <div className="space-y-3">
                  <input
                    type="text"
                    name="carType"
                    value={bookingForm.carType}
                    onChange={handleInputChange}
                    placeholder="Car Type"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-900/60 text-white text-sm border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="pickup"
                    value={bookingForm.pickup}
                    onChange={handleInputChange}
                    placeholder="Pick Up Location"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-900/60 text-white text-sm border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="dropoff"
                    value={bookingForm.dropoff}
                    onChange={handleInputChange}
                    placeholder="Drop Location"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-900/60 text-white text-sm border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-900/60 text-white text-sm border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-400"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all mt-4"
                >
                  Book Now
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-0.5 bg-red-600 rounded-full"></div>
                <span className="text-red-600 font-bold uppercase tracking-wider text-xs">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                We Are The Best <br />
                <span className="text-red-600">Taxi Company</span>
              </h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  At Nelson Taxi Company, we believe getting from point A to
                  point B should be safe, simple, and stress-free. With over a
                  decade of experience, we've built our reputation on
                  punctuality, professionalism, and clean, comfortable vehicles.
                </p>
                <p>
                  Whether you're heading to the airport, commuting to work, or
                  enjoying a night out, our licensed drivers are here 24/7 to
                  get you where you need to go — on time, every time.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] text-gray-500"
                      >
                        User
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-gray-900">
                    Trusted by thousands of riders.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-600 rounded-2xl rotate-2 opacity-5"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutImg}
                  alt="About Nelson Cab"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              What We Provide
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-red-600 transition-colors duration-300">
                  <div className="w-10 h-10 transition-all duration-300 filter group-hover:brightness-0 group-hover:invert">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features (Why Choose Us) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 p-8 transition-all hover:bg-red-600 hover:shadow-xl hover:scale-[1.01] duration-300"
              >
                <div className="relative w-16 h-16 mb-5">
                  <img
                    src={feature.iconBlack}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={feature.iconWhite}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-red-100 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                Latest Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Our News
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-red-600 text-sm font-bold hover:gap-3 transition-all"
            >
              View All <FaArrowRight className="text-xs" />
            </a>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {news.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                    {item.date}
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-4 text-red-600 font-semibold text-xs hover:underline">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden bg-gray-900">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              What Clients Say
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Hear from our satisfied customers about their experience with
              Nelson Cab Service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative"
                >
                  <img
                    src={quoteIcon}
                    alt="quote"
                    className="absolute top-6 right-6 w-8 h-8 opacity-20 invert"
                  />
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                      <FaUser />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg text-gray-200 italic leading-relaxed mb-4">
                        "{testimonials[testimonialIndex].text}"
                      </p>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {testimonials[testimonialIndex].name}
                        </h4>
                        <div className="flex justify-center md:justify-start text-yellow-400 gap-1 mt-1 text-xs">
                          {[
                            ...Array(testimonials[testimonialIndex].rating),
                          ].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center md:justify-end gap-3 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">
                Any Questions?
              </h2>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-red-600/30 hover:bg-red-700 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-fit"
            >
              <img
                src={contactImg}
                alt="Contact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 text-lg">
                      <HiLocationMarker />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Address</h4>
                      <p className="text-gray-300">
                        123 Taxi Street, City Center
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 text-base">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Phone</h4>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-300 hover:text-white"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 text-base">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <a
                        href="mailto:cab@encoretitlesvc.cloud"
                        className="text-gray-300 hover:text-white"
                      >
                        cab@encoretitlesvc.cloud
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <img src={logo} alt="Logo" className="w-16 h-auto mb-4" />
            <h2 className="text-xl font-bold mb-1">Nelson Cab Service</h2>
            <p className="text-gray-500 text-sm mb-6">
              Reliable Transportation Solutions
            </p>

            <div className="w-full bg-gray-800/50 p-1.5 rounded-xl flex flex-col sm:flex-row gap-2 mb-8 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none text-white placeholder-gray-500"
              />
              <button className="px-6 py-2 bg-red-600 rounded-lg text-sm font-bold hover:bg-red-700 transition-all">
                Subscribe
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400 text-sm font-medium">
              {["Home", "About", "Services", "News", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-red-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
            <p className="mb-2">
              Email Us:{" "}
              <a
                href="mailto:cab@encoretitlesvc.cloud"
                className="text-red-500 hover:underline"
              >
                cab@encoretitlesvc.cloud
              </a>
            </p>
            <p>
              Co-Managed By{" "}
              <span className="text-red-600 font-bold">
                Vahlay Consulting Inc
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
