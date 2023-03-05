import { Wrapper, Social, Icon, Logo } from "./style";
import { ReactSVG } from "react-svg";
import Link from "next/link";

export default function Footer() {
  return (
    <Wrapper>
      <Logo>
        <ReactSVG id="logo" src="../assets/logo-c.svg" />
      </Logo>      
      Desenvolvido por Plim Soluções Criativas (14) 99181-4270
      <Social>
        <Icon size="20px">
          <Link href="https://api.whatsapp.com/send?phone=5514991814270&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20marketing%20digital,%20pode%20me%20ajudar?">
            <ReactSVG src="../assets/icons/whatsapp.svg" />
          </Link>
        </Icon>
        <Icon size="22px">
          <Link href="https://www.facebook.com/search/top?q=plim%20solu%C3%A7%C3%B5es%20criativas">
            <ReactSVG src="../assets/icons/facebook.svg" />
          </Link>
        </Icon>
        <Icon size="26px">
          <Link href="#">
            <ReactSVG src="../assets/icons/mail.svg" />
          </Link>
        </Icon>
        <Icon size="24px">
          <Link href="https://www.instagram.com/soluplim/">
            <ReactSVG src="../assets/icons/instagram.svg" />
          </Link>
        </Icon>
      </Social>
    </Wrapper>
  );
}
