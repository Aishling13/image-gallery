import { Image } from "./Image.jsx"; // Import the Image component
// import { IMAGES } from "../constants.js"; // Import the array of URLs
import { useSetUpColumns } from "../hooks/useSetUpColumns.jsx";
import { useUnsplashApi } from "../hooks/useUnsplashApi.jsx";

// Function to set the number of columns based on screen width
export const Gallery = () => {
  const columns = useSetUpColumns();
  const columnsArray = [...new Array(columns)];

  const images = useUnsplashApi();
  console.log(images)

  return (
    <div 
      className="image-gallery" 
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)` 
      }}>
      {columnsArray.map((_, columnIndex) => (
        <div key={columnIndex} className="image-column">
          {images.map((image, imageIndex) => (
            <Image 
              key={imageIndex}
              imageUrl={image.urls.small} 
              altText={image.alt_description}
              size={300}
            />
          ))}
        </div>
      ))}
    </div>
  );
};