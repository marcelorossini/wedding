import PageTemplate from "@components/pages/pageTemplate";
export default function Home() {
  return (
    <PageTemplate title="Recepção">
      <p>
      Após a cerimônia, teremos uma festa de recepção, na Chácara Santa Maria. Visitamos o local assim que ficamos noivos e nos apaixonamos pela conexão com a natureza, pelo ambiente acolhedor e  pela história da proprietária, que cuida pessoalmente do local, colocando muito carinho em cada detalhe.
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Chácara+Santa+Maria+-+Vicinal+São+Pedro,+Torrinha+-+SP&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>',
        }}
      />
    </PageTemplate>
  );
}
