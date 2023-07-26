import { useState ,useEffect} from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = ()=>{
  console.log('render');
  const [searchField, setsearchField] = useState('');
  const [monesters, setmonesters] = useState([]);
  const [filteredMonesters, setfilteredMonesters] = useState([monesters]);
  //console.log({searchField})

  useEffect(()=>{
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setmonesters(users))
  },[]);
  
  useEffect(()=>{
    console.log('using effect')
    const newfilteredMonesters = monesters.filter((monester)=>{
      return monester.name.toLocaleLowerCase().includes(searchField);
    });
    setfilteredMonesters(newfilteredMonesters);
  }
  ,[monesters,searchField]);


  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  }

  return (
    <div className="App">
        <h1 className='app-title'>Monesters Rolodex</h1>

          <SearchBox 
          className='search-box'
          placeholder='search monesters'
          onSearchHandler = {onSearchChange}
          />
          <CardList monesters={filteredMonesters}/>
      </div>
  )
}


// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monesters:[],
//       searchField : ''
//     }
//     // console.log('constructor');
//   }
//   //for fetching data from api
//   componentDidMount(){
//     // console.log('componentDidMount');
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           ()=>{
//           return {monesters:users};
//         },
//         ()=>{
//           // console.log(this.state)
//         })
//       )
//   }

//   onSearchChange = (event)=>{
//     //console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchField};
//     })

//    }

//   render(){
//     // console.log('render');

//     const {monesters , searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonesters = monesters.filter((monester)=>{
//       return monester.name.toLocaleLowerCase().includes(searchField);
//   });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monesters Box</h1>

//           <SearchBox 
//           className='search-box'
//           placeholder='search monesters'
//           onSearchHandler = {this.onSearchChange}
//           />
//           <CardList monesters={filteredMonesters}/>
//       </div>
//     );
//   }
// }

export default App;