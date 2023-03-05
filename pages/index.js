import About from '../components/About/About'
import Intro from '../components/Intro/Intro'
import ContactUs from '../components/Contact/Contact'
import OtherProjects from '../components/OtherProjects'
import Portfolio from '../components/Portfolio/Portfolio'
import { useEffect } from 'react'

export default function Home() {
  function fadeUpObserverCallback(elements) {
    elements.forEach((element) => {
      if(element.isIntersecting) {
        element.target.classList.add('faded');
        fadeUpObserver.unobserve(element.target);
        element.target.addEventListener("transitionend", () => {
          element.target.classList.remove('fade-up', 'faded')
        }, { once: true })
      }
    })
  }
  
  useEffect(() => {
    
    const fadeUpObserverOptions = {
      threshold: .3
    }
    const observerCallback = (elements) => {
      console.log('elements', elements)
      elements.forEach((element) => {
        if(element.isIntersecting) {
          console.log(element)
          element.target.classList.add('faded')
          observer.unobserve(element.target);
          element.target.addEventListener("transitionend", () => {
            element.target.classList.remove('fade-up', 'faded')
          }, { once: true })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, fadeUpObserverOptions)

    document.querySelectorAll('.fade-up').forEach((item) => {
      observer.observe(item)
    });
  },[])

  return (
    <div>
      <Intro />
      <About />
      <Portfolio />
      <OtherProjects />
      <ContactUs />
    </div>
  )
}
  