import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search.jsx";
import EtherBalance from "./components/EtherBalance.jsx";
import InternalTransaction from "./components/InternalTransaction.jsx";
import NormalTransaction from "./components/NormalTransaction.jsx";
// import Profile from "./components/Profile.jsx";


function App() {
  // bg-gradient-to-l from-purple-400 via-puple-300 to-purple-200
  const [address, setAdrress] = useState(null);
  if(address){
    console.log(address)
  }

  const [profile,setProfile]=useState('balan');
  
  const handleUserChange=()=>{
    setProfile('balan');
   }

   const handleOp1Change=()=>{
    setProfile('normal');
   }

   const handleOp2Change=()=>{
    setProfile('internal')
   }

  
  return (
    <div className=" overflow-hidden  style={{color:#cec8ef }}">
      <Header />
      <Search callback={setAdrress}/>

      <div className='mt-[40px] h-[70px] border-2 border-transparent flex justify-center items-center shadow-sm'>
      <div className='ml-[30px] mr-[30px] bg-purple-300 w-2/3 border border-transparent rounded-xl'>
        <fieldset id='switch' className='radio'>
        <div className='flex justify-between'>

         <div className='ml-[30px]'>
          <input name='switch' id='balan' type='radio'
           onChange={handleUserChange}

           />
         <label for="balan" className='text-xl text-slate-800 font-medium'>Balance</label>
         </div>

        <div>
          <input name='switch' id='normal' type='radio' 
          onChange={handleOp1Change}

          />
          <label for="normal" className='text-xl text-slate-800 font-medium'>Normal Txn</label>
          </div>

          <div className='mr-[30px]'>
          <input name='switch' id='internal' type='radio'
           onChange={handleOp2Change}
           />
          <label for="internal" className='text-xl text-slate-800 font-medium'>Internal Txn</label>
          </div>

          </div>
        </fieldset>
      </div>
      
    </div>

      {/* <Profile /> */}
     
      {profile === 'balan' ?  <EtherBalance address={address }/>: <></>}
      {profile === 'normal' ?  <NormalTransaction address={address }/>: <></>}
      {profile === 'internal' ?  <InternalTransaction address={address }/>: <></>}
      


      {/* <div className="mt-[40px]">
        {domains !== null &&
          domains.length > 0 &&
          domains.map((domain, index) => {
            return (
              <div className="mt-[80px] w-2/3 mx-auto border rounded-lg overflow-hidden border-transparent">
            
                <div class="overflow-x-auto bg-white dark:white">
                
                  <table class="min-w-full text-left text-sm whitespace-nowrap">
                  
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
            );
          })}
      </div> */}
    </div>
  );
}

export default App;

{/* <p className="text-2xl text-slate-800 font-medium">No Normal Transactions</p> */}

