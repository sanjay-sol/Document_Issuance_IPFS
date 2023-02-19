import { useState } from "react";
import axios from "axios";
import "./Upload.css";
const Upload = ({ contract, account, provider  }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Please Select any File");
  const [ipfshash, setipfshash] = useState(null);
  // const [hashid, sethashid] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.API_KEY,
            pinata_secret_api_key: process.env.API_SECRET_KEY,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(resFile.data.IpfsHash);
        // var hashid = resFile.data.IpfsHash;QmeqJFk1wKfqMrRisY6SgZy9aVBDf7Zqkyp99fj5TYjSQs
        setipfshash(resFile.data.IpfsHash);
      
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
         

      } catch (e) {
        alert("Can't upload file to Pinata");
      }
    }
    alert(" Image Uploaded Successfully " );
    // console.log(hashid);
     
    setFileName("Select another file");
    setFile(null);
  };
  // console.log(hashid);
  const retrieveFile = (e) => {
    const data = e.target.files[0]; 
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    // setFileName(e.target.files[0].name);
    //  window.name=fileName;
    };
    setFileName(e.target.files[0].name);
    // window.name=fileName;
    e.preventDefault();
  };
  return (
    <>
    <div className="top1">
    <div className="top">
      {/* <div>{hashid}</div> */}
      <form className="form" onSubmit={handleSubmit}>
   
        <label htmlFor="file-upload" className="choose">
          Choose File
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: {fileName}</span>
        <button type="submit" className="upload" disabled={!file}>
          Upload
        </button>
        {ipfshash ? (
        <div>
          <p><b>IPFS Hash:</b>  {ipfshash}</p>
        </div>
      ) : null}
        {/* <span   >{hashid}</span> */}

      </form>
      <p></p>
      <p></p>
    </div>
    </div>

    </>
  );
};
export default Upload;