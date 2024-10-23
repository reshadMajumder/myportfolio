import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import axios from 'axios';
import { BASE_URL } from '../service/Api';

interface BannerData {
  title: string;
  subtitle: string;
  background_image: string;
}

const Banner = () => {
  const [bannerData, setBannerData] = useState<BannerData | null>(null);
  const [cvUrl, setCvUrl] = useState<string>('');

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/banner/`);
        setBannerData(response.data);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    const fetchCV = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cv/`);
        setCvUrl(response.data.cv);
      } catch (error) {
        console.error('Error fetching CV:', error);
      }
    };

    fetchBannerData();
    fetchCV();
  }, []);

  if (!bannerData) return null;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bannerData.background_image}
          alt="Banner background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="container mx-auto text-center z-10 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-purple-400 mb-4"
        >
          {bannerData.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {bannerData.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Get in Touch
          </a>
          <a
            href={cvUrl}
            download
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 flex items-center"
          >
            <FileDown size={20} className="mr-2" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;