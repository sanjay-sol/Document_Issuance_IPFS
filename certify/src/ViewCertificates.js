
import { useState } from "react";
 import "./ViewCertificates.css";
const ViewCertificates = ({ contract, account }) => {
  const [data, setData] = useState("");
  // const [name, setName] = useState("");
//QmSjG4SHwiYqQKPznrjXWDHoD4j12excmWDWjjBN7f2Jjb
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log( "str",str);
      const images = str_array.map((item, i) => {
           const link1 = `https://ipfs.io/ipfs/${item.substring(7)}/`;
console.log("item",item);
        return (
            
          <div className="image-container"> 
          <a href={item} key={i} target="_blank" rel="noreferrer">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="certificate"
              className="image-list"
            ></img>
          </a>
          
          {/* <span>Name:</span>
          <span>{window.name}</span> */}
          {/* <p>Id:{i}</p> */}
          <span> <b> Id : </b>{i}</span>
          {/* <p></p>
          br */}
          <br />
          <a  href={link1} target="_blank" rel="noreferrer" >{item.substring(7)}</a>
         

          </div>
        );

      });
      setData(images);
    } else {
      alert("No image to display");
    }

  };
  return (
    <>
      
      <div className="cont1">
      <input
        type="text"
        placeholder="0x...."
        className="address"
      ></input>
      <br />
      <p></p>
      <button className="button" onClick={getdata}>
        View Documnets
      </button>
      </div>
      <div className="container5">
        <div><i> <b><u>YOUR DOCUMENTS</u> </b></i>  </div>
      <div className="image-list">{data}</div>
      </div>
    </>
  );
};
export default ViewCertificates;
