import { Image } from "./image.jsx"; // Import the Image component
// import { IMAGES } from "../constants.js"; // Import the array of URLs
import { useSetUpColumns } from "../hooks/useSetUpColumns.jsx";
import { useUnsplashApi } from "../hooks/useUnsplashApi.jsx";

// Function to set the number of columns based on screen width
export const Gallery = () => {
  const columns = useSetUpColumns();
  const images = useUnsplashApi();

  // create an array of columns, where each column is an empty array initially
  const columnsArray = [...new Array(columns)].map(() => []); 
  
  // distribute images across the columns using modulo
  images.forEach((image, imageIndex) => {
    const columnIndex = imageIndex % columns; // determine the column based on imageIndex
    columnsArray[columnIndex].push(image); // add the image to the corresponding column
  });

  return (
    <div 
      className="image-gallery" 
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)` 
      }}>
      {columnsArray.map((columnImages, columnIndex) => (
        <div key={columnIndex} className="image-column">
          {columnImages.map((image, imageIndex) => (
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