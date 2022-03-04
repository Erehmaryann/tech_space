import { useState, useEffect } from 'react';
import style from "styled-components";
import LoginInputs from '../inputs/LoginInputs';
import Image from 'next/image';

const AccEdit = () => {
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
    return (
        <AccParent>
            <div className="img">
                <label htmlFor="file-upload" className="file-upload" style={{ cursor: "pointer" }}>
                    {images.length < 1 ? (
                        <>
                            <Image src="/assets/svg/dpavatar.svg" alt="profile-pix" width={80} height={80} />
                            <input type="file" name="file-upload" id="file-upload" accept="image/*" onChange={onImageChange} style={{ display: "none" }} />
                        </>
                    )
                        :
                        imageURLs.map((imageSrc, idx) => (<Image className="rev" key={idx} width={80} height={80} src={imageSrc} alt="profile-image" />))
                    }
                </label>
                <h3>Edit Picture</h3>
            </div>
            <LoginInputs type={`text`} placeholder={`Full Name`} label={`Full name`} name={`full-name`} />
            <LoginInputs type={`text`} placeholder={`Username`} label={`Username`} name={`username`} />
            <LoginInputs type={`email`} placeholder={`Email address`} label={`Email address`} name={`email`} />
            <LoginInputs type={`text`} placeholder={`+2348125671212`} label={`Phone number`} name={`phone`} />
            <div className="input-group">
                <label htmlFor="topic-description">In one sentence, tell us about yourself</label>
                <textarea name="topic-description" id="topic-description" placeholder="Enter a description" style={{ resize: "none" }} />
            </div>
            <button className="button">Save</button>
        </AccParent>
    );
};

const AccParent = style.div`
    background: #fff;
    padding: 20px;

    .img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3{
            color: #409DE0;
            font-size: 17px;
            margin-top: -2px;
        }
    }

    .button {
        width: 74px;
        background: #409DE0;
        border-radius: 15px;
        color: #fff;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 16px;
    }
    .input-group {
        label {
            text-align: justify !important;
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
    }
`;

export default AccEdit;