import React, { useState, useEffect } from 'react';

function InternalTransaction(props) {
  const [txns, setTxns] = useState([]);

  useEffect(() => {
    const getData2 = async () => {
      try {
        const response = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0xa4fadaa5e8577fee5799e2bd9615014013b45c5d&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        // Assuming the API response has a 'result' field containing the transactions
        setTxns(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData2();
  }, [props.address]);

  console.log('Transactions:', txns);

  return (
    <div className='flex flex-col justify-center mt-[40px]'>
      <div>
        <h2 className='text-slate-800 text-2xl font-medium bg-slate-300 mx-auto w-[300px] border rounded-xl border-transparent'>
          Internal Transactions
        </h2>
      </div>

      <div>
        {txns.length > 0 ? (
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
                  Gas Used
                </th>
              </tr>
            </thead>
            <tbody>
              {txns.map((txn) => (
                <tr key={txn.hash} className="border-b border-neutral-600 hover:bg-slate-300">
                  <td className="px-6 py-4 border-x">{txn.blockNumber}</td>
                  <td className="px-6 py-4 border-x">{txn.timeStamp}</td>
                  <td className="px-6 py-4 border-x">{txn.hash}</td>
                  <td className="px-6 py-4 border-x">{txn.from}</td>
                  <td className="px-6 py-4 border-x">{txn.to}</td>
                  <td className="px-6 py-4 border-x">{txn.value}</td>
                  <td className="px-6 py-4 border-x">{txn.gas}</td>
                  <td className="px-6 py-4 border-x">{txn.gasUsed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-slate-800 mt-[30px] font-medium text-2xl'>OOPS! No transactions available.</p>
        )}
      </div>
    </div>
  );
}

export default InternalTransaction;
