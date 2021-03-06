import Head from "next/head";
import Image from "next/image";
import LoginButtons from "../buttons/LoginButtons";
import DevImage from "../public/assets/svg/admin-avatar.svg";
import LoginInputs from "../inputs/LoginInputs";
import {
    Container,
    Form,
    ImageDiv,
    Main,
} from "../styles/AuthStyles";
import Link from "next/link";

const Admin = () => {
    return (
        <>
            <Head>
                <title>Tech Space | Admin Log in</title>
            </Head>
            <Container>
                <Main>
                    <ImageDiv>
                        <Image src={DevImage} alt="hero Image" />
                    </ImageDiv>

                    <Form>
                        <h4>Login to your account</h4>
                        <LoginInputs type={`email`} placeholder={`Email address`} name={`email`} />
                        <LoginInputs type={`password`} placeholder={`Password`} name={`email`} />
                        <Link href={`/admin-dashboard`} replace>
                            <a>
                                <LoginButtons text={`Log in`} />
                            </a>
                        </Link>
                    </Form>
                </Main>
            </Container>
        </>
    );
};

export default Admin;