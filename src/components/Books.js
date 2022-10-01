import React from 'react'
import '../App.scss'

function Books({brands,className}) {
    return (
      <div className={className} >
        {brands.map(title => {
          return (
          <>
          <h2 key={title}>i'm a {title}</h2>
          </>
          );
        })}
      </div>
    );
  }

export default Books;