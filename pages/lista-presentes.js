import PageTemplate from "@components/pages/pageTemplate";
import Link from "next/link";
export default function Home() {
  return (
    <PageTemplate title="Presentes">
      <p>
        Somos muito abençoados e conseguimos mobiliar a casa quando começamos a
        morar juntos, no ano passado. Mas em breve, se Deus quiser, nos
        mudaremos para nosso novo lar, por isso, separamos algumas sugestões de
        presentes que farão parte do nosso enxoval.
      </p>
      <Link href="https://listas.casasbahia.com.br/aryaneemarcelo">
        <button>ACESSAR</button>
      </Link>
    </PageTemplate>
  );
}
