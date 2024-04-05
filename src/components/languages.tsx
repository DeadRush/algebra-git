const Languages = () => {
  const lng = (number: number) => {
    for (let i = 0; i < number; i++) {
      <div className="grade__item"></div>;
    }
  };
  return (
    <>
      <h1>Languages</h1>
      <div className="lng">
        <div className="lng__item">
          <p>Croatian</p>
          <div className="grade">
            <div className="grade__item"></div>
            <div className="grade__item"></div>
            <div className="grade__item"></div>
            <div className="grade__item"></div>
            <div className="grade__item"></div>
          </div>
          <div className="lng__item">
            <p>English</p>
            <div className="grade">
              <div className="grade__item"></div>
              <div className="grade__item"></div>
              <div className="grade__item"></div>
              <div className="grade__item"></div>
              <div className="grade__item grade__item--white"></div>
            </div>
          </div>
          <div className="lng__item">
            <p>Hungary</p>
            <div className="grade">
              <div className="grade__item"></div>
              <div className="grade__item grade__item--white"></div>
              <div className="grade__item grade__item--white"></div>
              <div className="grade__item grade__item--white"></div>
              <div className="grade__item grade__item--white"></div>
            </div>
          </div>
          <div className="lng__item">
            <p>Germany</p>
            <div className="grade">
              <div className="grade__item"></div>
              <div className="grade__item grade__item--white"></div>
              <div className="grade__item grade__item--white"></div>
              <div className="grade__item grade__item--white"></div>
              <div className="grade__item grade__item--white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Languages;
