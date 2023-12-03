import { useEffect, useState } from "react";
import Head from "next/head";
import { ReactSVG } from "react-svg";
import dayjs from "dayjs";
dayjs.locale("pt-BR");
import Link from "next/link";

import {
  Background,
  Wrapper,
  Logo,
  ButtonList,
  Button,
  CountdownBox,
  CountdownBoxDefault,
  CountdownItem,
  CountdownLabel,
  LoadingStyled,
  IframeGoogle,
  CountdownTextBox,
} from "./style";

import Welcome from "@components/pages/welcome";
import Links from "@components/pages/links";
import Footer from "@components/pages/footer";

export default function Home() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [loading, setLoading] = useState(true);
  const [countdownStatus, setCountdownStatus] = useState(undefined);
  const [showPresenceList, setShowPresenceList] = useState(false);

  useEffect(() => {
    var countDownDate = dayjs(`2023-12-09 16:00:00`);

    // Update the count down every 1 second
    var coutdownTimer = setInterval(() => {
      // Get today's date and time
      var now = dayjs();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      //
      if (countDownDate.format("YYYY-MM-DD") == now.format("YYYY-MM-DD")) {
        setCountdownStatus("today");
      } else if (countDownDate.diff(now) < 0) setCountdownStatus("after");
      else {
        setCountdownStatus("ok");
      }

      if (distance < 0) {
        clearInterval(coutdownTimer);
        return;
      }

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString());
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0")
      );
      setMinutes(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0")
      );
      setSeconds(
        Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0")
      );
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!!showPresenceList) {
      document
        .querySelector("#lista-presenca-form")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [showPresenceList]);
  return (
    <>
      <Head>
        <title>MARCELO E ARYANE - SAVE THE DATE</title>
      </Head>
      <Background id="back" />
      <Wrapper>
        <Logo>
          <ReactSVG id="logo" src="../assets/logo-text.svg" />
        </Logo>
        <CountdownBox>
          {(() => {
            if (countdownStatus == "ok") {
              return (
                <CountdownBoxDefault>
                  <CountdownItem type="title">
                    <ReactSVG src="../assets/icons/calendar.svg" /> FALTAM
                    EXATAMENTE
                  </CountdownItem>
                  <CountdownItem type="day">
                    {days}
                    <CountdownLabel>DIAS</CountdownLabel>
                  </CountdownItem>
                  <CountdownItem type="hour">
                    {hours}
                    <CountdownLabel>HORAS</CountdownLabel>
                  </CountdownItem>
                  <CountdownItem type="minute">
                    {minutes}
                    <CountdownLabel>MINUTOS</CountdownLabel>
                  </CountdownItem>
                  <CountdownItem type="second">
                    {seconds}
                    <CountdownLabel>SEG</CountdownLabel>
                  </CountdownItem>
                </CountdownBoxDefault>
              );
            } else if (countdownStatus == "today")
              return (
                <CountdownTextBox>
                  <span>É HOJE ÀS 16:00!!!</span>
                  <Link href="/cerimonia">
                    <div>
                      <u>
                        CLIQUE AQUI PARA LOCALIZAÇÃO DA CERIMONIA
                      </u>
                    </div>
                  </Link>
                </CountdownTextBox>
              );
            else
              return (
                <CountdownTextBox>
                  <span>
                    Em breve, compartilharemos as fotos do nosso casamento!
                  </span>
                  <span>
                    Estejam atentos para reviver conosco os momentos especiais e
                    sorrisos que marcaram o nosso dia.
                  </span>
                </CountdownTextBox>
              );
          })()}
        </CountdownBox>

        <Button type="button" onClick={() => setShowPresenceList(true)}>
          <div className="icon">
            <ReactSVG src="../assets/icons/list.svg" />
          </div>
          CONFIRME SUA PRESENÇA
        </Button>
        <IframeGoogle
          id="lista-presenca-form"
          show={showPresenceList}
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-sfPF3ZPZy2B83HWHXaPtBygsdedMNbsA3xAQaxrMxdMDMg/viewform?embedded=true"
        >
          Carregando…
        </IframeGoogle>
      </Wrapper>
      <Welcome />
      <Links />
      <Footer />
      {loading && <Loading />}
    </>
  );
}

const Loading = () => {
  return (
    <LoadingStyled>
      <img id="logo" src="/assets/aquarela.png" />
    </LoadingStyled>
  );
};
