// import { Link } from "react-router-dom";
import './Navbar.css';
import './png.png';
export default function Navbar(){
  
    return (
        <>
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link> */}

        <nav className="navbar navbar-expand-lg  rounded"> 
  <div className="container-fluid">
    {/* <a className="navbar-brand text-black" href="/"><em><b> Document Issuance</b></em> </a> */}
    <a class="navbar-brand" href="/">
      <img src="./images/bb2.png" alt="logo" height="55"></img>
      <strong className='text-black'>D-Cloud</strong>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-black  rounded" aria-current="page" href="/"><b>Home</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black  rounded" href="/share"><b>Share</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black  rounded" href="/upload"><b>Upload</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black rounded" href="/giveaccess"><b>Give Access</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black rounded" href="/cancelaccess"><b>Cancel Access</b> </a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link text-black  rounded" href="/viewcertificates"><b>View Files</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black  rounded" href="/verify"><b>Save</b> </a>
        </li>   
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}