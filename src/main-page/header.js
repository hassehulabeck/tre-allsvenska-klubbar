import React from 'react';

const Header = (props) => (
  <header className="row">
    <div className="col-md-5">
      <h1>Allsvenska fotbollsklubbar</h1>
    </div>
    <div className="col-md-7 mt-5 subtitle">
      {props.subtitle}
    </div>
  </header>
);

export default Header;