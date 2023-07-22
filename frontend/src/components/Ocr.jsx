import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Tesseract from 'tesseract.js';
import axios from 'axios';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleImageDrop = async (acceptedFiles) => {
    const image = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(image));

    const res = await axios.post('/read_image', uploadedImage )
    console.log(res);


    // Tesseract.recognize(
    //   image,
    //   'eng',
    //   { logger: info => console.log(info) } // Optional logger
    // ).then(({ data: { text } }) => {
    //   setExtractedText(text);
    // });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Image Upload and OCR</h1>
      <Dropzone onDrop={handleImageDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            style={{
              width: '200px',
              height: '200px',
              border: '2px dashed #ccc',
              borderRadius: '10px',
              margin: '20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <input {...getInputProps()} />
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              <p>Drag 'n' drop an image here, or click to select one.</p>
            )}
          </div>
        )}
      </Dropzone>
      {extractedText && (
        <div style={{ margin: '20px auto' }}>
          <h3>Extracted Text:</h3>
          <pre>{extractedText}</pre>
        </div>
      )}
    </div>
  );
};

export default App;