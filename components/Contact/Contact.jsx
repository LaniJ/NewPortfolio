import styles from '../../styles/OtherProjects.module.css'

const contact = () => {
  return ( 
    <div className="flex flex-col text-center mt-40 mb-[89px]" id='contact'>
      <h3 className="sectionHeader">Contact Me</h3>
      <h1 className="text-6xl font-bold">Get In Touch</h1>
        <p className="text-xl mt-20 mb-2">
          Do you have an idea you want to turn to a great <br />product, shoot me a mail at <br />
        </p>
        <span className="text-xl mt-2 mb-20">
          <a className={styles.hightlight_link} href="mailto:ooluwalani@gmail.com">ooluwalani@gmail.com</a>
        </span>
      <div className="flex bg-[#112240] box-border py-[28px]  rounded-[20px]">
      
       <a href="https://twitter.com/juyi_y" target="_blank" rel="noreferrer" className='px-[25px]'>
        <svg className={styles.social_icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
       </a>
       
       <a href="https://github.com/LaniJ" target="_blank" rel="noreferrer" className='px-[25px]'> 
        <svg className={styles.social_icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M84,240a23.9,23.9,0,0,0,24-24V168" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M172,240a23.9,23.9,0,0,1-24-24V168" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
       </a>
       <a href="https://www.linkedin.com/in/oluwalani/" target="_blank" rel="noreferrer" className='px-[25px]'>
        <svg className={styles.social_icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256">
          <rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
          <line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="88" stroke="#ffffff" fill="#ffffff" cy="80" r="12"></circle>
        </svg>
       </a>
      </div>
    </div>
   );
}
 
export default contact;