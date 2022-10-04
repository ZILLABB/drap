import { data } from './data'
import React from 'react'

const Summer = () => {
  return (
    <div className='px-[30px]'>
      <h1 className='lg:pl-[180px] lg:mt-[150px] mt-[50px] text-[30px] '>Ruang Kerja di dekatmu</h1>
      <div className="grid lg:grid-cols-3 lg:px-[180px]  gap-[31px] mb-[152px] ">
        {data.map((datum, index) => (
          <div key={index}>
            <div className="mt-[20px]  ">
              <div >{datum.image}</div>
              <div className="text-[#1EA59A] text-[18px]">{datum.title}</div>
              <div>{datum.article}</div>
              <div className="text-[15px]">{datum.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summer