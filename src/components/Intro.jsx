import React from 'react'
import Typed from 'typed.js'

const Intro = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Ayush', 'a Frontend Developer', 'a Blockchain Developer'],
        typeSpeed: 100,
        loop: true
      });
  
      return () => {
        typed.destroy();
      };

    }, []);
  return (
    <div className='flex justify-center items-center min-h-[720px]'>
    <div className='shadowy rounded-md p-20 text-white intro w-[60%] bg-gradient-to-br from-slate-900 to-slate-700'>
        <div className='pb-8'><h1 className='text-5xl'>Hi, I'm <span ref={el} className="auto-input"></span>,</h1></div>
        <div className='pb-8 text-xl'><p>I am a skilled frontend and blockchain developer with expertise in Solidity, React, and full stack development. I excel in creating dynamic web applications and secure smart contracts, seamlessly integrating blockchain technology.

</p></div>
        <div className='text-xl pb-8'><p> With a strong foundation in data structures and algorithms, I am dedicated to building innovative, user-friendly solutions. Passionate about the revolutionary potential of technology, I strive to push the boundaries of what's possible in the digital world.</p></div>
    </div>
</div>
  )
}

export default Intro