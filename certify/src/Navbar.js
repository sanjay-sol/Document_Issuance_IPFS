// import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar(){
    return (
        <>
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link> */}
        <div className="scroll-left">
<p><b><i> ******Certification made Easy*****</i></b> </p>
</div>

        <nav className="navbar navbar-expand-lg bg-secondary rounded"> 
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/"><em>~Certify~</em> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="/share">Share</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="/upload">Upload</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="/giveaccess">Give Access</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="/cancelaccess">Cancel Access</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-white " href="/viewcertificates">View Cetificates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="/verify">Verify</a>
        </li>   
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}