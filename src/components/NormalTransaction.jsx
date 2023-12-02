import React, { useState, useEffect } from 'react';
import { GrTransaction } from "react-icons/gr";

function NormalTransaction(props) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getData1 = async () => {
      try {
        if(props.address)
        {const response = await fetch(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${props.address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8`
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

        setTransactions(data.result);}
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData1();
  }, [props.address]);

  return (
    <div className='flex flex-col justify-center mt-[40px]'>
      <div>
        <h2 className='text-slate-800 text-2xl font-medium b mx-auto w-[300px] border rounded-xl border-transparent
          bg-gradient-to-r from-gray-100 to-gray-300
        hover:scale-110 transition-all duration-500 ease-in-out'>
         Normal Transactions
        </h2>
      </div>
      <div className='mt-[40px]'>
        {transactions.length > 0 ? (
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 bg-slate-300 border-t">
              <tr>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  Block Number
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  TimeStamp
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  Hash
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  From
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  To
                </th>
                {/* <th scope="col" className="px-6 py-4 border-x text-black bg-slate-300">
                  Value
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-slate-300">
                  Gas
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-slate-300">
                  Gas Price
                </th> */}
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.hash} className="border-b border-neutral-600   bg-gradient-to-r from-gray-100 to-gray-300 text-black ">
                  <td className="px-6 py-4 border-x font-medium ">{transaction.blockNumber}</td>
                  <td className="px-6 py-4 border-x font-medium">{transaction.timeStamp}</td>
                  <td className="px-6 py-4 border-x font-medium">{transaction.hash}</td>
                  <td className="px-6 py-4 border-x font-medium">{transaction.from}</td>
                  <td className="px-6 py-4 border-x font-medium">{transaction.to}</td>
                  {/* <td className="px-6 py-4 border-x font-medium">{transaction.value}</td>
                  <td className="px-6 py-4 border-x font-medium">{transaction.gas}</td>
                  <td className="px-6 py-4 border-x font-medium">{transaction.gasPrice}</td> */}
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

//almost done
