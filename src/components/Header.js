import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title"> {props.title} </h1>
      {props.subTitle && <h3 className="header__subtitle"> {props.subTitle} </h3>}
    </div>
  </div>
);

// The below sets a default title to the header if its not defined
Header.defaultProps = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer'
}

export default Header;