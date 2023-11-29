import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search.jsx";
import EtherBalance from "./components/EtherBalance.jsx";
import InternalTransaction from "./components/InternalTransaction.jsx";
import NormalTransaction from "./components/NormalTransaction.jsx";
import Profile from "./components/Profile.jsx";


function App() {


  return (
    <div className="bg-gradient-to-l from-purple-400 via-puple-300 to-purple-200 overflow-hidden h-screen">
      <Header />
      <Search />
      <Profile/>
      <EtherBalance/>
      <NormalTransaction/>
{/* 
 <InternalTransaction/> */}


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
