import Head from "next/head";
import styled from "styled-components";
import SettingsPage from '../components/settingspage/settingspage';

const Settings = () => {
    <Head>
        <title>Tech Space | Settings</title>
    </Head>;
    return (
        <SettingsItemContainer>
            <SettingsPage />
        </SettingsItemContainer>
    );
};

const SettingsItemContainer = styled.div`
  /* background: #fff; */
`;

export default Settings;
