import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);

  const selectedRef = useRef(null)


  const handleClick = () => {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    }); 
  }

  return (
    <>
      <nav>
        <button onClick={handleClick}>
          下一个
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                ref={index === i ? selectedRef : null}
                src={cat.imageUrl}
                alt={'猫猫 #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}



