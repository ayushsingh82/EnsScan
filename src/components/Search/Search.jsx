
import React,{useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import { createClient, cacheExchange, fetchExchange } from "@urql/core";

function Search() {

  const [inputValue,setInputValue]=useState('');
  const [domains, setDomains] = useState([]);
  const QueryURL = "https://api.thegraph.com/subgraphs/name/ensdomains/ens";

  const client = createClient({
    url: QueryURL,
    exchanges: [cacheExchange, fetchExchange],
  });

//   const query = `
// query {
//   domains(first:2) {
//     id
//     name
//   }
// }
// `;

const query = `
query {
  domains(where:{name:"vitalik.eth"}) {
    id
  }
}
`;

  useEffect(() => {
    const getDomains = async () => {
      const { data } = await client.query(query).toPromise();
      console.log(data);
      setDomains(data.domains);
    };
    getDomains();
  }, []);

  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
     console.log(e.target.value)
  }

  const handleSearch = () => {
    console.log('Search clicked with value:', inputValue);
  };


  
  return (
    <>
    <div className='mt-[60px] flex justify-between  rounded-xl border-solid border-2 
    h-[60px] p-[10px] w-[400px] mx-auto bg-slate-200 '>

    <div className='w-[400px] border border-transparent hover:border-slate-800 mr-[10px]  rounded-xl  h-[40px] flex
     hover:border-solid hover:border-2 font-medium text-lg px-[10px] '>
       <input
    className='h-[40px] w-[300px] overflow-hidden focus:outline-none bg-transparent'
        type="text"
        id="myInput"
        value={inputValue}
        placeholder='Type- name.eth'
        onChange={handleInputChange}   
          />
      <div className='flex items-center mr-[5px] text-slate-800'>
      <button onClick={handleSearch}>
            <FaSearch size={30} />
          </button>
      </div>
    </div>  
    </div>

      <div className='text-slate-800 text-3xl mt-[40px]'>
      <div>Hello</div>
      {
        domains!==null && domains.length>0 &&
          domains.map((domain,index)=>{
            <div key={index}>{domain.id}</div>
          })
       }
      </div>
     
      </>
    
  )
}

export default Search

  // const [selectedOption, setSelectedOption] = useState('All Filters');

  // const handleOptionChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };



    {/* <div className='w-[200px] border border-transparent hover:border-slate-800 mr-[10px] rounded-xl h-[40px]
    hover:border-solid hover:border-2'>
    
    <select value={selectedOption} onChange={handleOptionChange}
    className='h-[40px] w-[150px] overflow-hidden focus:outline-none bg-transparent font-medium text-lg'>
        <option value="All">All Filters</option>
        <option value="Option1">Addresses</option>
        <option value="Option2">Tokens</option>
        <option value="Option3">Domain Names</option>   
      </select>
    </div> */}
