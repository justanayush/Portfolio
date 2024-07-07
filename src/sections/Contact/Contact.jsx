import styles from './ContactStyles.module.css'

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor='name' hidden>Name</label>
                <input 
                type="text" 
                name='name' 
                id='name'
                placeholder='name'
                required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor='email' hidden>E-mail</label>
                <input 
                type="text" 
                name='email' 
                id='email'
                placeholder='email'
                required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor='message' hidden>Message</label>
                <textarea 
                id='message'
                placeholder='message'
                required
                ></textarea>
            </div>

            <input 
            type="submit" 
            className='hero-btn btn'
            value='Submit'
            placeholder='SUbmit'
            />
        </form>
    </section>
  )
}

export default Contact