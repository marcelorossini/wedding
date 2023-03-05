import PageTemplate from "@components/pages/pageTemplate";
import Link from "next/link";

export default function Home() {
  return (
    <PageTemplate title="Trajes">
      <p>
        Alugamos nossos trajes na Francis Noivas e Festas e gostamos muito dos
        valores e do atendimento, então fica a sugestão para quem optar pelo
        aluguel das roupas, principalmente os padrinhos. Mas lembrem-se de que é
        apenas uma sugestão, ok?
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Francis+Noivas+e+Festas+Jau+SP&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>',
        }}
      />
      <Link href="http://maps.google.com/?q=Francis+Noivas+e+Festas+Jau+SP">
        <button>ABRIR MAPS</button>
      </Link>
    </PageTemplate>
  );
}
