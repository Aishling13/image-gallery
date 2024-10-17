import { Image } from "./image.jsx"; 
import { useSetUpColumns } from "../hooks/useSetUpColumns.jsx";
import { useUnsplashApi } from "../hooks/useUnsplashApi.jsx";

export const Gallery = () => {
  const columns = useSetUpColumns();
  const images = useUnsplashApi();

  const columnsArray = [...new Array(columns)].map(() => []); 
  
  images.forEach((image, imageIndex) => {
    const columnIndex = imageIndex % columns; 
    columnsArray[columnIndex].push(image);
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