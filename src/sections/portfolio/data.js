
import Mockup from '../../assets/mockup.jpeg'
import Usb from '../../assets/usb.jpeg'
import youtube from '../../assets/Youtube.jpeg';
import swiggy from '../../assets/swiggy.jpeg';
import recipe from '../../assets/recipe.jpeg';
import calculator from '../../assets/calculator.jpeg'




const data = [
  
    {
        id: 1,
        category: 'React js',
        image:youtube,
        title: "Mini Youtube",
        desc: "In this Project i have learnt about numerious React js Concepts such as React Hooks(useState,useEffect,useMemo,useRef) etc.This project is based upon youtube api, search api with debouncing feature and much more....",
        demo: 'https://main--mini-youtube-668.netlify.app/',
        github: 'https://github.com/Prak8755/Mini-youtube'
    },
    {
        id: 2,
        category: 'React js',
        image: swiggy,
        title: "Mini swiggy App",
        desc: "This project was my beginning with React ,where i implemented user offline,online, search recipe ,recipe can be added to the cart ,error handling ,swiggy live api data for recipe ,user can visit the restaurant menu and many more....",
        demo: 'https://github.com/Prak8755/Swiggy',
        github: 'https://github.com/Prak8755/Swiggy'
    },
   
   
    {
        id: 3,
        category: 'Html Css Javascript',
        image: calculator,
        title: "Simple javascript Calculator",
        desc: "In this project i have tried to make simple calculator functionality like adding ,subtracting ,dividing and multiplying of numbers. The data will be displayed on the UI.",
        demo: 'https://my-calculator-668.netlify.app/',
        github: 'https://github.com/Prak8755/Responsive-Calc'
    },
    {
        id: 4,
        category: 'Html Css Javascript',
        image: recipe,
        title: "Recipe Book Api",
        desc: "This project is based upon Vanilla Javascript ,Html5 and css3. In this Project i have used Food Api to fecth the Restaurant details and displaying them on the UI.",
        demo: 'https://musical-alpaca-8c20de.netlify.app/',
        github: 'https://github.com/Prak8755/Recipe_Book'
    },
    {
        id: 5,
        category: 'Html Css Javascript',
        image: Mockup,
        title: "Mockup Show",
        desc: "This project is based upon mockup ,where there is static content being displayed on the UI.Here i learnt about side nav bar and also implemented Responsive nav bar menu...",
        demo: 'https://rad-wisp-66fe1f.netlify.app/',
        github: 'https://github.com/Prak8755/New_Mockup'
    },
    {
        id: 6,
        category: 'Html Css Javascript',
        image: Usb,
        title: "Usuability Responsive",
        desc: "This is one of my Responsive website that called Usability. In this project i have gained knolwedge about responsive design with simple Css.",
        demo: 'https://transcendent-lily-09fe38.netlify.app/',
        github: 'https://github.com/Prak8755/Usability-Responsive'
    }
]


export default data