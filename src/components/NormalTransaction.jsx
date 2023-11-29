import React, { useState, useEffect } from 'react';

function NormalTransaction(props) {
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

        setTransactions(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData1();
  }, [props.address]);

  return (
    <div className='flex flex-col justify-center mt-[40px]'>
      <div>
        <h2 className='text-slate-800 text-2xl font-medium bg-slate-300 mx-auto w-[300px] border rounded-xl border-transparent'>
          Internal Transactions
        </h2>
      </div>
      <div>
        {transactions.length > 0 ? (
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 bg-slate-300 border-t">
              <tr>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  Block Number
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  TimeStamp
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  Hash
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  From
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  To
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  Value
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  Gas
                </th>
                <th scope="col" className="px-6 py-4 border-x bg-slate-300">
                  Gas Price
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.hash} className="border-b border-neutral-600 hover:bg-slate-300">
                  <td className="px-6 py-4 border-x">{transaction.blockNumber}</td>
                  <td className="px-6 py-4 border-x">{transaction.timeStamp}</td>
                  <td className="px-6 py-4 border-x">{transaction.hash}</td>
                  <td className="px-6 py-4 border-x">{transaction.from}</td>
                  <td className="px-6 py-4 border-x">{transaction.to}</td>
                  <td className="px-6 py-4 border-x">{transaction.value}</td>
                  <td className="px-6 py-4 border-x">{transaction.gas}</td>
                  <td className="px-6 py-4 border-x">{transaction.gasPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-slate-800 mt-[30px] font-medium text-2xl'>No transactions available.</p>
        )}
      </div>
    </div>
  );
}

export default NormalTransaction;