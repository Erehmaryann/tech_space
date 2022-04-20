import { useState, useEffect } from 'react';
import LoginInputs from '../inputs/LoginInputs';
import { AccParent } from "./acceditStyles";
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

export default AccEdit;