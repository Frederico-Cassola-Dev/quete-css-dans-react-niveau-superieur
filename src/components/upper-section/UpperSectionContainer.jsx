import ImageContainer from "./ImageContainer";
import TitleContainer from "./TitleContainer";
import "../../styles/UpperSection.css"

const UpperSectionContainer = () => {
  return (
    <div className="upper-section">
      <ImageContainer />
      <TitleContainer />
    </div>
  );
};

export default UpperSectionContainer;

