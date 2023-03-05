import { ReactSVG } from "react-svg";
import { Wrapper, ButtonList, Button } from "./style";
import Link from "next/link";

export default function Links() {
  return (
    <Wrapper>
      <h2>SAIBA MAIS</h2>

      <ButtonList>
        <Button>
          <Link href="/cerimonia">
            <ReactSVG src="../assets/icons/rings.svg" />
            <span>
              Localização
              <br />
              Cerimonia
            </span>
          </Link>
        </Button>
        <Button>
          <Link href="/recepcao">
            <ReactSVG src="../assets/icons/cheers.svg" />
            <span>
              Localização
              <br />
              Recepção
            </span>
          </Link>
        </Button>
        <Button>
          <Link href="lista-presentes">
            <ReactSVG src="../assets/icons/gift.svg" />
            <span>
              Lista de
              <br /> presentes
            </span>
          </Link>
        </Button>
        <Button>
          <Link href="dicas-trajes">
            <ReactSVG src="../assets/icons/suit.svg" />
            <span>
              Dicas
              <br />
              Trajes
            </span>
          </Link>
        </Button>
        <Button>
          <Link href="https://agromonges.com/">
            <ReactSVG src="../assets/icons/church.svg" />
            <span>
              Site
              <br />
              mosteiro
            </span>
          </Link>
        </Button>
        <Button>
          <Link href="https://chacarasantamaria.wixsite.com/torrinha">
            <ReactSVG src="../assets/icons/farm.svg" />
            <span>
              Site
              <br />
              Chacara
            </span>
          </Link>
        </Button>
      </ButtonList>
    </Wrapper>
  );
}
