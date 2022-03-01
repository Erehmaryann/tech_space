import Select from 'react-select';
import Image from 'next/image';
import { useState, useRef } from 'react';
import styled from "styled-components";

import Modal from "../modal/Modal";

const options = [
    { value: 'programming', label: 'Programming' },
    { value: 'web development', label: 'Web development' },
    { value: 'networking', label: 'Networking' },
    { value: 'computer repair and maintenace', label: 'Computer repair and maintenace' },
    { value: 'android/IOS', label: 'Android/IOS' },
    { value: 'phone and technology', label: 'Phone and Technology' },
];

const SelectStyle = {
    valueContainer: (provided) => ({
        ...provided,
        // height: "33px ",
        display: "flex",
        alignItems: "center",
    }),
    control: (provided, state) => ({
        ...provided,
        width: "100%",
        marginTop: "5px",
        height: "100%",
        background: "#f5f5f5",
        border: "none",
        borderRadius: "10px",
        outline: "none",
        marginBottom: "10px",
        boxShadow: state.isFocused ? "none" : 0,
    }),
    option: (provided, state) => ({
        ...provided,
        display: "flex",
        justifyContent: "center",
        textALign: "center",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        paddingLeft: "10px",
        // zIndex: 100000,
        color: state.isSelected ? "#ffffff" : "rgba(0,0,0,0.9)",
    }),

    singleValue: (provided) => ({
        ...provided,
        color: "#9E9E9E",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        letterSpacing: "0.06em",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#9E9E9E",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        letterSpacing: "0.06em",
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none",
    }),
};

const CateInputs = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <CateDiv>
            <div className="input-group">
                <label htmlFor="topic-title">Title</label>
                <input type="text" name="topic-title" id="topic-title" className="input" placeholder="Topic title" />
            </div>
            <div className="input-group">
                <label htmlFor="category">Add category</label>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={SelectStyle}
                    id="category"
                    placeholder="Select a category"
                    name="category"
                />
            </div>
            <div className="input-group">
                <label htmlFor="topic-description">Description</label>
                <textarea name="topic-description" id="topic-description" placeholder="Enter a description" />
            </div>
            <div className="input-group">
                <label htmlFor="file-upload" className="file-upload">
                    <Image src="/assets/svg/photoIcon.svg" width={20} height={20} alt="Photo-Icon" onClick={handleClick} />
                    <input type="file" name="file-upload" id="file-upload" ref={hiddenFileInput} onChange={handleChange} />
                </label>
            </div>
            <ButDiv>
                <Button onClick={() => showModalHandler()}>Create</Button>
            </ButDiv>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                btnText={`ok`}
                btn
            // title={`New Topic`}
            >
                Your topic is pending approval
            </Modal>
        </CateDiv>
    );
};

const ButDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
  background: #409de0;
  cursor: pointer;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  // typography
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ebebeb;
  text-decoration: none;
`;

const CateDiv = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    width: 400px;
    .input-group {
        padding: 5px;
        label {
            text-align: justify !important;
        }
        .input {
            margin-top: 5px;
            display: block;
            width: 100%;
            background: #f5f5f5;
            border: none;
            border-radius: 10px;
            outline: none;
            margin-bottom: 10px;
            padding: 12px
        }
        textarea {
            margin-top: 5px;
            display: block;
            width: 100%;
            background: #f5f5f5;
            border: none;
            border-radius: 10px;
            outline: none;
            margin-bottom: 10px;
            padding: 15px
        }
        input[type="file"] {
            display: none;
        }
    }
`;

export default CateInputs;