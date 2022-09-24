import "./background.styles.scss";

import backgroundRightTopMobile from "../../assets/shared/background/background-right-top.png";
import backgroundRightBottomMobile from "../../assets/shared/background/background-right-bottom.png";
import backgroundLeftMiddleMobile from "../../assets/shared/background/background-left-middle.png";

const Background = () => {
  return (
    <div className="background-container">
      <img
        src={backgroundRightTopMobile}
        alt=""
        className="background-top-right"
      />
      <img
        src={backgroundRightBottomMobile}
        alt=""
        className="background-bottom-right"
      />
      <img
        src={backgroundLeftMiddleMobile}
        alt=""
        className="background-middle-left"
      />
    </div>
  );
};
export default Background;
