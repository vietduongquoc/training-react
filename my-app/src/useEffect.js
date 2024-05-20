// import { useState, useRef, useEffect } from 'react';
// <childComponent name='jonll' age={12} />
// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

// import { useState } from "react";

//   useEffect(() => {
//     if (isPlaying) {
//       console.log('Calling video.play()');
//       ref.current.play();
//     } else {
//       console.log('Calling video.pause()');
//       ref.current.pause();
//     }
//   });

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState('');
//   function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <Welcome name="John" />
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';

// function Example() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Gọi sau mỗi lần component được render
//     document.title = `You clicked ${count} times`;
//   }, [count]); // useEffect chỉ được gọi lại nếu count thay đổi
//   console.log(1231);
//   return (

//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>

//   );

// }

// export default Example;

// import { useState } from "react";

// import { useEffect, useState } from 'react';


// //1. useEffect(callback)
// //- Gọi callback mỗi khi components re-render
// //- Gọi callback sau khi components thêm element vào DOM
// //2. useEffect(callback, [])
// //3. useEffect(callback, [deps])
// //////
// //1,2,3. Callback luon được gọi khi component mounted


// function Content() {

//   const [title, setTitle] = useState('')

//   useEffect(() => {
//     document.title = title
//   })
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {

//     const handleResize = () => {
//       setWidth(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)

//     return (
//       window.removeEventListener('resize', handleResize)
//     )
//   }, [])

//   return (
//     <div>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <h1 style={{ textAlign: 'center' }}>{width}</h1>
//     </div>
//   )

// }

// export default Content;


import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Logic when component mounts
  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function for unmounting logic
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means run only on mount

  // Logic when component updates
  useEffect(() => {
    console.log('Component updated');
    // Logic here will run after every render
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;