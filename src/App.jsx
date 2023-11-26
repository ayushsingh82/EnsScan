import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search.jsx'


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
  
     <div className='mt-[40px]'>
        {
          domains!==null && domains.length>0 && domains.map((domain,index)=>{
            return(
              
     <div className='mt-[80px] w-2/3 mx-auto border rounded-lg overflow-hidden border-transparent'>
      {/* <!-- Table responsive wrapper --> */}
<div class="overflow-x-auto bg-white dark:white">

  {/* <!-- Table --> */}
  <table class="min-w-full text-left text-sm whitespace-nowrap">

    {/* <!-- Table head --> */}
    <thead class="uppercase tracking-wider border-b-2 bg-slate-300 border-t">
      <tr>
       
        <th scope="col" class="px-6 py-4 border-x ">
       Name
        </th>
        <th scope="col" class="px-6 py-4 border-x ">
          ID
        </th>
      </tr>
    </thead>

    {/* <!-- Table body --> */}
    <tbody>

      <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
        <th scope="row" class="px-6 py-4 border-x bg-slate-300">
         {domain.name}
        </th>
        <td class="px-6 py-4 border-x ">{domain.id}</td>     
      </tr>

    </tbody>

  </table>

</div>
    </div>
            )
          })
        }
     </div>
    </div>
  )
}

export default App


