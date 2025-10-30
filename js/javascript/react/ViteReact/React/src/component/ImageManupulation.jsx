import React, { useState } from 'react';

function ImageManipulation() {
  const [height, setheight] = useState(100);
  const [width, setwidth] = useState(100);
  
  return (
    <div>
      <h2>Image Manipulation</h2>
      <div style={{ border: '2px solid black', width, height, padding: '30px' }}>
        <img 
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7RW0BR3_Ft-IRliIbjL1xz2mcSsnNBYco-CHsVg7sr9OLB2fqdnT6V6QSgdgx8jGu5xnGUDkL18NetaHww14HMvJ-wAKxsY2THohGERW9_DI7FNN24EOlNg" 
          height={height} 
          width={width} 
          alt="example" 
        />
      </div>
      <button onClick={() => setheight(height + 50)}>Increase height</button>
      <button onClick={() => setheight(height - 50)}>Decrease height</button>
      <button onClick={() => setwidth(width + 50)}>Increase width</button>
      <button onClick={() => setwidth(width - 50)}>Decrease width</button>
    </div>
  );
}

export default ImageManipulation;
