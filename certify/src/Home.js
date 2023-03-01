import React from 'react';
import './Home.css';

const propTypes = {};

const defaultProps = {};
const Home = ({account , provider}) => {
console.log(provider);
//QmeqJFk1wKfqMrRisY6SgZy9aVBDf7Zqkyp99fj5TYjSQs
    return (
        <>
      
    <div className='center4 text-white'>
    <div> <b>Current Account :  </b>{account ? account : "Not connected"}</div>
    
    <br />
{account ? <button type="button" className="button button2"> Wallet Connected</button> : <button type="button" className="btn btn-success">Connected Wallet</button>  }

        {/* <button type="button" className="btn btn-success">Connect Wallet</button> */}
        <p></p>
    </div>
    
    </>
    );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;