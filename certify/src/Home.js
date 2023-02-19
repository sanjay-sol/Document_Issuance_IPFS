import React from 'react';
import './Home.css';

const propTypes = {};

const defaultProps = {};
const Home = ({account , provider}) => {
console.log(provider);

    return (
        <>
      
    <div className='center4'>
    <div> <b>Account :</b> {account ? account : "Not connected"}</div>
    
    <br />
        <button type="button" className="btn btn-success">Connect Wallet</button>
        <p></p>
    </div>
    
    </>
    );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;