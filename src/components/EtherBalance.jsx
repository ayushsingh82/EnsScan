import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { RiBankCardFill } from "react-icons/ri";

function EtherBalance(props) {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        if(props.address)
        {const response = await fetch(
          `https://api.etherscan.io/api?module=account&action=balance&address=${props.address}&tag=latest&apikey=XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        if(data.result === 'Max rate limit reached'){
          console.log("here")
          return
        }
        // Set the balance state with the value from the 'result' field
        setBalance((Number(data.result)/10**18));}
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
    <div className='flex justify-center mt-[40px] shadow-sm'>
    <div className='text-2xl  text-white
    bg-blue-600
     border rounded-xl border-transparent font-medium
    hover:scale-110 transition-all duration-500 ease-in-out py-[10px] px-[10px] flex'>
    <RiBankCardFill className='mr-[10px] mt-[7px]'/>
      {loading ? (
        <p><Loader/></p>
      ) : (
        <p>Balance: {balance} ETH</p>
      )}
    </div>
    </div>
  );
}

export default EtherBalance;



// bg-gradient-to-l from-purple-500 via-purple-200 to-purple-400
//    0x54Ee3616325be6611D3475BB1fa5ca706d54FE92
