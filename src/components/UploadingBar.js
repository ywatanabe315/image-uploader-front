import React from 'react';
import {spring} from 'react-motion';
import ReactMotionLoop from 'react-motion-loop';
import styled from "styled-components";
import '../css/UploadingBar.css';

const BarContainer = styled.div`
    position: absolute;
    width: 340.71px;
    height: 6px;
    left: 32px;
    top: 93.74px;
    background: #f2f2f2;
    overflow: hidden;
`;

const BarInnter = styled.div`
    position: relative;
    overflow: hidden;
    left: -100px;
    height: 100%;
    width: 100px;
    background-color: #2f80ed;
`;

const Bar = ({style}) => {
    return (
        <BarContainer>
            <BarInnter style={style} />
        </BarContainer>
    );
}

const UploadingBar = (props) => {
    return (
        <div className='uploading-bar'>
            <p>Uploading...</p>
            <ReactMotionLoop styleFrom={{left: 0}} styleTo={{left: spring(340.71)}}>
                {(style) => <Bar style={style} />}
            </ReactMotionLoop>
        </div>
    );
};

export default UploadingBar;