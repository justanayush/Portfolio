import React, { useState } from 'react'
import Navbar from './Navbar'

 const ContactMe = () =>{ return (
    <>
   
    <div id='contactme' className='h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
        <Navbar />
    <h1 className='pt-40 ml-32 text-left intro text-white text-7xl'>Leave a message</h1>
    <label for="message" className="ml-[132px] my-6 block text-2xl font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-[550px] h-[220px] ml-[134px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none resize-none" placeholder="Write your messsage"></textarea>
    <div>
    <a href="mailto:ayushv1347@gmail.com?subject=Message%20for%20Ayush%20&body=Hi,%0A%0ALeave%20your%20message%20here:%0A%0A[Your%20name]"><button type='button' className='intro send w-[120px] h-10 ml-[135px] mt-10'>Send</button></a>
    </div>

    </div>
    </>
  )
}

export default ContactMe