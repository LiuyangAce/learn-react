// export default function CatFriends() {
//   const itemsRef = useRef(null);

//   function scrollToId(itemId) {
//     const map = getMap();
//     const node = map.get(itemId);
//     node.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function getMap() {
//     if (!itemsRef.current) {
//       // 首次运行时初始化 Map。
//       itemsRef.current = new Map();
//     }
//     return itemsRef.current;
//   }

//   console.log(itemsRef);
//   return (
//     <>
//       <nav>
//         <button onClick={() => scrollToId(0)}>
//           Tom
//         </button>
//         <button onClick={() => scrollToId(5)}>
//           Maru
//         </button>
//         <button onClick={() => scrollToId(9)}>
//           Jellylorum
//         </button>
//       </nav>
//       <div>
//         <ul>
//           {catList.map(cat => (
//             <li
//               key={cat.id}
//               ref={(node) => {
//                 const map = getMap();
//                 if (node) {
//                   map.set(cat.id, node);
//                 } else {
//                   map.delete(cat.id);
//                 }
//               }}
//             >
//               <img
//                 src={cat.imageUrl}
//                 alt={'Cat #' + cat.id}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: 'https://placekitten.com/250/200?image=' + i
//   });
// }

import { forwardRef, useRef } from 'react';
import MyInput from './MyInput.tsx';


export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log('in focus1');
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}

