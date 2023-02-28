import Image from 'next/image'
import twitterIcon from '../../assets/icons/twitter-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'

const contact = () => {
  return ( 
    <div className="flex flex-col text-center mt-40 mb-[89px]" id='contact'>
      <h3 className="sectionHeader">Contact Me</h3>
      <h1 className="text-6xl font-bold">Get In Touch</h1>
        <p className="text-xl mt-20 mb-20">Do you have an idea you want to turn to a great <br />product,
        shoot me a mail at <br /> ooluwalani@gmail.com</p>
      <div className="flex bg-[#112240] box-border py-[28px] hover:bg-cyan-600 rounded-[20px]">
       <a href="https://twitter.com/juyi_y" target="_blank" rel="noreferrer" className='px-[25px]'>
        <Image
          src={twitterIcon}
          alt="twitter icon" 
        />
       </a>
       <a href="https://github.com/LaniJ" target="_blank" rel="noreferrer" className='px-[25px]'>
        <Image
          src={githubIcon}
          alt="github icon" 
        />
       </a>
       <a href="https://www.linkedin.com/in/oluwalani/" target="_blank" rel="noreferrer" className='px-[25px]'>
        <Image
          src={linkedinIcon}
          alt="linkedin icon" 
        />
       </a>
      </div>
    </div>
   );
}
 
export default contact;