import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';
import Portfolio from './sections/portfolio/Portfolio';
import Skills from './sections/skills/Skills';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import {useRef, useState, useEffect} from 'react'

const App = () => {
  const {themeState} = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  })

  

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Technologies/>
        <Skills/>
        <Portfolio/>
         <Contact/>
        <Footer/>
        <Theme/>
        {showFloatingNav && <FloatingNav/>}
    </main>
  )
}

export default App

//app.js
//i removed this siteYPostion independancy 

//theme-context-js 
////From this useEffect i removed [themeState.primary, themeState.background] this independancey