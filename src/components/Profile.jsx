import React, { useState } from 'react'
import NormalTransaction from './NormalTransaction'
import InternalTransaction from './InternalTransaction'
import EtherBalance from './EtherBalance'

function Profile() {
    const [profile,setProfile]=useState()

  return (
   
    <div className='mt-[40px] h-[70px] border-2 border-green-700 flex justify-center items-center'>
      <div className='ml-[30px] mr-[30px] bg-purple-300 w-2/3 border border-transparent rounded-xl'>
        <fieldset id='switch' className='radio'>
        <div className='flex justify-between'>

         <div className='ml-[30px]'>
          <input name='switch' id='' type='radio'/>
         <label className='text-xl text-slate-800 font-medium'>Balance</label>
         </div>

        <div>
          <input name='switch' id='' type='radio'/>
          <label className='text-xl text-slate-800 font-medium'>Normal</label>
          </div>

          <div className='mr-[30px]'>
          <input name='switch' id='' type='radio'/>
          <label className='text-xl text-slate-800 font-medium'>Internal</label>
          </div>


          </div>
        </fieldset>
      </div>

    </div>
    
  )
}

export default Profile

