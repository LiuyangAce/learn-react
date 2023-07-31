// 函数式组件
const App = () => {
  const [pokeman, setPokeman] = React.useState([])
  const [filterPokeman, setFilterPokeman] = React.useState([])

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(json => {
        setPokeman(json.results)
        setFilterPokeman(json.results)
      })
  }, [])

  const onChangeHandler = event => {
    const comparedPokeman = pokeman.filter(item => {
      return item.name.includes(event.target.value)
    })
    setFilterPokeman(comparedPokeman)
  }
  return (
    <div>
      <Ref></Ref>
      
      <br></br>
      ----------------------
      <br></br>

      <Memo>
        <NewContext.Provider></NewContext.Provider>
      </Memo>


      <h1>宝可梦</h1>
      <Input onChangeHandler={onChangeHandler}></Input>
      <Lists pokemanList={filterPokeman} ></Lists>
    </div>
  );
}

// class组件
// class App extends React.Component {
//   constructor() {
//     console.log('构造函数');
//     super();
//     this.state = {
//       pokeman: [],
//       // searching: '',
//       filterPokeman: []
//     };
//   }

  // componentDidMount() {
  //   console.log('组件已经挂载');
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState(
  //         () => {
  //           return {
  //             pokeman: json.results,
  //             filterPokeman: json.results
  //           }
  //         },
  //         () => {
  //           console.log(this.state)
  //         }
  //       )
  //     })
  // }
//   onChangeHandler = event => {
//     const comparedPokeman = this.state.pokeman.filter(item => {
//       return item.name.includes(event.target.value)
//     })
//     this.setState(
//       () => {
//         return {
//           filterPokeman: comparedPokeman
//         }
//       },
//       () => {
//         // console.log(this.state.searching);
//       }
//     )
//   }

//   render() {
//     console.log('渲染');

//     return (
//       <div>
//         <h1>宝可梦</h1>
//         <Input onChangeHandler = { this.onChangeHandler }></Input>
//         <Lists pokemanList = { this.state.filterPokeman } ></Lists>
//       </div>
//     );
//   }
// }