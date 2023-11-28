import React, { useState, useEffect } from 'react';

function InternalTransaction() {
  const [transaction, setTransaction] = useState("");

  useEffect(() => {
    const getData1 = async () => {
      try {
        const response = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0x382b4ca2c4a7cd28c1c400c69d81ec2b2637f7dd&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.API_KEY}`
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

    getData1();
  }, []);

  return (
    <div>

    </div>
  );
}

export default InternalTransaction;

