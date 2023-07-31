import { useRef } from 'react';
import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default function PageA() {
  const inputRef =  useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }
  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
