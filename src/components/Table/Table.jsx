import React from 'react'

function Table() {
  return (
    <div>
       <div className='mt-[80px] w-2/3 mx-auto border rounded-lg overflow-hidden border-transparent'>
      {/* <!-- Table responsive wrapper --> */}
<div class="overflow-x-auto bg-white dark:white">

  {/* <!-- Table --> */}
  <table class="min-w-full text-left text-sm whitespace-nowrap">

    {/* <!-- Table head --> */}
    <thead class="uppercase tracking-wider border-b-2 bg-slate-300 border-t">
      <tr>
        <th scope="col" class="px-6 py-4 border-x ">
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
        </th>
      </tr>
    </thead>

    {/* <!-- Table body --> */}
    <tbody>

      <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
        <th scope="row" class="px-6 py-4 border-x bg-slate-300">
          Handbag
        </th>
        <td class="px-6 py-4 border-x ">$129.99</td>
        <td class="px-6 py-4 border-x ">30</td>
        <td class="px-6 py-4 border-x ">In Stock</td>
      </tr>

      <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
        <th scope="row" class="px-6 py-4 border-x bg-slate-300">
          Shoes
        </th>
        <td class="px-6 py-4 border-x ">$89.50</td>
        <td class="px-6 py-4 border-x ">25</td>
        <td class="px-6 py-4 border-x ">In Stock</td>
      </tr>

      <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
        <th scope="row" class="px-6 py-4 border-x bg-slate-300">
          Bedding Set
        </th>
        <td class="px-6 py-4 border-x">$69.99</td>
        <td class="px-6 py-4 border-x">40</td>
        <td class="px-6 py-4 border-x">In Stock</td>
      </tr>

      <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
        <th scope="row" class="px-6 py-4 border-x bg-slate-300">
          Dining Table
        </th>
        <td class="px-6 py-4 border-x ">$449.99</td>
        <td class="px-6 py-4 border-x ">5</td>
        <td class="px-6 py-4 border-x ">In Stock</td>
      </tr>

      <tr class="border-b border-neutral-600 hover:bg-slate-300 ">
        <th scope="row" class="px-6 py-4 border-x bg-slate-300">
          Soap Set
        </th>
        <td class="px-6 py-4 border-x ">$24.95</td>
        <td class="px-6 py-4 border-x ">50</td>
        <td class="px-6 py-4 border-x ">In Stock</td>
      </tr>

    </tbody>

  </table>

</div>
    </div>
    </div>
  )
}

export default Table
