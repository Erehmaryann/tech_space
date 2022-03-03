import styled from "styled-components";

const SettingsPage = () => {
    return (
        <ProfileDiv>
            <ProfileItemContainer>
                SettingsPage
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export default SettingsPage;