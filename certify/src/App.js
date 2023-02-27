// import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Home from './Home';
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Uploadabi from './artifacts/contracts/Upload.sol/Upload.json';
import Navbar from './Navbar';
import Share from './Share';
import GiveAccess from './GiveAccess';
import Upload from './Upload';
import ViewCertificates from './ViewCertificates';
import Verify from './Verify';
import CancelAccess from './CancelAccess';


function App() {
  const [account , setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);
        const address = await signer.getAddress();
        setAccount(address);

        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Uploadabi.abi,
          signer
        );
       
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
    <div className="App">
       <Navbar/>
     
     
      <Routes>
       
        <Route path='/' element={<Home  
        account={account}
        provider={provider}
        />} />
        <Route path='/share' element={<Share contract={contract} account={account} provider={provider}  signer={signer} />} />
        <Route path='/giveaccess' element={<GiveAccess contract={contract} />} />
        <Route path='/upload' element={<Upload contract={contract} account={account} provider={provider} />} />
        <Route path='/viewcertificates' element={<ViewCertificates contract={contract} account={account}/>} />
        <Route path='/verify' element={<Verify />} />
         <Route path='/cancelaccess' element={<CancelAccess contract={contract} />} />



      </Routes>
    </div>
    </>
  );
}

export default App;
