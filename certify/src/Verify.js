import React from 'react';
import './Verify.css';
import axios from "axios";

import { useState , useEffect } from "react";
const propTypes = {};

const defaultProps = {};

const Verify = () => {
  const [filename1 , setfilename1] = useState("");
const [hash1 , sethash1] = useState("");
const [data , setdata] = useState("");
useEffect(()=>{
   axios.get("http://localhost:3004/allurls")
  .then((res)=> setdata(res.data))
  .catch(err => alert(err))
},[])

const handleSubmit = async (e) =>{
  e.preventDefault()
  let user = {
    filename:filename1,
    hash:hash1
  }
await axios.post("http://localhost:3004/add",user)
.then((res)=> alert(res.data) )
.catch(() => alert("Fill all fields"))

}
// const handleSubmit1 =  () =>{
 
//  axios.get("http://localhost:3004/allurls")
// .then((res)=> console.log(res.data))
// .catch(err => console.log(err))

// }
console.log(data);
    return (
    <>
    <div >
      <h1 className=" text-black"> SAVE TO DATABASE </h1>
      <label>
         <b className="text-black">File Name :</b> 
        <input type="text"  onChange={(e) => setfilename1(e.target.value)} placeholder="img 1.png" />
      </label>
      <p></p>
      <label>
      <b className="text-black">IPFS Hash:</b>
        <input type="text"  onChange={(e) => sethash1(e.target.value)} placeholder="Qmac....."/>
      </label>
      <br />
      <button className="button" onClick={handleSubmit}>Save to DB</button>
    <br />
    <br />

    
        <table class="table table-bordered table-dark ">
        <thead >
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">FILE NAME</th>
            <th scope="col">URL</th>
            <th scope="col">DOWNLOAD</th>
            <th scope="col">view</th>

          </tr>
        </thead>
        {data ? data.map((data, index) => (
        <tbody key={index} >
          <tr key={index} >
            {/* <th scope="row">{data._id}</th> */}
            <td>{data.filename}</td>
            <td> {data.hash}</td>
            <td> <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://ipfs.io/ipfs/${data.hash}`} alt="qr" /></td>

            {/* <td> <a href={`https://ipfs.io/ipfs/${data.hash}/`} target="_blank"
                        rel="noreferrer" download>Download</a> </td> */}
            <td><a href={`https://ipfs.io/ipfs/${data.hash}/`} target="_blank"
                        rel="noreferrer" download><img className='w-25' src={`https://ipfs.io/ipfs/${data.hash}/`} alt="img" /></a> </td>

          </tr>
          
        </tbody>
        )): <p>No Data</p> }
      </table>
        
      {/* <button  className="button" onClick={getMessage}>Get Document</button> */}
      {/* <p className="text-black"> <b>IPFS Hash:</b> {message}</p>
     <div className="img-cont">
     <a href={link1}  target="_blank" rel="noreferrer">
            <img
             
              src={`https://gateway.pinata.cloud/ipfs/${message}`}
              alt=""
              
            ></img>
          </a>

     </div> */}
      {/* <p>QmSjG4SHwiYqQKPznrjXWDHoD4j12excmWDWjjBN7f2Jjb<b>To View Your Certificate Go to :</b> <ins> https://ipfs.io/ipfs/"YOUR IPFS HASH"/ </ins></p> */}
    {/* </div>
    <div className='center5'>
    <form className="form-inline">
  <div className=" form-group">
  <label for="exampleInputName2"> File Name</label>
    <input type="text"  id="exampleInputName2" placeholder="...png/jpg.." onChange={(e) => setfilename1(e.target.value)} />
    <label for="exampleInputName2"> IPFS Hash</label>
    <input type="text"  id="exampleInputName2" placeholder="Qmac..."   onChange={(e) => sethash1(e.target.value)}/>
  </div>
  <br />
  <button onClick={handleSubmit}   className="button button2"  >Save to DB</button>
  {data ? data.map((data, index) => (
        <ul>
          <li>{data.filename} : {data.hash}</li>
          

          
          </ul>
        )): <p>No Data</p> } */}
  {/* <button onClick={handleSubmit1}   className="button button2"  >Get url's</button> */}

  {/* <p></p>
</form>
    // </div> */}
    </div>
    </>
    )
}

Verify.propTypes = propTypes;
Verify.defaultProps = defaultProps;


export default Verify;