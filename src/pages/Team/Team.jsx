import React from 'react';
import TeamHero from '../../components/sections/team/TeamHero';
import TeamMembers from '../../components/sections/team/TeamMembers';
import HiringBanner from '../../components/sections/team/HiringBanner';

const Team = () => {
  return (
    <div>
      <TeamHero />
      <TeamMembers />
      <HiringBanner />
    </div>
  );
};

export default Team;