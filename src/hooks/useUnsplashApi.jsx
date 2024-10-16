import {useState, useEffect} from "react";

export const useUnsplashApi = () => {
  // states to store the fetched data
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // use useEffect to fetch data when the Gallery component mounts (loads / is created)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // fetch data from Unsplash API
        const response = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_CLIENT_ID}&query=cat&collections=animals`
        );
        // Handle if the response isn't ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // store the fetched data in state
        setImages(data.results);
      } catch (err) {
        // handle any errors
        setError(err.message);
      } finally {
        // whether the fetch was successful or not, stop loading
        setLoading(false);
      }
    };

    fetchImages();
  }, []); // empty dependency array means this runs once when component mounts

  // render the component
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return images;
}