import Navlink from '../Navlink/navlink';
import styled from 'styled-components';

const data = [
    {
        img: '/assets/svg/home.svg',
        name: 'Home',
        link: '/home',
    },
    {
        img: '/assets/svg/saved.svg',
        name: 'Saved',
        link: '/saved',
    },
    {
        img: '/assets/svg/trending.svg',
        name: 'Trending',
        link: '/trending',
    },
];

const SideBar = () => {
    // const [active, setActive] = React.useState("Home");

    // const handleClick = (name) => {
    //     setActive(name);
    // };

    return (
        <Div>
            {
                data.map((item, index) => (
                    <Navlink key={index} href={item.link} variant="link" img={item.img} name={item.name} />
                ))
            }
        </Div>
    );
};

const Div = styled.div`
    padding-top: 3rem;
    padding-left: 1rem
`;

export default SideBar;