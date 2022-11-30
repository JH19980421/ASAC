import React from "react";
import styled from "styled-components";

const uploadResume = () => {
  console.log("hi");
};

function Resume() {
  return (
    <>
      <UploadButton onClick={uploadResume}>이력서 업로드</UploadButton>
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
