import React from "react";
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';

function App() {
  const [getinput, Setinput] = useState("")
  const [data, Setdata] = useState([])
  // console.log(getinput)

  const Additems = () => {
    if (!getinput) {
      alert("bhaf")
    }
    else {
      Setdata([...data,
      { items: getinput }
      ])
      Setinput(" ")
    }
  }

  const deleteitem = (indexnumber) => {
    console.log(indexnumber)
    const arr = data
    arr.splice(indexnumber, 1)
    Setdata([...arr])
  }
  const deleteall = () => {
    Setdata([])
  }

  return (
    <>
      <div className="header">
        <TextField id="standard-basic" value={getinput} onChange={(e) => Setinput(e.target.value)} label="Enter Items" variant="standard" />
        <FontAwesomeIcon className='addicon' onClick={Additems} icon={faPlus}  />
      </div>
      <div className="todoitems">
        {data.map((value, index) => {
          return (
            <div className="eachitems" key={index}>
              <span>
                {value.items}
              </span>
              <FontAwesomeIcon className='Deleteicon' onClick={() => { deleteitem(index) }} icon={faTrash} />

            </div>
          )
        })}
        <Button onClick={deleteall} variant="outlined" color="error">
          Delete All
        </Button>
      </div>
    </>
  );
}

export default App;
