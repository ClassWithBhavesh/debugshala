// import React, { useEffect, useRef, useState } from 'react';
// import './RotatingText.css';

// const RotatingText = () => {
//   const words = ['awesome.', 'beautiful.', 'creative.', 'fabulous.', 'interesting.'];
//   const colors = ['#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#f1c40f'];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const maxWordIndex = words.length - 1;
//   const wordRefs = useRef([]);

//   useEffect(() => {
//     // Initialize letters for each word
//     wordRefs.current.forEach((wordRef, index) => {
//       if (wordRef) {
//         const letters = words[index].split('');
//         wordRef.innerHTML = ''; // Clear existing content
//         letters.forEach((letter) => {
//           const span = document.createElement('span');
//           span.textContent = letter;
//           span.className = 'letter';
//           wordRef.appendChild(span);
//         });
//       }
//     });

//     // Show the first word
//     if (wordRefs.current[0]) {
//       wordRefs.current[0].style.opacity = '1';
//     }

//     const rotateText = () => {
//       const currentWord = wordRefs.current[currentWordIndex];
//       const nextWord =
//         currentWordIndex === maxWordIndex
//           ? wordRefs.current[0]
//           : wordRefs.current[currentWordIndex + 1];

//       // Rotate out letters of current word
//       Array.from(currentWord.children).forEach((letter, i) => {
//         setTimeout(() => {
//           letter.className = 'letter out';
//         // letter.classList.add('out');
//         }, i * 80);
//       });

//       // After some time, reset the opacity of the current word
//     //   setTimeout(() => {
//     //     currentWord.style.opacity = '0';
//     //   }, 500);

//       // Reveal and rotate in letters of next word
//       nextWord.style.opacity = '1';
//       Array.from(nextWord.children).forEach((letter, i) => {
//         letter.className = 'letter behind';
//         // letter.classList.add('behind');
//         setTimeout(() => {
//           letter.className = 'letter in';
//         // letter.classList.remove('behind');
//         // letter.classList.add('in');
//         }, 340 + i * 80);
//       });

//       // Update the current word index
//       setCurrentWordIndex((prevIndex) => (prevIndex === maxWordIndex ? 0 : prevIndex + 1));
//     };

//     // Start the rotation
//     const interval = setInterval(rotateText, 4000);

//     // Cleanup on unmount
//     return () => clearInterval(interval);
//   }, [currentWordIndex, maxWordIndex, words]);

//   return (
//     <div className="rotating-text">
//       <p>CSS Animation is </p>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             className={`word w-${index + 1}`}
//             ref={(el) => (wordRefs.current[index] = el)}
//             style={{ color: colors[index], position: 'absolute', opacity: 0 }}
//           ></span>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default RotatingText;









// RotatingText.jsx
import React, { useEffect, useRef, useState } from 'react';
// import './style.css';
import './RotatingText.css';

const RotatingText = () => {
  const words = ['MERN_Stack_Developer', 'Data_Scientist', 'Data_Analyst', 'AI_Engineer', 'Java_Web_Developer'];
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#f1c40f'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const maxWordIndex = words.length - 1;
  const wordRefs = useRef([]);
  const currentWordIndexRef = useRef(currentWordIndex);

  useEffect(() => {
    currentWordIndexRef.current = currentWordIndex;
  }, [currentWordIndex]);

  useEffect(() => {
    // Initialize letters for each word
    wordRefs.current.forEach((wordRef, index) => {
      if (wordRef) {
        const letters = words[index].split('');
        wordRef.innerHTML = ''; // Clear existing content
        letters.forEach((letter) => {
          const span = document.createElement('span');
          span.textContent = letter;
          span.className = 'letter';
          wordRef.appendChild(span);
        });
      }
    });

    // Show the first word
    if (wordRefs.current[0]) {
      wordRefs.current[0].style.opacity = '1';
    }

    const rotateText = () => {
      const currentIndex = currentWordIndexRef.current;
      const currentWord = wordRefs.current[currentIndex];
      const nextIndex = currentIndex === maxWordIndex ? 0 : currentIndex + 1;
      const nextWord = wordRefs.current[nextIndex];

      // Rotate out letters of current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.classList.add('out');
        }, i * 80);
      });

      // After rotating out, set opacity to 0
      const rotateOutDuration = words[currentIndex].length * 80 + 100; // Adding buffer
      setTimeout(() => {
        if (currentWord) {
          currentWord.style.opacity = '0';
          // Remove 'out' class to reset for next time
          Array.from(currentWord.children).forEach((letter) => {
            letter.classList.remove('out');
          });
        }
      }, rotateOutDuration);

      // Reveal and rotate in letters of next word
      if (nextWord) {
        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter, i) => {
          letter.classList.add('behind');
          setTimeout(() => {
            letter.classList.remove('behind');
            letter.classList.add('in');
          }, 340 + i * 80);
        });

        // After rotating in, remove 'in' class to reset for next rotation
        const rotateInDuration = words[nextIndex].length * 80 + 500; // Adding buffer
        setTimeout(() => {
          if (nextWord) {
            Array.from(nextWord.children).forEach((letter) => {
              letter.classList.remove('in');
            });
          }
        }, rotateInDuration);
      }

      // Update the current word index
      setCurrentWordIndex(nextIndex);
    };

    // Start the rotation
    const interval = setInterval(rotateText, 4000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [maxWordIndex]);

  return (
    <>
      <p className="word-container">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word w-${index + 1}`}
            ref={(el) => (wordRefs.current[index] = el)}
            style={{ color: '#ffffff', position: 'absolute', opacity: 0 }}
          ></span>
        ))}
      </p>
    </>
  );
};

export default RotatingText;
