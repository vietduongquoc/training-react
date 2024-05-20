import React, { useState, useEffect } from 'react';

function ExamUseEffect() {
    const [count, setCount] = useState(0);

    // Logic mounts component
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
        // Logic to run when count changes
        console.log(`Count changed: ${count}`);
        // Logic here will run after every render
    }, [count]); // Run only when count changes

    // Function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default ExamUseEffect;