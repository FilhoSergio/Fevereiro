<template>
  <div class="home">
    <Header> </Header>
    <div style="padding: 1.5rem">
      <b-field grouped group-multiline position="is-centered">
        <h3 class="title">Página não encontrada : o</h3>
      </b-field>
    </div>
    <section class="container">
      <img src="@/assets/undraw_page_not_found_su7k.svg" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
