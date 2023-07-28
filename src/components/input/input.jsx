const Input = (props) => {
  const { onChangeHandler } = props

  return (
    <input type="search" onChange={onChangeHandler}></input>
  )
}

// class Input extends React.Component {
//   render() {
//     console.log('Input组件渲染');
//     console.log(this.props);
//     const { onChangeHandler } = this.props
//     return (
//       <input type="search" onChange={onChangeHandler}></input>
//     );
//   }
// }