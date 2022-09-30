import { data } from './data'
import React from 'react'

const Summer = () => {
  return (
    <div>
      {data.map((datum, index) => (
        <div key={index}>
          <div className="mt-[20px] grid grid-col-3  ">
            <div>{datum.image}</div>
            <div>{datum.title}</div>
            <div>{datum.article}</div>
            <div>{datum.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summer