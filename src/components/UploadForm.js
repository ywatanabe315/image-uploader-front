import React, {useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import ImageIcon from '../assets/image-icon.png';
import '../css/UploadForm.css';

const UploadForm = (props) => {
  const inputFile = useRef();
  const {getRootProps} = useDropzone({
    onDrop: acceptedFiles => props.uploadImage(acceptedFiles[0])
  });
  const onFileSelected = (e) => {
    props.uploadImage(inputFile.current.files[0]);
  };

  return (
    <div className="upload-form">
      <h1 className="form-title">Upload your image</h1>
      <p className="form-text">File should be Jpeg, Png....</p>
      <section className="form-dropzone">
        <div {...getRootProps({className: "dropzone"})}>
          <img src={ImageIcon} />
          <p>Drag & Drop your image here</p>
        </div>
      </section>
      <p className="form-text-or">Or</p>
      <label className="form-select" htmlFor="select-input">
        <p className="button-text">Choose a file</p>
        <input type="file"
                id="select-input"
                className="select-input"
                ref={inputFile}
                onChange={(e) => onFileSelected(e)}
                accept="image/gif, image/jpeg, image/png, image/jpg"
        />
      </label>
    </div>
  );
};

export default UploadForm;