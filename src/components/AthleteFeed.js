import React from 'react';
import Athlete from './Athlete';
import styled from 'styled-components';

const AthleteWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-top: 3px solid #f5f4f0
  border-bottom: 3px solid #f5f4f0;
  border-left: 3px solid #f5f4f0
  border-right: 3px solid #f5f4f0
`;

const athleteFeed = ({ athletes }) => {
  return (
    <div>
      {athletes.map(athlete => (
        <AthleteWrapper key={athlete.id}>
          <Athlete athlete={athlete} />
        </AthleteWrapper>
      ))}
    </div>
  );
};

export default athleteFeed;
