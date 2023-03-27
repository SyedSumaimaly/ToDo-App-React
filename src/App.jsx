import React, { useEffect } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Input } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faPenToSquare,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import { display } from "@mui/system";
import { text } from "@fortawesome/fontawesome-svg-core";
// import { isDisabled } from "@testing-library/user-event/dist/utils";

function App() {
  const [getinput, Setinput] = useState("");
  const [data, Setdata] = useState([]);
  const [edit, setedit] = useState("");
  const [done, setdone] = useState(false);
  const [check, setcheck] = useState("");
  const [checkval, setcheckval] = useState("");
  const [disabled, setdisabled] = useState(false);

  const Additems = () => {
    if (getinput === "") {
      swal("Sorry!", "Please Enter The Input Value First", "error");
    } else {
      Setdata([...data, { items: getinput, status: false }]);
      Setinput("");
      setdisabled("");
      // setcheck("");
    }
    // Setdata([...data, {items: edit}])
  };

  const deleteitem = (indexnumber) => {
    // console.log(indexnumber);
    const arr = data;
    arr.splice(indexnumber, 1);
    Setdata([...arr]);
  };

  const deleteall = () => {
    Setdata([]);
  };

  const handleEdit = (value, index) => {
    setedit(value.items);
    Setinput(value.items);
    const editarr = data;
    editarr.splice(value, 1);
    Setdata([...editarr]);

    console.log(data[index].status);

    if (!data[index].status) {
      setdisabled(" ");
    } else {
      setdisabled(" disabled");
    }
  };

  const handleDone = (value, index) => {
    data[index].status = !data[index].status;
    Setdata([...data]);

    if (data[index].status) {
      // console.log("hello")
      setdisabled(" disabled");
      setcheck("checked");
    } else {
      setcheck("");
      setdisabled("");
    }
  };

  return (
    <>
      <div className="header">
        <Input placeholder="Basic usage"
          color="secondary"
          id="standard-basic"
          className="basic"
          value={getinput}
          onChange={(e) => Setinput(e.target.value)}
          label="Enter Items"
          variant="standard"
          sx={{color:"white"}}
/>
        <FontAwesomeIcon className="addicon" onClick={Additems} icon={faPlus} />
      </div>
      <div className="todoitems">
        {data.map((value, index) => {
          return (
            <Box className="eachitems" key={index}>
              <div className="eachitems_sub">
                <p className={value.status && "checked"}>{value.items}</p>
              </div>
              <Box className="icons">
                <FontAwesomeIcon
                  className="Deleteicon"
                  onClick={() => {
                    deleteitem(index);
                  }}
                  icon={faTrash}
                  beatFade
                />

                <FontAwesomeIcon
                  shake
                  data-status="false"
                  className="Done hello"
                  onClick={() => {
                    handleDone(value, index);
                  }}
                  icon={faCircleCheck}
                />

                <FontAwesomeIcon
                  className={value.status ? "Edit disabled" : "Edit"}
                  onClick={() => {
                    handleEdit(value, index);
                  }}
                  shake
                  icon={faPenToSquare}
                />
              </Box>
            </Box>
          );
        })}
        <Button onClick={deleteall} variant="outlined" color="error">
          Delete All
        </Button>
      </div>
    </>
  );
}

export default App;
