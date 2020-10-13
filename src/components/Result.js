import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import SuccessIcon from '../assets/success.png';
import '../css/Result.css';

const Result = (props) => {
    return (
        <div className='result'>
            <img src={SuccessIcon} className='success-icon' />
            <p>Uploaded Sccessfully!</p>
            <img src={props.image.url} className='uploaded-image'/>
            <div className='image-url'>
                <input id='image-url-input' typ='text' value={props.image.url} readOnly/>
                <CopyToClipboard text={props.image.url}>
                    <button className='copy-btn'>Copy link</button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default Result;