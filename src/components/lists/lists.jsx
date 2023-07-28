const Lists = ( props ) => {
  const { pokemanList } = props;
  const colorCss = {
    color:'red'
  }

  return (
    <ul className="ul-contain">
      {pokemanList.map((item, index) => (
        <div key={item.url}>
          <li>{item.name}</li>
          <div style={colorCss}>{index + 1}</div>
        </div>
      ))}
    </ul>
  );
};
// class Lists extends React.Component {
//   render() {
//     console.log("Lists组件渲染");
//     console.log(this.props);
//     const { pokemanList } = this.props;
//     const colorCss = {
//       color:'red'
//     }

//     return (
//       <ul className="ul-contain">
//         {pokemanList.map((item, index) => (
//           <div key={item.url}>
//             <li>{item.name}</li>
//             <div style={ colorCss }>{index + 1}</div>
//           </div>
//         ))}
//       </ul>
//     );
//   }
// }
