import { ContactType } from "../types/main";
import gmailImg from "../assets/icons8-gmail.svg";
import instagramImg from "../assets/icons8-instagram.svg";
import linkedInImg from "../assets/icons8-linkedin.svg";

const Contacts = ({ gmail, instagram, linkedin }: ContactType) => {
  return (
    <>
      <h1>Contacts</h1>
      <div className="contacts">
        <div className="contacts__item">
          <img
            src={gmailImg}
            alt="gmail image"
            className="contacts__item__img"
          />
          <p>{gmail}</p>
        </div>
        <div className="contacts__item">
          <img
            src={instagramImg}
            alt="Instagram image"
            className="contacts__item__img"
          />
          <p>{instagram}</p>
        </div>
        <div className="contacts__item">
          <img
            src={linkedInImg}
            alt="LinkedIn image"
            className="contacts__item__img"
          />
          <p>{linkedin}</p>
        </div>
      </div>
    </>
  );
};
export default Contacts;
