import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = p => {
  return (
    <section className={styles.section}>
      <h2 className={styles.statistics}>{p.title}</h2>
      {p.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
