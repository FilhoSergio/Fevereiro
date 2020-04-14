<template>
  <section>
    <b-carousel
      :arrow="arrow"
      :arrow-both="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.title }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      carousels: [
        {
          title: "Agora ficou mais fácil organizar seus animes favoritos",
          color: "info"
        },
        { title: "Criar listas personalizadas", color: "success" },
        { title: "Compartilhar com a sua rede de amigos", color: "warning" },
        {
          title:
            "Com Pérgamo você classifica e organiza sua lista de animes assistidos e os que deseja assistir",
          color: "danger"
        }
      ]
    };
  }
};
</script>
