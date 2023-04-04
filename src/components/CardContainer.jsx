import UpperSectionContainer from "./upper-section/UpperSectionContainer";
import BottomSectionContainer from "./bottom-section/BottomSectionContainer";
import "../styles/CardContainer.css"


function CardContainer() {
  return (
    <div className="card-container">
      <UpperSectionContainer />
      <BottomSectionContainer />
    </div>
  );
}

export default CardContainer;
