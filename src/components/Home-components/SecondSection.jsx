import React from 'react';
import { BsArrowRightCircleFill, BsCodeSlash, BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import { IoLogoDesignernews, IoMdAnalytics } from 'react-icons/io';

import { FaLinkedin } from 'react-icons/fa';

import blogLogo from '../../assets/blog.png';

const SecondSection = () => (
  <section id="second-section">
    <NavLink id="BlogLink" to="blog">
      <div id="blog" data-aos="zoom-in">
        <img src={blogLogo} alt="blog-logo" id="blogLogo" />
        <p id="BLOG">BLOG</p>
        <p id="AFonts">AFonts</p>
        <BsArrowRightCircleFill className="get-in" id="blog-link" />
      </div>
    </NavLink>
    <NavLink to="services">
      <div className="services" data-aos="zoom-in">
        <div className="icons">
          <BsCodeSlash className="code" />
          <IoLogoDesignernews className="designing" />
          <IoMdAnalytics className="analytics" />
        </div>
        <p className="species">Specializations</p>
        <p className="offering">Servies Offering</p>
        <BsArrowRightCircleFill className="get-in" id="offers" />
      </div>
    </NavLink>
    <Profils />
  </section>
);

export const Profils = ({ id, getin_services }) => (
  <div className="profiles" id={id} data-aos="zoom-in">
    <div className="innerDiv">
      <a href="https://www.linkedin.com/in/ahmed-salah-elkholy/" target="_blank" rel="noreferrer" className="circle">
        <FaLinkedin className="linked-in" />
      </a>
      <a href="https://github.com/ahmed025566" target="_blank" rel="noreferrer" className="circle">
        <BsGithub className="github" />
      </a>
    </div>
    <p className="stay-with-me">Stay With me</p>
    <p id="para-profiles">Profiles</p>
    <NavLink to="/contact"><BsArrowRightCircleFill className="get-in" id="get-to-profiles" style={{ left: getin_services }} /></NavLink>
  </div>
);
export default SecondSection;
