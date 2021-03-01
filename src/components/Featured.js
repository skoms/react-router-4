import React from 'react';

const Featured = ({match}) => {
  let name = match.params.lname ? `${match.params.fname} ${match.params.lname}` : match.params.fname;
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;