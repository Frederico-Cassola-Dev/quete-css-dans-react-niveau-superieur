import "../../styles/ImageContainer.css";

const ImageContainer = () => {
  return (
    <figure className ="image-container">
      <img
        src="https://images.pexels.com/photos/1179876/pexels-photo-1179876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Roses image" 
      />
      <h2 className="img-title">ROZES</h2>
      <figcaption>UNDER THE GRAVE</figcaption>
    </figure>
  );
};

export default ImageContainer;
