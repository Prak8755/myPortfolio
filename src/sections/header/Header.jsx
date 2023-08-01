import { useEffect } from 'react'
import HeaderImage from '../../assets/about.jpeg'
import data from './data'


import './header.css'

const Header = () => {
 

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">Prakash singh</h3>
        <p  data-aos="fade-up">
        Certified front-end developer skilled in HTML, CSS, JavaScript, React.js, and Redux. Passionate about crafting visually appealing and intuitive websites that deliver exceptional user experiences. Actively seeking full-time opportunities to contribute my expertise and drive innovation in front-end development. Let's create meaningful digital experiences together!        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header