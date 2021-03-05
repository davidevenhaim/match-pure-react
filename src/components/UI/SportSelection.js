import React from 'react';
import styled from 'styled-components';
// import SportImages from './SportImages';
import SportImage from '../../Layout/icons/SportImages';

const Input = styled.input`
  height: 50px;
  width: 50px;
  display: inline-block;
  margin-bottom: 5%;
  margin-left: 12%;
`;

const sportSelection = ({ onChange }) => {
  let sportImagesSelection = [];

  for (let image in SportImage) {
    sportImagesSelection.push(
      <React.Fragment>
        <label htmlFor="favoritesport" />
        <Input
          key={image}
          type="image"
          id={`${image}`}
          name="favoritesport"
          src={SportImage[image]}
          width="40"
          height="40"
          onChange={onChange}
        />
      </React.Fragment>
    );
  }
  return <React.Fragment>{sportImagesSelection}</React.Fragment>;
};

export default sportSelection;
