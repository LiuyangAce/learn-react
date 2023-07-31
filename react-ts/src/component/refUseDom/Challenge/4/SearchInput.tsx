import { forwardRef } from "react";

const SearchInput = forwardRef((props, ref)  => {
  console.log(1111,ref);
  return (
    <input
      {...props}
      placeholder="找什么呢？"
      ref={ref}
    />
  );
})

export default SearchInput
