import React from 'react'

export default function Pagination({gotoNextpage,gotoPrevpage}) {
  return (
    <div>
     { gotoNextpage &&<button onClick={gotoNextpage}>Next</button>}
     {gotoPrevpage && <button onClick={gotoPrevpage}>previous</button>}
    </div>
  )
}