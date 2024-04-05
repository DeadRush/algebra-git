import profileImg from "../assets/Playing Music-bro.svg";
import Contacts from "../components/contacts";
import Languages from "../components/languages";
import Skill from "../components/skill";
import { dataContacts } from "../data/global";
import locationIcon from "../assets/icons8-location-100.png";

const Home = () => {
  return (
    <>
      <div className="hlayout">
        <div className="home">
          <img src={profileImg} alt="Profile Image" className="home__img" />
          <div className="home__right">
            <h1 className="home__right__header">Who am I?</h1>
            <p className="home__right__text">
              I am <b>Gabrijel Kanjo</b> front-end developer and musician who is
              ready for hard work.
            </p>
            <div className="location">
              <img
                src={locationIcon}
                alt="Location Icon"
                className="location__img"
              />
              <p>Darda</p>
            </div>
          </div>
        </div>
        <div className="info">
          <div>
            {dataContacts.map((item, index) => {
              return (
                <Contacts
                  key={index}
                  gmail={item.gmail}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              );
            })}
          </div>
          <div>
            <Languages />
          </div>
        </div>
        <Skill />
      </div>
    </>
  );
};
export default Home;
