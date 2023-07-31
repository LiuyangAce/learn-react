import { useRef } from "react";

export default function Page() {
  const inputRef = useRef(null)
  function handleClick() {
    inputRef.current.focus()
  }
  return (
    <>
      <nav>
        <button onClick={ handleClick }>搜索</button>
      </nav>
      <input
        ref={inputRef}
        placeholder="找什么呢？"
      />
    </>
  );
}
