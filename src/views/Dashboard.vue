<template>
  <div class="home">    
    <Header> </Header>
    <SideBar></SideBar>
     
  </div>
</template>   

<script>
import Header from "@/components/Toolbar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
    SideBar
   

  }
};
</script>
<style>
.footer {
    position:fixed;
    bottom:0;
    width:100%;
}
</style