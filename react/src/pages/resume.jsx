import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../Firebase";
import Header from "../components/header";

function Resume() {
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);

  const handelFileChange = (e) => {
    const fileRef = e.target.files[0];

    setFile(fileRef);
  };

  const uploadResume = (e) => {
    e.preventDefault();

    if (!file) {
      alert("파일을 선택해주세요!");
      return;
    }

    const storageRef = ref(storage, `/resumes/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log("sr", uploadTask);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setPercent(percent);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("done", url);
        });
      }
    );
  };

  return (
    <>
      <Header />
      <input type="file" single onChange={handelFileChange} />
      <UploadButton onClick={uploadResume}>이력서 업로드</UploadButton>
      <p>{percent} % done</p>
    </>
  );
}

const UploadButton = styled.button`
  font-size: large;
  padding: 5px 10px;
  margin: 20px;

  border: 1px solid black;
  border-radius: 5px;
`;

export default Resume;
