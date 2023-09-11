import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contacto</label>
    <div className="contact-container">
      <div className="contact-left">
        <p className="want-contact">Quieres contactarme? Podes hacerlo en cualquiera de mis redes!</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;