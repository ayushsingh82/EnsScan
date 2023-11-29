import React, { useEffect, useState } from 'react';

function EtherBalance(props) {
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=balance&address=${props.address}&tag=latest&apikey=${process.env.API_KEY}`
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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Balance: {balance}</p>
      )}
    </div>
  );
}

export default EtherBalance;




//    0x54Ee3616325be6611D3475BB1fa5ca706d54FE92
