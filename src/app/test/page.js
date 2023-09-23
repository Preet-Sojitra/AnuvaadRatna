"use client"

import React, { useState } from "react"
import axios from "axios"

const API_URL = "http://127.0.0.1:5000"

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
  console.log(selectedFile)

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append("file", selectedFile)

      axios
        .post(`${API_URL}/predict-pdf`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Important for sending files
          },
        })
        .then((response) => {
          // Handle the response from the server
          console.log(response.data)
        })
        .catch((error) => {
          // Handle any errors
          console.error(error)
        })
    }
  }

  return (
    <div>
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default FileUpload
