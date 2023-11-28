import React, { useEffect } from 'react'

function EtherBalance() {
   const [balance,setBalance]=useState("")

   useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=balance&address=0x382b4ca2c4a7cd28c1c400c69d81ec2b2637f7dd&tag=latest&apikey=${process.env.API_KEY}`
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

    getData();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default EtherBalance

// XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8 






//    0x54Ee3616325be6611D3475BB1fa5ca706d54FE92
