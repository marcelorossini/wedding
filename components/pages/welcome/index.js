import { Wrapper, WelcomeStyled } from './style'

export default function Home() {
  return (
    <Wrapper>
      <WelcomeStyled>
        <h2>SEJAM BEM-VINDOS</h2>

        <p>
          Criamos esse site para ajudá-los com algumas informações referentes ao
          grande dia. Por aqui vocês encontrarão mais informações acerca da
          localização, dicas e muito mais.
          <br />
          <br />
          Acreditamos que essa celebração é um momento único e especial, por
          isso, optamos por um casamento intimista, contando apenas com nossos
          familiares e amigos mais próximos.
          <br />
          <br />
          Tudo será perfeitamente feito conforme a nossa personalidade, gostos e
          sonhos. Nossa intenção é que o dia seja leve, feliz, abençoado e
          repleto de pessoas que amamos, por isso, sua presença será muito
          especial!
          <br />
          <br />
        </p>
      </WelcomeStyled>
    </Wrapper>
  );
}
