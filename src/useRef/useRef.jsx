const Ref = () => {
  const ref = React.useRef(0)
  const domRef = React.useRef(null)
  const buttonStyle = {
    display: 'block'
  }


  const numClickHandle = () => {
    console.log(ref.current);
    ref.current = ref.current + 1
    focksHandlealert(`点击了${ref.current}次`)
  }


  const focusHandle = () => {
    console.log('domRef:',domRef);
    domRef.current.focus()
  }


  return (
    <>
      <h3>useRef</h3>
      <button style={buttonStyle} onClick={numClickHandle}>点击</button>
      <span>次数：{ref.current}</span>

      {/* ref 获取dom */}
      <input ref={domRef} type="text" />
      <span onClick={focusHandle}>聚焦</span>
    </>
  );
};
