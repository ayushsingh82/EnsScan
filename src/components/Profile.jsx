import React, { useState } from 'react'
import NormalTransaction from './NormalTransaction'
import InternalTransaction from './InternalTransaction'
import EtherBalance from './EtherBalance'

function Profile() {
    const [profile,setProfile]=useState()

  return (
   
    <div className='mt-[40px] h-[70px] border-2 border-transparent flex justify-center items-center shadow-sm'>
      <div className='ml-[30px] mr-[30px] bg-purple-300 w-2/3 border border-transparent rounded-xl'>
        <fieldset id='switch' className='radio'>
        <div className='flex justify-between'>

         <div className='ml-[30px]'>
          <input name='switch' id='' type='radio'/>
         <label className='text-xl text-slate-800 font-medium'>Balance</label>
         </div>

        <div>
          <input name='switch' id='' type='radio'/>
          <label className='text-xl text-slate-800 font-medium'>Normal Txn</label>
          </div>

          <div className='mr-[30px]'>
          <input name='switch' id='' type='radio'/>
          <label className='text-xl text-slate-800 font-medium'>Internal Txn</label>
          </div>


          </div>
        </fieldset>
      </div>

    </div>
    
  )
}

export default Profile

