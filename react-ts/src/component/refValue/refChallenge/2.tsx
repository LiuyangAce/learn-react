import { useRef, useState } from 'react';

export default function Toggle() {
  // useRef返回的数据不会让组件重新渲染 提交
  // const isOnRef = useRef(false);
  const [isOnRef, useIsOnRef] = useState(false)

  return (
    <button onClick={() => {
      // isOnRef.current = !isOnRef.current;
      useIsOnRef(!isOnRef)
    }}>
      {/* {isOnRef.current ? '开' : '关'} */}
      {isOnRef ? '开' : '关'}
    </button>
  );
}