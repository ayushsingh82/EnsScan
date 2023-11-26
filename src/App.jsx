import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search.jsx'
// import Table from './components/Table/Table'

import { createClient, cacheExchange, fetchExchange } from '@urql/core'


function App() {
     const [domains,setDomains]=useState([])
  const QueryURL="https://api.thegraph.com/subgraphs/name/ensdomains/ens";

 
  const client=createClient({
    url:QueryURL,
    exchanges: [cacheExchange, fetchExchange]
  });

  
const query = `
query {
  domains(first:5) {
    id
    name
  }
}
`;



  useEffect(()=>{
    const getDomains=async()=>{
      const {data}=await client.query(query).toPromise();
      console.log(data)
      setDomains(data.domains);
    }
    getDomains();
  },[])


   
  return (
    <div className='bg-slate-800
    h-screen w-screen'>
     <Header/> 
     <Search/>
     {/* <Table/> */}
     <div className='mt-[40px]'>
        {
          domains!==null && domains.length>0 && domains.map((domain,index)=>{
            return(
              <div key={index} >
              <div>{domain.id}</div>
              <div>{domain.name}</div>
              </div>
            )
          })
        }
     </div>
    </div>
  )
}

export default App
