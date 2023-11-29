import React, { useEffect, useState } from 'react';

function EtherBalance(props) {
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=balance&address=0x382b4ca2c4a7cd28c1c400c69d81ec2b2637f7dd&tag=latest&apikey=XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Set the balance state with the value from the 'result' field
        setBalance(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false after fetching, whether it was successful or not
        setLoading(false);
      }
    };

    getData();
  }, [props.address]); // Make sure to include props.address in the dependency array to trigger the effect when the address changes

  return (
    <div className='flex justify-center mt-[40px]'>
    <div className='text-2xl  text-slate-800 bg-purple-300 border rounded-xl border-transparent font-medium
    hover:scale-110 transition-all duration-500 ease-in-out'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Balance: {balance}</p>
      )}
    </div>
    </div>
  );
}

export default EtherBalance;




//    0x54Ee3616325be6611D3475BB1fa5ca706d54FE92
