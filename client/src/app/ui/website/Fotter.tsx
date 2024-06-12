import React from 'react';

const Fotter = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        {/* Contact Info */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p className='font-light text-gray-300'>123 Street, City</p>
          <p className='font-light text-gray-300'>info@example.com</p>
          <p className='font-light text-gray-300'>+123 456 7890</p>
        </div>
        {/* Quick Links */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul>
            <li><a href="/about" className="text-gray-300 font-light">About Us</a></li>
            <li><a href="/services" className="text-gray-300 font-light">Services</a></li>
            <li><a href="/contact" className="text-gray-300 font-light">Contact</a></li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700 mt-4">
        © 2023 Kavasam leaning Acadamey. All rights reserved.
      </div>
    </footer>
  )
}

export default Fotter