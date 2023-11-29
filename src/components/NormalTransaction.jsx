import React, { useState, useEffect } from 'react';

function NormalTransaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getData1 = async () => {
      try {
        const response = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0x382b4CA2C4a7cD28c1c400C69d81ec2b2637f7dD&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Assuming the API response has a 'result' field containing the transactions
        setTransactions(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData1();
  }, []);

  return (
    <div>
      <h2>Internal Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.hash}>
          <p>Block Number: {transaction.blockNumber}</p>
          <p>TimeStamp: {transaction.timeStamp}</p>
          <p>Hash: {transaction.hash}</p>
          <p>From: {transaction.from}</p>
          <p>To: {transaction.to}</p>
          <p>Value: {transaction.value}</p>
          <p>Gas: {transaction.gas}</p>
          <p>Gas Price: {transaction.gasPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default NormalTransaction;





