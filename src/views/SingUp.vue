<template>
  <div class="home">
    <Header> </Header>
    <section>
       <div class="flex-container center" style="padding: 16px;">
      <SingUp  class="flex-item" style="padding-bottom: 1.5rem"> </SingUp>
      </div>
    </section>
    <Footer class="footer" style="padding: 1.5rem"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SingUp from "@/components/SingUp.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Cadastrar",
  components: {
    Header,
    SingUp,
    Footer,
  },
};
</script>
<style scoped>
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
</style>