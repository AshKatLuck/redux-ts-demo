import { useState } from "react";
import { useActions } from "../state/hooks";
import { useTypedSelector } from "../state/hooks/useTypedSelector";

const RepositoriesList:React.FC=()=>{
    const [term, setTerm]=useState('');
    const {searchRepositories}=useActions();
    // const state=useSelector((state:any)=>state);
    // const state=useSelector((state:any)=>state.repositories)
    const {data, loading, error}=useTypedSelector((state)=>state.repositories);
       
    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        searchRepositories(term)
        
    }
    return<div>
        <form onSubmit={onSubmit}>
            <input onChange={(e)=>setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error&&<h3>{error}</h3>}
        {loading&&<h3>Loading..</h3>}
        {!error && !loading &&
        data.map((name)=><div key={name}>{name}</div>)}
    </div> 
}

export default RepositoriesList;