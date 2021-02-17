import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import SportOptions from '../Layout/SportsImages/SportImages';
import formImages from '../Layout/UserForm/newEventImages';


const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 50%;
    margin-bottom: 1em;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NewEventForm = props => {
  const [values, setValues] = useState({ content: props.content || '' });

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values)
  };

  let userChoiceSports = [];
  // Will contain only current user favorite sports.
  for (let sport in SportOptions) {
    userChoiceSports.push(
      <option key={sport} value={sport}>
        {sport.toLowerCase()}
      </option>
    );
  }

  return (
    <Wrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(values)
          props.action({
            variables: { ...values }
          });
        }}
      >
        <p>Event img</p>
        <label htmlFor="sport">Event Sport:</label>
        <select name="sport" id="sport" onChange={onChange}>
          {userChoiceSports} 
        </select>
        <p>
            <img src={formImages.openLock} alt="openLock" />
            {/* <img src={formImages.closedLock} alt="closedLock" /> 
             -CLOSED LOCK- svg
            */}
        </p>
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={values.eventDate || '2021-02-16'}
          min="2021-02-16"
          max="2021-12-31"
          onChange={onChange}
        ></input>
        <label htmlFor="maxPlayersAmount">participants (between 2 and 30):</label>
        <input
          type="number"
          id="maxPlayersAmount"
          name="maxPlayersAmount"
          min="2"
          max="30"
          onChange={onChange}
        ></input>
      </Form>
      <Button type="submit">Submit</Button>
    </Wrapper>
  );
};

export default NewEventForm;
