import React, { useState } from 'react';
import axios from 'axios';

function ImageTextExtractor() {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (imageFile) {
      // Create a FormData object to send the image file to the server
      const formData = new FormData();
      formData.append('image', imageFile);

      // Send the image file to the server using fetch or axios
      try {
        const response = await axios.post('http://localhost:5000/extract_text', {
          method: 'POST',
          body: formData,
        });

        // Handle the response from the server here (e.g., display the extracted text)
        const data = await response.json();
        console.log('Extracted Text:', data.text);
      } catch (error) {
        console.error('Error extracting text:', error);
      }
    }
  };

  return (
    <div>
      <h1>Upload an image to extract text</h1>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="file" name="image" onChange={handleFileChange} />
        <input type="submit" value="Extract Text" />
      </form>
    </div>
  );
}

export default ImageTextExtractor;
