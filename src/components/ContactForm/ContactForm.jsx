import styles from "./Contact.module.css";
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io";
import { useState } from "react";



const ContactForm = () => {
  const [name,setName]=useState("rumman");
  const [email,setEmail]=useState("rumman1041@gfjhj");
  const [text,setText]=useState("hi fromm me");

 const onSubmit=(event)=>{
     event.preventDefault();

     setName(event.target[0].value);
     setEmail(event.target[1].value);
     setText(event.target[2].value);

  };
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="VIA Support Chat" icon={<MdMessage fontSize="24px"/>}/>
        <Button  onClick={onSubmit} text="VIA Call" icon={<FaPhoneAlt/>}/>
        </div>

        <Button isOutline={true} text="VIA Email" icon={<IoMdMail fontSize="24px"/>}/>

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea  name="text" rows={8}/>
          </div>

          <div style={{display: "flex",
            justifyContent: "end",
          }}>          <Button type="submit" text="Submit" />

            </div>  
            <div>{name+""+email+""+text}</div>                  
          </form>

    </div>
    <div className={styles.contactImage}>
      <img src="/images/service.png" alt="contact image"/>
    </div>
    </section>
  )
}

export default ContactForm
