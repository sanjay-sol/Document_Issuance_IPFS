// import React from 'react';
// import './GiveAccess.css';
// import { useEffect } from "react";


// const propTypes = {};

// const defaultProps = {};

// const GiveAccess = ({contract}) => {

//     const handleSharing = async () => {
//         const address = document.querySelector(".address").value;
//         await contract.allow(address);
       
//       };

//       useEffect(() => {
        
//         const accessList = async () => {
//           const addressList = await contract.shareAccess();
//           let select = document.querySelector("#AccessNumber");
//           const options = addressList;
    
//           for (let i = 0; i < options.length; i++) {
//             let opt = options[i];
//             let e1 = document.createElement("option");
//             e1.textContent = opt;
//             e1.value = opt;
//             select.appendChild(e1);
//           }
//         };
//         contract && accessList();
//         // accessList();
      
//       }, [contract]);
//     const address = document.querySelector(".address").value;
//     console.log(address);
//     return (
//     <>
//     <div className='center2'>
//     <form className="form-inline">
//   <div className="mx-5 form-group">
//     <label for="exampleInputName2"> Address</label>
//     <input type="text" className="address" id="exampleInputName2" placeholder="0x....."/>
//   </div>
//   <br />
//          <form id="myForm">
//             <select id="AccessNumber">
//               <option className="address">People With Access</option>
//             </select>
//           </form>
//   <br />
//   <button  onClick={() => handleSharing()} >Give Access</button>
//   <p></p>
// </form>

//     </div>
//     </>
//     )
// }

// GiveAccess.propTypes = propTypes;
// GiveAccess.defaultProps = defaultProps;
// export default GiveAccess;
import React from 'react';
import './GiveAccess.css';
import { useEffect } from "react";


const propTypes = {};

const defaultProps = {};

const GiveAccess = ({contract}) => {

    const handleSharing = async () => {
        const address = document.querySelector(".address").value;
        await contract.allow(address);
      };
      useEffect(() => {
        
        const accessList = async () => {
          const addressList = await contract.shareAccess();
          let select = document.querySelector("#selectNumber");
          const options = addressList;
    
          for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            let e1 = document.createElement("option");
            e1.textContent = opt;
            e1.value = opt;
            select.appendChild(e1);
          }
        };
        contract && accessList();
      
      }, [contract]);
    // const address = document.querySelector(".address").value;
    // console.log(address);
    return (
    <>
    <div className='center2'>
    {/* <form className="form-inline"> */}
  <div className="mx-5 form-group">
    <label htmlFor="exampleInputName2"> Address</label>
    <input type="text" className="address"  placeholder="0x....."/>
  </div>
  <br />
         <form id="myForm">
            <select id="selectNumber">
              <option className="address" >People With Access</option>
            </select>
          </form>
  <br />
  <button className='btn btn-success' onClick={() => handleSharing()} >Give Access</button>
  <p></p>
{/* </form> */}

    </div>
    </>
    )
}

GiveAccess.propTypes = propTypes;
GiveAccess.defaultProps = defaultProps;


export default GiveAccess;