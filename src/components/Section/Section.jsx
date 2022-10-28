import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = p => {
  return (
    <section className={s.section}>
      <h2 className={s.statistics}>{p.title}</h2>
      {p.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
