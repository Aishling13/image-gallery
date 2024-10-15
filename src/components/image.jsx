import PropTypes from "prop-types";

export function Image({ imageUrl, size, altText }) {
  return (
    <img 
      className="image" 
      src={imageUrl}
      alt={altText}
      width={size}
    />
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  altText: PropTypes.string.isRequired,
}