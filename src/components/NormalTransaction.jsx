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
    <div className='flex flex-col justify-center'>
    <div>
      <h2 className='text-slate-800 text-2xl font-medium bg-slate-300 mx-auto w-[300px] border rounded-xl border-transparent'>Internal Transactions</h2>
      </div>
      <div>
      {transactions.length>0 &&transactions.map((transaction) => (
        <div key={transaction.hash}>
          {/* <p>Block Number: {transaction.blockNumber}</p> */}

          <table class="min-w-full text-left text-sm whitespace-nowrap">

{/* <!-- Table head --> */}
<thead class="uppercase tracking-wider border-b-2 bg-slate-300 border-t">
  <tr>
    {/* <th scope="col" class="px-6 py-4 border-x ">
      Product
    </th>
    <th scope="col" class="px-6 py-4 border-x">
      Price
    </th>
    <th scope="col" class="px-6 py-4 border-x ">
      Stock
    </th>
    <th scope="col" class="px-6 py-4 border-x ">
      Status
    </th> */}
  </tr>
</thead>

{/* <!-- Table body --> */}
<tbody>

  <tr class="border-b border-neutral-600 hover:bg-slate-300]">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
      Block Number
    </th>
    <td class="px-6 py-4 border-x ">{transaction.blockNumber}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
      TimeStamp
    </th>
    <td class="px-6 py-4 border-x ">{transaction.timeStamp}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
     Hash
    </th>
    <td class="px-6 py-4 border-x">{transaction.hash}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
     From
    </th>
    <td class="px-6 py-4 border-x ">{transaction.from}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
     To
    </th>
    <td class="px-6 py-4 border-x ">{transaction.to}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
     Value
    </th>
    <td class="px-6 py-4 border-x ">{transaction.value}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
   Gas
    </th>
    <td class="px-6 py-4 border-x ">{transaction.gas}</td>
  </tr>

  <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
    <th scope="row" class="px-6 py-4 border-x bg-slate-300">
   Gas Price
    </th>
    <td class="px-6 py-4 border-x ">{transaction.gasPrice}</td>
  </tr>


</tbody>

</table>

          {/* <p>TimeStamp: {transaction.timeStamp}</p>
          <p>Hash: {transaction.hash}</p>
          <p>From: {transaction.from}</p>
          <p>To: {transaction.to}</p>
          <p>Value: {transaction.value}</p>
          <p>Gas: {transaction.gas}</p>
          <p>Gas Price: {transaction.gasPrice}</p> */}
        </div>
      ))}
  </div>

 

    </div>
  );
}

export default NormalTransaction;





