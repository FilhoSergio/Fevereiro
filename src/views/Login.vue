<template>
  <div class="home">
    <Header> </Header>
    <section>
      <div class="flex-container center" style="padding: 16px;">
        <Login class="flex-item index-1" style="padding: 1.5rem"> </Login>
      </div>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
// import Carousel from "@/components/Carousel.vue";
// import About from "@/components/About.vue";

export default {
  name: "Logar",
  components: {
    Header,
    Footer,
    Login,
    // Carousel,
    // About,
  },
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.flex-item {
  justify-content: center;
}
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}
.center {
  justify-content: center;
}
.index-1 {
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1),
    0 0px 0 1px rgba($scheme-invert, 0.02);
}
</style>
