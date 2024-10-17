import PropTypes from "prop-types";
import { useState } from "react";

export const Image = ({ imageUrl, size, altText }) => {
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="image-container">
      <img 
        className="image" 
        src={imageUrl}
        alt={altText}
        width={size}
      />
      <div className="overlay">
        <button 
        className={`icon ${liked ? 'liked' : ''}`} 
        onClick={handleHeartClick}
        aria-label={liked ? 'Unlike this image' : 'Like this image'}  
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  altText: PropTypes.string.isRequired,
}