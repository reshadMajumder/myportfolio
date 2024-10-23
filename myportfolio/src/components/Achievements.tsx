import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const iconMap = {
  Award: <Award size={40} className="text-green-500" />,
  Star: <Star size={40} className="text-blue-500" />,
  Trophy: <Trophy size={40} className="text-yellow-500" />,
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchAchievements = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/achivements/');
        const data = await response.json();
        setAchievements(data);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {iconMap[achievement.icon] || <Award size={40} className="text-gray-500" />}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">{achievement.title}</h3>
              <p className="text-gray-400 text-center">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
