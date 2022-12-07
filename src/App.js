import react,{useState,useEffect} from 'react';
import PokemonList from "./PokemonList"
import axios from 'axios'
import Pagination from './Pagination';
function App() {
  const [loading,setLoading]=useState(true)
  const [pokimon,setpokimon]=useState([])
  const [currenturl,setCurrenturl]=useState("https://pokeapi.co/api/v2/pokemon")
  const [nexturl,setNexturl]=useState()
  const [prevurl,setPrevurl]=useState()
  function gotoNextpage(){
      setCurrenturl(nexturl)
  }
  function gotoPrevpage(){
      setCurrenturl(prevurl)
        }
  
        useEffect(()=>{
          setLoading(true)
    axios.get(currenturl).then( res => {
      setLoading(false)
      setpokimon(res.data.results.map(p => p.name))
      setNexturl(res.data.next)
      setPrevurl(res.data.previous)
    })   
   },[currenturl])
   if (loading) return "loading"
  return (
    <>
  <PokemonList pokimon={pokimon}/>
  <Pagination 
  gotoNextpage={ nexturl ?  gotoNextpage:null}
  gotoPrevpage={prevurl ? gotoPrevpage:null}
  />
  </>
  );
}

export default App;
