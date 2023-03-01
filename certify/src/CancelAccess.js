import React from 'react';
import './CancelAccess.css';
// import { useEffect } from "react";


const propTypes = {};

const defaultProps = {};

const CancelAccess = ({contract}) => {

    const handleSharing = async () => {
        const address = document.querySelector(".address").value;
        await contract.disallow(address);
      };
    //   useEffect(() => {
        
    //     const accessList = async () => {
    //       const addressList = await contract.shareAccess();
    //       let select = document.querySelector("#selectNumber");
    //       const options = addressList;
    
    //       for (let i = 0; i < options.length; i++) {
    //         let opt = options[i];
    //         let e1 = document.createElement("option");
    //         e1.textContent = opt;
    //         e1.value = opt;
    //         select.appendChild(e1);
    //       }
    //     };
    //     contract && accessList();
      
    //   }, [contract]);
    // const address = document.querySelector(".address").value;
    // console.log(address);
    return (
    <>
    <div className='center24'>
    {/* <form className="form-inline"> */}
  <div className="mx-5 form-group">
    <label htmlFor="exampleInputName2"> Address : </label>
    <input type="text" className="address"  placeholder="0x....."/>
  </div>
  {/* <br />
         <form id="myForm">
            <select id="selectNumber">
              <option className="address" >People With Access</option>
            </select>
          </form>
  <br /> */}
  <button className='btn btn-danger' onClick={() => handleSharing()} >Cancel Access</button>
  <p></p>
{/* </form> */}

    </div>
    </>
    )
}

CancelAccess.propTypes = propTypes;
CancelAccess.defaultProps = defaultProps;


export default CancelAccess;