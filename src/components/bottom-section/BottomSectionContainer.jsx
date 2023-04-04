import { useState } from "react";
import "../../styles/BottomSection.css"

const BottomSectionContainer = () => {
  const [starIsChecked, setStarIsChecked] = useState(true);

  const handleClick = (id) => {
    const starCliked = document.getElementById(`${id}`);
    
    setStarIsChecked(!starIsChecked);
  };
  return (
    <div className="bottom-container">
      <h2>Rate this album</h2>
      <div className="stars-container">
      <span
        id={"star1"}
        className={!starIsChecked ? "fa fa-star checked" : "fa fa-star not-checked"}
        onClick={()=>handleClick("star1")}
      ></span>
      <span
        id={"star2"}
        className={!starIsChecked ? "fa fa-star checked" : "fa fa-star not-checked"}
        onClick={()=>handleClick("star2")}
      ></span>
      <span
        id={"star3"}
        className={!starIsChecked ? "fa fa-star checked" : "fa fa-star not-checked"}
        onClick={()=>handleClick("star3")}
      ></span>
      <span
        id={"star4"}
        className={!starIsChecked ? "fa fa-star checked" : "fa fa-star not-checked"}
        onClick={()=>handleClick("star4")}
      ></span>
      <span
        id={"star5"}
        className={!starIsChecked ? "fa fa-star checked" : "fa fa-star not-checked"}
        onClick={()=>handleClick("star5")}
      ></span>
      </div>
    </div>
  );
};

export default BottomSectionContainer;
