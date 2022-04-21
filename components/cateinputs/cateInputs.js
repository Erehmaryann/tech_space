/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Select from 'react-select';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ButDiv, Button, CateDiv } from './cateinputsStyle';

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
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => {
            newImageUrls.push(URL.createObjectURL(image));
        });
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const showModalHandler = () => {
        setShowModal(true);
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
                <textarea name="topic-description" id="topic-description" placeholder="Enter a description" style={{ resize: "none" }} />
            </div>
            <div className="input-group">
                <label htmlFor="file-upload" className="file-upload">
                    {images.length < 1 ? (
                        <>
                            <Image src="/assets/svg/photoIcon.svg" width={20} height={20} alt="Photo-Icon" />
                            <input type="file" name="file-upload" id="file-upload" accept="image/*" onChange={onImageChange} />
                        </>
                    ) :
                        imageURLs.map(imageSrc => (<Image className="rev" width={40} height={20} src={imageSrc} alt="topic-image" />))
                    }

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
            >
                Your topic is pending approval
            </Modal>
        </CateDiv>
    );
};

export default CateInputs;