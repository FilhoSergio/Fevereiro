<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="control">
          <b-switch></b-switch>
        </div>
        
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {};
</script>
<style></style>
