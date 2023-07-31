const Memo = () => {
  console.log('num 前');
  const [num, useNum] = React.useState(0)
  console.log('num 后');

  // const [y, useY] = React.useState(0)

  const onClickHandle = (event) => {
    console.log(num);
    useNum(num + 1)
  }

  const computedY = React.useMemo(()=> {
    console.log('in useMemo');
    return num * 2
  }, [num])


  return (
    <>
      {console.log('渲染')}
      <div onClick={onClickHandle}>x:{num}</div>
      y:{computedY}
    </>
  )
}