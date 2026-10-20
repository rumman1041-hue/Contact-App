import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io";
import styles from "./Button.module.css";



const button = ({isOutline , icon , type="button",text,onClick ,...rest}) => {
  return (
    <button  type={type} onClick={onClick}  {...rest}
 className={isOutline ? styles.outline_btn :styles.primary_btn}>
    {icon}
    {text}
    </button>
  )
}

export default button
