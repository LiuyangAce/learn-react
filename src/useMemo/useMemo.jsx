const Memo = () => {
  console.log('num 前');
  const [num, useNum] = React.useState(0)
  console.log('num 后');

  const onClickHandle = (event) => {
    console.log(num);
    useNum(num + 1)
  }

  const computedY = React.useMemo(()=> {
    console.log('in useMemo');
    return num * 2
  }, [num])

  const newVal = React.useContext(NewContext)
  console.log('newVal:',newVal);

  return (
    <>
      {newVal}
      {console.log('渲染')}
      <div onClick={onClickHandle}>x:{num}</div>
      y:{computedY}
    </>
  )
}