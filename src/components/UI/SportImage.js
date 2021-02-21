import React from 'react';

// styles import
import SportImages from '../../Layout/icons/SportImages';

const sportImages = ({ sports, height }) => {
  let sportsToRender = null;
  let sportsArray = [];

  if(typeof(sports) == "string") sportsArray.push(sports)
  else sportsArray = Array(...sports);

  if (sports) {
    sportsToRender = sportsArray.map(sport => (
      <img src={SportImages[sport]} alt={`${sport}icon`} height={height} key={sport}/>
    ));
  }
  return (
      <React.Fragment>
          {sportsToRender}
      </React.Fragment>
  )
};

export default sportImages;
