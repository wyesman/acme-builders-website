"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => scrollToSection('hero')}>
            ACME Builders
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-400 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('specialization')} className="text-gray-700 hover:text-blue-400 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-400 font-medium transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-400 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-400 font-medium transition-colors">
              Contact
            </button>
            <button className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 font-medium transition-colors">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 text-gray-600" />
            ) : (
              <Menu className="h-8 w-8 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-700 hover:text-blue-400 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('specialization')}
                className="block w-full text-left text-gray-700 hover:text-blue-400 font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-700 hover:text-blue-400 font-medium py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-blue-400 font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-400 font-medium py-2"
              >
                Contact
              </button>
              <button className="w-full bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-500 font-medium transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen hero-bg bg-gray-800">
        <div className="absolute inset-0 bg-blue-400 bg-opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              YOUR LOS ANGELES PREMIER <span className="block">LUXURY HOME BUILDER</span> & <span className="block">WHOLE HOUSE REMODELING</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section id="specialization" className="py-16 px-4 max-w-7xl mx-auto pt-24">
        <div className="text-center mb-4">
          <p className="text-blue-400 font-medium text-lg mb-2">OUR SPECIALIZATION</p>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            WE BUILD BEAUTIFUL<br />LUXURY CUSTOM HOMES
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-gray-300 pl-6">
              Building stunning custom luxury homes is our specialty, where every detail is meticulously planned and executed to bring out your unique lifestyle and exceed your expectations.
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Award Winning Room Additions & Remodels
            </h4>
            <p className="text-gray-600 mb-8">
              From start to finish, our commitment to high-quality materials and professional touch ensures that every project we take on transforms your space into something truly remarkable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 text-lg rounded-md font-medium transition-colors">
                START YOUR PROJECT →
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-blue-400 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-blue-400 font-semibold text-lg">(555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-400 text-white p-8 text-center rounded-lg">
            <h5 className="text-2xl font-bold">15 YEARS OF EXPERIENCE</h5>
          </div>
        </div>
      </section>

      {/* Design + Build Section */}
      <section className="relative h-96 design-build-bg">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  THE <span className="text-blue-400">DESIGN +</span><br />BUILD
                </h3>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  WHOLE HOUSE<br /><span className="text-blue-400">REMODELING</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 max-w-7xl mx-auto pt-24">
        <div className="mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            ACME BUILDERS<br />
            <span className="text-blue-400">CREATIVE &<br />DEDICATED</span><br />
            PROJECTS
          </h3>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md font-medium">VIEW ALL</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/3861417100.jpeg"
              alt="Celebrity Modern Farmhouse"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">CELEBRITY<br />MODERN FARMHOUSE</h4>
              <button className="mt-2 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                View Gallery
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/114771229.jpeg"
              alt="Carbon Beach Malibu"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">CARBON BEACH<br />MALIBU MODERNIST</h4>
              <button className="mt-2 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                View Gallery
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/2527455779.jpeg"
              alt="Farmdale Black Modern"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">FARMDALE BLACK<br />MODERN FARMHOUSE</h4>
              <button className="mt-2 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                View Gallery
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/2996704915.jpeg"
              alt="Sylmar Designer"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">SYLMAR DESIGNER<br />TRADITIONAL</h4>
              <button className="mt-2 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 max-w-7xl mx-auto pt-24">
        <div className="mb-12">
          <p className="text-blue-400 font-medium text-lg mb-2">OUR SERVICES</p>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            FROM REMODELS TO <span className="text-blue-400">NEW<br />LUXURY HOME</span> CONSTRUCTION<br />SERVICES
          </h3>
          <p className="text-gray-600 max-w-3xl">
            At ACME Builders, we offer a comprehensive range of custom home builds and remodeling services to meet your every need. Are you looking to refresh your existing space or take on a new project to build your dream home? We are here to make your vision a reality. We'll guide you through every step of the process, ensuring that your project exceeds expectations and reflects your unique style and preferences.
          </p>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium mt-6">View All Services</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/3991150238.jpeg"
              alt="Custom Home Builds"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">CUSTOM HOMES<br />BUILDS</h4>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/4078007743.jpeg"
              alt="Remodeling Services"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">REMODELING<br />SERVICES</h4>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/3158527001.jpeg"
              alt="Building Additions"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">BUILDING<br />ADDITIONS</h4>
            </div>
          </div>

          <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/148229075/3334418126.jpeg"
              alt="Roofing Services"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h4 className="font-bold text-lg">ROOFING<br />SERVICES</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-medium text-lg mb-2">WHY CHOOSE</p>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              ACME BUILDERS?
            </h3>
            <p className="text-gray-600 mb-8">
              ACME Builders is a premier Los Angeles, California based General Contractor specializing in the construction of brand new design custom homes, whole house remodeling, and multi-family apartment buildings. Our services include Owner's Representation, General Construction, Project Management, Expediting, and Design + Build.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Experienced Construction Professional</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Committed to Helping Our Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Building Maintenance & Renovation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Innovation Eco Power Technologies</span>
              </div>
            </div>

            <div className="space-y-4">
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium">ABOUT US</button>
              <div>
                <p className="text-gray-600 font-medium">CALL US TODAY!</p>
                <p className="text-blue-400 text-2xl font-bold">(555) 123-4567</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://ext.same-assets.com/148229075/3384489871.jpeg"
              alt="Modern Home Exterior"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-medium text-lg mb-2">TESTIMONIALS</p>
          <h3 className="text-4xl font-bold text-gray-900 mb-12">
            HEAR WHAT OUR HAPPY CLIENTS<br />HAVE TO SAY
          </h3>

          <div className="p-8 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              "After considering several contractors in Los Angeles for our home renovation project, we ultimately chose ACME Builders, and we couldn't be happier with our decision! They guided us through every step of the process and we are truly grateful for their exceptional work. Professional, hard working and knowledgeable, we wouldn't hesitate to work with them again in the future. Thank you!"
            </p>
            <div className="text-blue-400 text-4xl mb-4">"</div>
            <div>
              <p className="font-bold text-gray-900">John Anderson</p>
              <p className="text-gray-600">Homeowner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-400 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-2xl font-bold mb-3">ACME Builders</h4>
              <p className="mb-3">ACME Builders is a premier Los Angeles, CA based General Contractor.</p>
              <div className="mb-3">
                <p className="font-bold">CALL US:</p>
                <p className="text-xl">(555) 123-4567</p>
              </div>
              <div>
                <p className="font-bold mb-1">HOURS & LOCATIONS:</p>
                <p className="font-bold">HOURS:</p>
                <p>Monday-Friday: 8am-6pm</p>
                <p>Saturday: 9am-4pm</p>
                <p>Sunday: Closed</p>
                <p className="font-bold mt-2">ADDRESS:</p>
                <p>123 Main Street</p>
                <p>Los Angeles, CA 90210</p>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-3">OUR SERVICES</h5>
              <ul className="space-y-0">
                <li>Design + Build</li>
                <li>Bathroom Remodeling</li>
                <li>Building Additions</li>
                <li>Kitchen Remodeling</li>
                <li>Outdoor Living Space Remodeling</li>
                <li>Roofing</li>
                <li>Whole Home Remodeling</li>
                <li>About Us</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-3">AREAS WE SERVE</h5>
              <ul className="space-y-0">
                <li>Bel Air</li>
                <li>Beverly Hills</li>
                <li>Brentwood</li>
                <li>Burbank</li>
                <li>Calabasas</li>
                <li>Glendale</li>
                <li>Hollywood</li>
                <li>Los Angeles</li>
                <li>Malibu</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-0 mt-6 md:mt-8">
                <li>Pacific Palisades</li>
                <li>Palos Verdes</li>
                <li>Santa Monica</li>
                <li>Sherman Oaks</li>
                <li>Westlake Village</li>
                <li>Venice</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-300 mt-6 pt-4 text-center">
            <p>© 2024 ACME Builders | License #ABC123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
