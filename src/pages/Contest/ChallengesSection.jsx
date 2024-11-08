import { motion } from 'framer-motion';
import model5 from '../../assets/model5.jpeg';
import result4 from '../../assets/result4.jpeg';  // Import your local image
import result3 from '../../assets/result3.jpeg';  // Import your local image

const challenges = [
  { 
    title: 'Fashion Design Challenge', 
    description: 'Participants showcase their creativity by designing a unique fashion outfit based on a given theme.', 
    image: model5, // Use imported image
    registrationLink: '#register-fashion-design', 
    challengeLink: '#fashion-design-challenge' 
  },
  { 
    title: 'Talent Showcase Competition', 
    description: 'An opportunity for contestants to demonstrate their unique talents, from singing to dancing to magic tricks.', 
    image: result4, // Use imported image
    registrationLink: '#register-talent-showcase', 
    challengeLink: '#talent-showcase-competition' 
  },
  { 
    title: 'New Component', 
    description: 'An opportunity for contestants to demonstrate their unique talents, from singing to dancing to magic tricks.', 
    image: result3, // Use imported image
    registrationLink: '#register-talent-showcase', 
    challengeLink: '#talent-showcase-competition' 
  },
];

const ChallengesSection = ({ searchQuery }) => {
  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="challenges" className="py-10 bg-pink-200">
      <h2 className="overflow-hidden text-4xl font-bold text-center mb-8 text-pink-600">Challenges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredChallenges.map((challenge, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg transition-colors duration-300 hover:bg-pink-300"
          >
            <div className="w-full h-64 md:h-96 lg:h-128 overflow-hidden relative rounded-lg">
              {/* Use the imported image variable here */}
              <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mt-4 text-pink-600">{challenge.title}</h3>
            <p className="mt-2 text-gray-700">{challenge.description}</p>
            <a href={challenge.registrationLink} className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">Register</a>
            <a href={challenge.challengeLink} className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ml-2">Join Challenge</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
