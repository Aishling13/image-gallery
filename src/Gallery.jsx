import { Image } from "./components/image" // Import the Image component
import { IMAGE_URLS } from "./constants" // Import the array of URLs

export function Gallery() {
  // function to get a random image URL from the array
  const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * IMAGE_URLS.length)
  return IMAGE_URLS[randomIndex]
  }

  return (
    <main className="image-gallery">
      <Image 
      imageUrl={getRandomImageUrl()} 
      altText={`Random Image`}
      size={300}
      />
      <Image 
      imageUrl={getRandomImageUrl()} 
      altText={`Random Image`}
      size={300}
      />
      {/* <div className="image-wrapper">
      </div> */}
    </main>
  )
}
