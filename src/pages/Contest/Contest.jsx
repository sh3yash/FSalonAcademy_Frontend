import { useState } from 'react';
import HeroSection from './HeroSection';
import EventsTabs from './EventsTabs';
import ChallengesSection from './ChallengesSection';
import ResultsSection from './ResultsSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';




const Contest = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='contest'>
        <Header/>
      <HeroSection onSearch={handleSearch} />

      <EventsTabs searchQuery={searchQuery} />
      <ChallengesSection searchQuery={searchQuery} />
      <ResultsSection searchQuery={searchQuery} />
      {/* <Footer/> */}
      
    </div>
  );
};

export default Contest;
