import React from 'react';

const Header = (props) => (
  <div>
    <h1> {props.title} </h1>
    {props.subTitle && <h3> {props.subTitle} </h3>}
  </div>
);

// The below sets a default title to the header if its not defined
Header.defaultProps = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer'
}

export default Header;