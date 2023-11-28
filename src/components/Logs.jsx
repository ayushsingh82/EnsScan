import React, { useState } from 'react'

function Logs() {
  
  const [log,setLog]=useState([])
  
   
// useEffect(() => {
//   const getData3 = async () => {
//     try {
//       const response = await fetch(
// `https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&txhash=0xb730ee4dc8d0274be31d1e31ed7fe9749d7a67c0e35b297f3c2d10b06c1f6f1e&apikey=${process.env.API_KEY}`
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   getData3();
// }, []);

  return (
    <div>
      
    </div>
  )
}

export default Logs
