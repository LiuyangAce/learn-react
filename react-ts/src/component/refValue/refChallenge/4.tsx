import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  // 禁用
  // const [isDisabled, setIsDisabled] = useState(false);

  const textRef = useRef('')

  function handleSend() {
    // setIsDisabled(true)

    console.log('触发');
    setTimeout(() => {
      alert('正在发送：' + textRef.current);
    }, 3000);
  }

  function handleInputChange(e) {
    textRef.current = e.target.value
    setText(e.target.value)
  }

  return (
    <>
      <input
        // disabled={isDisabled}
        value={text}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSend}>
        发送
      </button>
    </>
  );
}
