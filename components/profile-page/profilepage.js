import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileHome from "../profilehome/profilehome";
import { ProfileDiv, HomeDiv, ProfileItemContainer } from "./profileStyles";
import MyTopic from "../mytopic/mytopic";

const ProfilePage = () => {
  const [show, setShow] = useState("home");
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

  return (
    <ProfileDiv>
      <ProfileItemContainer>
        <label
          htmlFor="file-upload"
          className="file-upload"
          style={{ cursor: "pointer" }}
        >
          {images.length < 1 ? (
            <>
              <Image
                src="/assets/svg/dpavatar.svg"
                alt="profile-pix"
                width={100}
                height={100}
              />
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept="image/*"
                onChange={onImageChange}
                style={{ display: "none" }}
              />
            </>
          ) : (
            imageURLs.map((imageSrc, idx) => (
              <Image
                className="rev"
                key={idx}
                width={100}
                height={100}
                src={imageSrc}
                alt="profile-image"
                style={{ borderRadius: "50%" }}
              />
            ))
          )}
        </label>
        <h4>Maryann Ereh</h4>
        <p>Hi, I am a frontend developer.</p>
        <small>Joined february 12</small>
        <HomeDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "150px",
            }}
          >
            <h5
              className={show === "home" ? "border-bottom" : ""}
              onClick={() => setShow("home")}
            >
              Home
            </h5>
            <h5
              className={show === "topic" ? "border-bottom" : ""}
              onClick={() => setShow("topic")}
            >
              My Topics
            </h5>
          </div>
          <div>{show === "home" ? <ProfileHome /> : <MyTopic />}</div>
        </HomeDiv>
      </ProfileItemContainer>
    </ProfileDiv>
  );
};

export default ProfilePage;
