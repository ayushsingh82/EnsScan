import React, { useState } from 'react'

function InternalTransaction(props) {

    const [txn,setTxn]=useState([])

  useEffect(() => {
    
    const getData2 = async () => {
      try {
        const response = await fetch(
    `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${props.address}&startblock=0&endblock=99999999&page=1 &offset=10&sort=asc&apikey=${process.env.API_KEY}`
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

export default InternalTransaction