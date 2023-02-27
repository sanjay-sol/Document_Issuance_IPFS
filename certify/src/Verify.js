import React from 'react';
import './Verify.css';

const propTypes = {};

const defaultProps = {};

const Verify = () => {
    return (
    <>
    <div className='center5'>
    <form className="form-inline">
  <div className="mx-5 form-group">
    <label for="exampleInputName2"> IPFS Hash</label>
    <input type="text" className="form-control" id="exampleInputName2" placeholder="Qmac..."/>
  </div>
  <br />
  <button type="submit"  className="button button2"  >Verify</button>
  <p></p>
</form>
    </div>
    </>
    )
}

Verify.propTypes = propTypes;
Verify.defaultProps = defaultProps;


export default Verify;