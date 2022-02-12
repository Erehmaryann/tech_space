import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Logo.png";
import { useRouter } from "next/router";
import { LogoDiv, Nav, Button } from "./NavStyles";

const LoginNav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Nav>
      <LogoDiv>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo image" />
          </a>
        </Link>
      </LogoDiv>

      {path === "/" && (
        <Link href="/signup">
          <a>
            <Button>Register</Button>
          </a>
        </Link>
      )}
    </Nav>
  );
};

export default LoginNav;
