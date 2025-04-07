import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

const Credits = () => {
//   const [activeKey, setActiveKey] = useState(0); // Tu n'en fais rien pour le moment

//   const handleSelect = (eventKey) => {
//     setActiveKey(eventKey);
//   };

  return (
    <FadeInSection>
      <div id="credits">
        <div className="ending-credits">
          <div>Built and designed by Colored Sekai.</div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
