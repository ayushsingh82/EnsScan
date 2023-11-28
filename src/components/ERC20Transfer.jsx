import React, { useState } from 'react'

function ERC20Transfer() {
const [transfer,setTransfer]=useState([])

useEffect(() => {
  const getData2 = async () => {
    try {
      const response = await fetch(
`https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&txhash=0xb730ee4dc8d0274be31d1e31ed7fe9749d7a67c0e35b297f3c2d10b06c1f6f1e&apikey=${process.env.API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  getData2();
}, []);

  return (
    <div>
      
    </div>
  )
}

export default ERC20Transfer
