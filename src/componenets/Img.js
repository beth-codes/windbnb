import { GrStar } from "react-icons/gr";
import "./Img.css";

function Img({ Stays }) {
  return (
    <div className="img-file">
      {Stays.map((stay) => {
        return (
          <figure className="img-container" key={stay.id}>
            <div className="image">
              <img alt="room" src={stay.photo} />
            </div>
            <div className="img-description">
              <div className="img-description-float">
                <div className="img-description-float1">
                  <div
                    className={`none ${stay.superHost === true ? "host" : ""}`}
                  >
                    {stay.superHost ? "SUPER HOST" : null}
                  </div>
                  <p className="type">
                    {stay.type} {stay.beds ? ". " + stay.beds + " beds" : null}
                    {/* {stay.beds ? stay.beds + " bed" : null} */}
                  </p>
                </div>
                <div className="img-description-float2">
                  <GrStar className="rating" />
                  <small>{stay.rating}</small>
                </div>
              </div>
              <p className="img-text">{stay.title}</p>
            </div>
          </figure>
        );
      })}
    </div>
  );
}

export default Img;
