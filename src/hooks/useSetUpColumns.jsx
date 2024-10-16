import {useState, useEffect} from "react";

export const useSetUpColumns = () => {
  const [columns, setColumns] = useState(1); // Start with one column by default

  // Function to adjust columns based on screen width
  const updateColumns = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 688) {
      setColumns(1); // Mobile 
    } else if (screenWidth >= 688 && screenWidth < 1167) {
      setColumns(2); // Tablet 
    } else if (screenWidth >= 1167 && screenWidth < 1549) {
      setColumns(3); // Small desktop
    } else if (screenWidth >= 1549 && screenWidth < 1928) {
      setColumns(4); // Medium desktop
    } else {
      setColumns(5); // Large desktop
    }
  };

  useEffect(() => {
    // Set initial column count based on window width
    updateColumns();
  
    // Add event listener to handle window resizing
    window.addEventListener('resize', updateColumns);

  // Cleanup the event listener on component destroyed
  return () => window.removeEventListener('resize', updateColumns);
  }, []); // Empty dependency array means this will run on create/destroy

  return columns;
}
