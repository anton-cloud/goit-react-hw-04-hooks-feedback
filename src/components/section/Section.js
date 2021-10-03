import React from 'react'
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
  return (
    <section style={{paddingLeft:50}}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: null,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;