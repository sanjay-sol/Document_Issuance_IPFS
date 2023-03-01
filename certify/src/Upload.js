import { useState } from "react";
import axios from "axios";
import "./Upload.css";
const Upload = ({ contract, account, provider  }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Please Select any File");
  const [ipfshash, setipfshash] = useState(null);
  // const [hashid, sethashid] = useState("");
  //Qma8DMoc7ctwhLpjPyKqFozn4N49tifBNrwabToB44k84b
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
            pinata_api_key: `e75e19c7849a9d3fe087`,
            pinata_secret_api_key: `87540f7529c5186bd1111fdf9ef7bb3041897a9abbdee14742f6be09be931f54`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(resFile.data.IpfsHash);
        console.log(resFile.data);
        setipfshash(resFile.data.IpfsHash);
      
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
         

      } catch (e) {
        alert("Can't upload file to Pinata");
      }
    }
    alert(" Image Uploaded Successfully " );
     
    setFileName("Select another file");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; 
    console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
   
    };
    setFileName(e.target.files[0].name);
    
    e.preventDefault();
  };
  return (
    <>
    <div className="top1">
    <div className="top">
     
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
        <span className="textArea"> Image: <u>{fileName}</u></span>
        <button type="submit" className="upload" disabled={!file}>
          Upload
        </button>
        {ipfshash ? (
        <div>
          <p className="text-white"><b className="text-white">IPFS Hash:</b>  {ipfshash}</p>
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