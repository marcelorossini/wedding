import PageTemplate from "@components/pages/pageTemplate";
export default function Home() {
  return (
    <PageTemplate title="Cerimônia">
      <p>
        Nossa cerimônia religiosa será celebrada em um local que une as duas
        coisas que mais nos trazem paz: a natureza e a espiritualidade. Será um
        casamento realizado no altar que fica embaixo da figueira, uma árvore
        muito citada na Bíblia, que simboliza prosperidade, abundância,
        segurança e paz.
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=mosteiro do paraiso torrinha&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>',
        }}
      />
    </PageTemplate>
  );
}
