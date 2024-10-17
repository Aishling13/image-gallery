import {useState, useEffect} from "react";

export const useSetUpColumns = () => {
  const [columns, setColumns] = useState(1); 

  const updateColumns = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 688) {
      setColumns(1); 
    } else if (screenWidth >= 688 && screenWidth < 1167) {
      setColumns(2); 
    } else if (screenWidth >= 1167 && screenWidth < 1549) {
      setColumns(3); 
    } else if (screenWidth >= 1549 && screenWidth < 1928) {
      setColumns(4); 
    } else {
      setColumns(5); 
    }
  };

  useEffect(() => {
    updateColumns();
  
    window.addEventListener('resize', updateColumns);

  return () => window.removeEventListener('resize', updateColumns);
  }, []); 

  return columns;
}
