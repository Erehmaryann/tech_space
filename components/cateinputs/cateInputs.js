/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import ReactSelect from "../common/select";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ButDiv, Button, CateDiv } from "./cateinputsStyle";
import { options } from "./cateData";
import Modal from "../modal/Modal";

const CateInputs = ({ setShowFirstModal }) => {
  const [option, setOption] = useState(options);
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => {
      newImageUrls.push(URL.createObjectURL(image));
    });
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const showModalHandler = () => {
    setShowModal(false);
    setShowFirstModal(false);
  };

  return (
    <CateDiv>
      <div className="input-group">
        <label htmlFor="topic-title">Title</label>
        <input
          type="text"
          name="topic-title"
          id="topic-title"
          className="input"
          placeholder="Topic title"
        />
      </div>
      <div className="input-group">
        <label htmlFor="category">Add category</label>
        <ReactSelect
          setOption={setOption}
          options={options}
          placeholder="Select a category"
        />
      </div>
      <div className="input-group">
        <label htmlFor="topic-description">Description</label>
        <textarea
          name="topic-description"
          id="topic-description"
          placeholder="Enter a description"
          style={{ resize: "none" }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="file-upload" className="file-upload">
          {images.length < 1 ? (
            <>
              <Image
                src="/assets/svg/photoIcon.svg"
                width={20}
                height={20}
                alt="Photo-Icon"
              />
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept="image/*"
                onChange={onImageChange}
              />
            </>
          ) : (
            imageURLs.map((imageSrc) => (
              <Image
                className="rev"
                width={40}
                height={40}
                src={imageSrc}
                alt="topic-image"
              />
            ))
          )}
        </label>
      </div>
      <ButDiv>
        <Button onClick={() => setShowModal(true)}>Create</Button>
      </ButDiv>
      <Modal onClose={showModalHandler} show={showModal} btnText={`ok`} btn>
        Your topic is pending approval
      </Modal>
    </CateDiv>
  );
};

export default CateInputs;
