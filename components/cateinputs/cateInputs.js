/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import ReactSelect from "../common/select";
import Image from "next/image";
import { useState } from "react";
import { ButDiv, Button, CateDiv } from "./cateinputsStyle";
import { options } from "./cateData";
import Modal from "../modal/Modal";
import { makeApiCall } from "../../lib/api";
import Spinner from "../common/spinner/spinner";
import { toast } from "react-hot-toast";

const CateInputs = ({ setShowFirstModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [newTopicDetails, setNewTopicDetails] = useState({
    topic: "",
    category: "",
    description: "",
    // image: "",
  });

  const handleFormChange = (e) => {
    setNewTopicDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const onImageChange = (e) => {
  //   const files = e.target.files[0];
  //   if (files.size > 4096)
  //     return toast.error("File size cannot be more than 4MB");
  //   else
  //     toast.success(
  //       `The file with size ${Math.round(
  //         files.size / 1024
  //       )}MB has been selected successfully `
  //     );
  //   const img = URL.createObjectURL(files);
  //   setImagePreview(img);
  //   setNewTopicDetails((prev) => ({ ...prev, image: files }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await makeApiCall("/createtopic", "POST", newTopicDetails);
    console.log(response);
    if (response.status === 200) {
      setShowModal(true);
      toast.success(
        "Topic was created successfully. Your topic is pending approval"
      );
      return;
    }
    setLoading(false);
    if (response.status !== 200) {
      setLoading(false);
      setShowModal(false);
      setShowFirstModal(true);
      toast.error(response.message);
      return;
    }
    setLoading(false);
  };

  const showModalHandler = () => {
    setShowModal(false);
    setShowFirstModal(false);
  };

  return (
    <CateDiv onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <label htmlFor="topic-title">Title</label>
        <input
          type="text"
          name="topic"
          value={newTopicDetails.topic}
          onChange={(e) => handleFormChange(e)}
          id="topic-title"
          required
          className="input"
          placeholder="Topic title"
        />
      </div>
      <div className="input-group">
        <label htmlFor="category">Add category</label>
        <ReactSelect
          options={options}
          name="category"
          placeholder="Select a category"
          handleChange={(e) =>
            setNewTopicDetails((prev) => ({ ...prev, category: e.value }))
          }
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="topic-description">Description</label>
        <textarea
          name="description"
          value={newTopicDetails.description}
          id="topic-description"
          placeholder="Enter a description"
          onChange={(e) => handleFormChange(e)}
          style={{ resize: "none" }}
          required
        />
      </div>
      {/* <div className="input-group">
        <label htmlFor="file-upload" className="file-upload">
          <p style={{ fontSize: "12px", paddingBottom: "8px" }}>
            File size should not be more than 4MB
          </p>

          {imagePreview ? (
            <>
              <Image
                style={{
                  cursor: "pointer",
                }}
                className="rev"
                src={imagePreview}
                width={40}
                height={40}
                alt="topic-image"
              />
              <input
                type="file"
                id="file-upload"
                name="image"
                accept="image/*"
                onChange={onImageChange}
              />
            </>
          ) : (
            <>
              <Image
                style={{
                  cursor: "pointer",
                }}
                src="/assets/svg/photoIcon.svg"
                width={20}
                height={20}
                alt="Photo-Icon"
              />
              <input
                type="file"
                id="file-upload"
                name="image"
                accept="image/*"
                onChange={onImageChange}
                required
              />
            </>
          )}
        </label>
      </div> */}
      <ButDiv>
        <Button
          type="submit"
          disabled={loading}
          // onClick={() => setShowModal(true)}
        >
          {loading === true ? <Spinner color="#fff" /> : "Create"}
        </Button>
      </ButDiv>
      <Modal onClose={showModalHandler} show={showModal} btnText={`ok`} btn>
        Your topic is pending approval
      </Modal>
    </CateDiv>
  );
};

export default CateInputs;
