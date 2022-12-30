import React from 'react';
import { motion } from 'framer-motion';
import burger2 from '../../assets/burger2.png'


const Contact = () => {
  return (
    <section className='contact'>

    <motion.form initial={{x:'-100vw',opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.3}}>
        <h2>Contact Us</h2>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
        <button type="submit">Submit</button>
    </motion.form>

    <motion.div  initial={{x:'100vw',opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.3}} className='formBorder'>


        <motion.div  initial={{y:'-100vh',x:'50%' ,opacity:0}} animate={{y:'-50%',x:'50%' ,opacity:1}} transition={{delay:0.7}}>
            <img src={burger2} alt="burger" />
        </motion.div>
    </motion.div>



    </section>
  )
}

export default Contact;