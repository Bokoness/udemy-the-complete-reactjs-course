import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
)

//default props - if the component did not recived any props - it will use those defaults
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;