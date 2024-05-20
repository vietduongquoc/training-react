
import React, { useState, useEffect } from 'react';

function ExamUseEffect() {
  const [count, setCount] = useState(0);

  // Logic  mounts component
  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function for unmounting logic
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means run only on mount

  // Logic updates component
  useEffect(() => {
    console.log('Component updated');

    // Logic here will run after every render
  });

  return (
    <div>
      <p>Số đếm: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tang len 1</button>
    </div>
  );
}

export default ExamUseEffect;