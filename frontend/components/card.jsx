import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="SocialCard">
      <div className="OrangeBox">
        <div className="Name">Anshu Jain</div>
        <div className="Designation">Full Stack Developer</div>
      </div>
      <div className="Thumbnail"> Image thumbnail</div>
      <div className="Byline">
        JavaScript | React.js | Redux | CSS3 | HTML5 | Ruby | Rails | MongoDB |
        GraphQL | Docker{" "}
      </div>
    </div>
  );
}

export default Card;
