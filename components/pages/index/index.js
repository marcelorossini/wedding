import { useEffect, useState } from "react";
import Head from "next/head";
import { ReactSVG } from "react-svg";
import {
  Background,
  Wrapper,
  Logo,
  ButtonList,
  Button,
  CountdownBox,
  CountdownItem,
  CountdownLabel,
} from "./style";

import Welcome from "@components/pages/welcome";
import Links from "@components/pages/links";
import Footer from "@components/pages/footer";

export default function Home() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    var countDownDate = new Date("Dec 9, 2023 16:00:00").getTime();

    // Update the count down every 1 second
    var coutdownTimer = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

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
  return (
    <>
      <Head>
        <title>
          MARCELO E ARYABE - SAVE THE DATE
        </title>
      </Head>
      <Background id="back" />
      <Wrapper>
        <Logo>
          <ReactSVG id="logo" src="../assets/logo-text.svg" />
        </Logo>
        {days && (
          <CountdownBox>
            <CountdownItem type="title"><ReactSVG src="../assets/icons/calendar.svg" /> FALTAM EXATAMENTE</CountdownItem>
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
          </CountdownBox>
        )}
      </Wrapper>
      <Welcome />
      <Links />
      <Footer />
    </>
  );
}
