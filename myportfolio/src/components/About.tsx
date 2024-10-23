import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { BASE_URL } from '../service/Api';

interface AboutData {
  content: string;
  image: string;
}

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/about/`);
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) return null;

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={aboutData.image}
              alt="Jahidul Hassan Reshad"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 md:pl-12"
          >
            <p className="text-lg text-gray-300">{aboutData.content}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;