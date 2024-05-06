// import { useState, useRef, useEffect } from 'react';
// <childComponent name='jonll' age={12} />
// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

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


import React, { useEffect, useState } from 'react';

function Example() {
  
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Gọi sau mỗi lần component được render
    document.title = `You clicked ${count} times`;
  }, [count]); // useEffect chỉ được gọi lại nếu count thay đổi
  console.log(1231);
  return (
    
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    
  );
  
}

export default Example;
