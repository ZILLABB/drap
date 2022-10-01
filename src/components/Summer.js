import { data } from './data'
import React from 'react'

const Summer = () => {
  return (
    <div className="grid grid-cols-3 px-[180px] gap-[31px] mb-[152px] ">
      {data.map((datum, index) => (
        <div key={index}>
          <div className="mt-[20px]  ">
            <div>{datum.image}</div>
            <div className="text-[#1EA59A] text-[18px]">{datum.title}</div>
            <div>{datum.article}</div>
            <div className='text-[12px]'>{datum.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summer