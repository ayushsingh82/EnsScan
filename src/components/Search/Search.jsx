
import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  const [inputValue,setInputValue]=useState('');

  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
     console.log(e.target.value)
  }

  const handleSearch = () => {
    // Call your data search function here using the inputValue
    console.log('Search clicked with value:', inputValue);
    // Replace the above line with the actual function to fetch data
    // For example, you can use an API call or perform a search operation here
  };

  const [selectedOption, setSelectedOption] = useState('All Filters');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  return (
    <div className='mt-[60px] flex justify-between  rounded-xl border-solid border-2 
    h-[60px] p-[10px] w-[600px] mx-auto bg-slate-200 '>

    <div className='w-[200px] border border-transparent hover:border-slate-800 mr-[10px] rounded-xl h-[40px]
    hover:border-solid hover:border-2'>
    
    <select value={selectedOption} onChange={handleOptionChange}
    className='h-[40px] w-[150px] overflow-hidden focus:outline-none bg-transparent font-medium text-lg'>
        <option value="All">All Filters</option>
        <option value="Option1">Addresses</option>
        <option value="Option2">Tokens</option>
        <option value="Option3">Domain Names</option>   
      </select>
    </div>

    <div className='w-[400px] border border-transparent hover:border-slate-800 mr-[10px]  rounded-xl  h-[40px] flex
     hover:border-solid hover:border-2 font-medium text-lg px-[10px] '>
       <input
    className='h-[40px] w-[300px] overflow-hidden focus:outline-none bg-transparent'
        type="text"
        id="myInput"
        value={inputValue}
        placeholder='Type Something'
        onChange={handleInputChange}   
          />
      <div className='flex items-center mr-[5px] text-slate-800'>
      <button onClick={handleSearch}>
            <FaSearch size={30} />
          </button>
      </div>
    </div>
  
    </div>
    
  )
}

export default Search