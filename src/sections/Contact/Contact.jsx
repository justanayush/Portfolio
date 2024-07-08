import styles from './ContactStyles.module.css'

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xovaqbpp" method="post">
  <fieldset className={styles.fieldset} id="fs-frm-inputs">
    <input className='formGroup' type="text" name="name" id="full-name" placeholder="name" required="" />
    <input className='formGroup'type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
    <textarea className='formGroup' name="message" id="message" placeholder="your message" required=""></textarea>
  </fieldset>
  <input className='hero-btn' type="submit" value="Submit" />
</form>
    </section>
  )
}

export default Contact