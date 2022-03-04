import { useState } from 'react';
import AccSettings from '../accsettings/accsettings';
import AccPassword from '../accpassword/accpassword';

import styled from "styled-components";

const SettingsPage = () => {
    const [show, setShow] = useState("account");

    return (
        <ProfileDiv>
            <ProfileItemContainer>
                <div className="acc-par">
                    <h3>Account Settings</h3>
                    <div className="">
                        <p className={show === 'account' ? 'background' : ''} onClick={() => setShow('account')}>Account</p>
                        <p className={show === 'password' ? 'background' : ''} onClick={() => setShow('password')}>Password</p>
                        <p className={show === 'edit' ? 'background' : ''} onClick={() => setShow('edit')}>Edit profile</p>
                    </div>
                </div>
                <div className="acc-drop">
                    {show === "account" ? <AccSettings /> : show === 'password' ? <AccPassword /> : <div>edit</div>}
                </div>
            </ProfileItemContainer>
        </ProfileDiv>
    );
};

const ProfileDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #ECECEC;
`;

const ProfileItemContainer = styled.section`
    margin: 20px 0 0 0;
    padding: 20px;
    width: 750px;
    display: flex;
  
    .acc-drop {
        position: absolute;
        width: 506px;
        height: 370px;
        left: 550px;
        top: 131px;
        background: #FFFFFF;
        border: 1px solid #F6F6F6;
        border-radius: 5px;
        color: #374956;
    }

    .acc-par {
        position: absolute;
        width: 190px;
        height: 186px;
        left: 320px;
        top: 133px;
        background: #FFFFFF;
        border: 1px solid #F6F6F6;
        color: #374956;
        border-radius: 5px;
        padding: 5px 20px;

        h3 {
            font-size: 17px;
            margin-bottom: -12px;
        }
        
        p {
            padding: 8px 0;
            font-size: 14px;
            cursor: pointer;
        }
        .background {
                background: #ABCEE7;
            }
    }
`;


export default SettingsPage;