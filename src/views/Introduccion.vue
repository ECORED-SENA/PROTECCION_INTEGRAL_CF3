<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/introduccion/intro_01.svg", alt="Reconocimiento de niñas, niños y adolescentes como sujetos titulares de derechos")
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p El reconocimiento de niñas, niños y adolescentes como sujetos titulares de derechos, insta a que la sociedad modifique sus representaciones sobre ellos y ellas, que transforme sus relaciones y prácticas sociales, y que construya condiciones para que todos los espacios en donde se desarrolla la infancia y la adolescencia se conviertan en entornos protectores, garantes y seguros que favorezcan el goce efectivo de sus derechos (ICBF, 2016a).
    
    p En este componente formativo se brindan las orientaciones generales para la identificación de alertas o signos de amenaza, vulneración o inobservancia de derechos en las niñas, niños y mujeres gestantes; y se indica sobre los pasos a seguir con ocasión de la activación de las rutas integrales de atención en estos casos.
      br
      br
      | Adicionalmente, lo anterior permite conocer las actuaciones administrativas para el restablecimiento de derechos de niñas, niños y adolescentes que se adopten por parte de la autoridad administrativa, en el marco del debido proceso y con fundamento en los principios de protección integral, interés superior, prevalencia de derechos, corresponsabilidad, perspectiva de género, igualdad y no discriminación.
      br
      br
      | El contenido de este componente está basado en el Lineamiento técnico del modelo para la atención de niñas, niños y adolescentes con derechos amenazados o vulnerados (V6) y del Lineamiento técnico administrativo de ruta de actuaciones para el restablecimiento de derechos de niñas, niños y adolescentes con sus derechos inobservados, amenazados o vulnerados. 


    

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
