import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ProfileHome from '../profilehome/profilehome';

const ProfilePage = () => {
    const [show, setShow] = useState(false);

    return (
        <ProfileDiv>
            <ProfileItemContainer>
                <Image src="/assets/svg/dpavatar.svg" alt="profile-pix" width={100} height={100} />
                <h4>Maryann Ereh</h4>
                <p>Hi, I am a frontend developer.</p>
                <small>Joined february 12</small>
                <div className="drop-items">
                    <div className="home">
                        <h5 onClick={() => setShow(!show)}>Home</h5>
                        {show ? <ProfileHome /> : null}
                    </div>
                    <div className="topics">
                        <h5 >My Topics</h5>
                        {/* {show ? <ProfileHome /> : null} */}
                    </div>
                </div>
            </ProfileItemContainer>
        </ProfileDiv>
    );
};

const ProfileDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const ProfileItemContainer = styled.section`
    margin: 20px 0 0 0;
    padding: 20px;
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .drop-items {
        display: flex
    }

    .home, .topics {
        padding-top: 2rem;
    }

    h4 {
        color: #409DE0;
        margin-bottom: -9px;
    }
    p{
        color: #374956;
        margin-bottom: 4px;
    }
    small {
        color: #C4C4C4
    }
    h5 {
        cursor: pointer;
        color: #C4C4C4;
        text-align: center;
    }
`;


export default ProfilePage;