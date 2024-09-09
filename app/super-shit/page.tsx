import React from 'react';
import Watting from '@/assets/quby-cute.gif';
import styles from './staking.module.css';

const StakingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img src={Watting.src} alt="Watting" className={styles.pulsatingImage} />
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl">Function story is under development</p>
      </div>
    </div>
  );
};

export default StakingPage;
