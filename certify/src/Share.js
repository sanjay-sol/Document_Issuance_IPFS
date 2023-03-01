import React, { useState } from "react";
import './Share.css';
function Share({contract , provider , signer}) {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [message, setMessage] = useState("");
  const link1 = `https://ipfs.io/ipfs/${message}/`;

//0x512aC9b6E1Fd5BD24B51c09334a67a766E4113C7
  const sendMessage = async () => {
    // const signer = provider.getSigner();
    const tx = await contract.sendMessage(receiverAddress, message);
    await tx.wait();
    console.log("Message sent");
  };
  const getMessage = async () => {
    // const signer = provider.getSigner();
    const senderAddress = await signer.getAddress();
    const message = await contract.getMessage(senderAddress);
    setMessage(message);
    console.log("Message retrieved:", message);
  };

//QmX8Vt1SKwnw4tAFm5Wh6xjTuwpPDtYhfNVixf1wznYsv6
  return (
    <div >
      <h1 className="fst-italic text-white"> Send IPFS Hash </h1>
      <label>
         <b className="text-white">Receiver Address:</b> 
        <input type="text" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} placeholder="OxD12...." />
      </label>
      <p></p>
      <label>
      <b className="text-white">IPFS Hash:</b>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Qmac....."/>
      </label>
      <br />
      <button className="button" onClick={sendMessage}>Send Document</button>
      <button  className="button" onClick={getMessage}>Get Document</button>
      <p className="text-white"> <b>IPFS Hash:</b> {message}</p>
     <div className="img-cont">
     <a href={link1}  target="_blank" rel="noreferrer">
            <img
             
              src={`https://gateway.pinata.cloud/ipfs/${message}`}
              alt=""
              
            ></img>
          </a>

     </div>
      {/* <p>QmSjG4SHwiYqQKPznrjXWDHoD4j12excmWDWjjBN7f2Jjb<b>To View Your Certificate Go to :</b> <ins> https://ipfs.io/ipfs/"YOUR IPFS HASH"/ </ins></p> */}
    </div>
  );
}

export default Share;


// // import { Link } from "react-router-dom"
// // export default function About(){
// //     return (
// //         <>
// //         <div>About US
// //         <Link to="/aboutus">Person 1</Link>
// //         </div>
// //         </>
// //     )
// // }
// import React from 'react';
// import './Share.css'
// // import styled from 'styled-components';
// // import PropTypes from 'prop-types';


// const propTypes = {};

// const defaultProps = {};

// /**
//  * 
//  */
// const Share = () => {


//     return ( 
//    <>
//    {/* <div>share</div> */}
//    <div className='center1'>
//    {/* <div className="mb-3 ">
//   <label for="exampleFormControlInput1" className="form-label">Email address</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>
// <div className="mb-3">
//   <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// </div> */}
// <form className="form-inline">
//   <div className="mx-5 form-group">
//     <label for="exampleInputName2">Receiver Address</label>
//     <input type="text" value={receiverAddress} className="form-control" id="exampleInputName2" placeholder="0x....."   onChange={(e) => setReceiverAddress(e.target.value)}/>
//   </div>
//   <div className="mx-5 form-group">
//     <label for="exampleInputName2">IPFS Hash</label>
//     <input type="text" value={message} className="form-control" id="exampleInputName2" placeholder="Qmac...."  onChange={(e) => setMessage(e.target.value)}/>
//   </div>
//     <p>Hash : {message}</p>
//   <br />
//   <button type="submit" className="btn btn-primary">Send Hash</button>
// <br />
//   <button type="submit" className="btn btn-primary">Get Hash</button>

//   <p></p>
// </form>
// </div>
//    </>
//     )
// }

// Share.propTypes = propTypes;
// Share.defaultProps = defaultProps;
// // #endregion

// export default Share;
