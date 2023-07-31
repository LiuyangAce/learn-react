
import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // 只暴露 focus，没有别的
    focus() {
      console.log('in focus');
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

// function MyInput(props) {
//   return <input {...props} />;
// }

export default MyInput
