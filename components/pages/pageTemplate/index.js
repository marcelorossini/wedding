import { Wrapper, Logo, BackButton, Header, Main } from "./style";
import { ReactSVG } from "react-svg";
import Router from "next/router";
import Head from "next/head";
import Footer from "../footer";

export default function PageTemplate(props) {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Logo>
          <ReactSVG id="logo" src="../assets/logo-text.svg" />
          <BackButton onClick={() => Router.back()}>
            <ReactSVG src="../assets/icons/back.svg" />
            <span>Voltar</span>
          </BackButton>
        </Logo>
        <Header>
          <span>{title}</span>
        </Header>
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
}
