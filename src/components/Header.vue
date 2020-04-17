<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700206-icon-39-stars-512.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <h3 class="title is-3" style="color : #7957d5;">Pérgamo</h3>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Sobre
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link to="/cadastro">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
          </router-link>
          <router-link to="/login">
            <a class="button is-light">
              Login
            </a>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  
}
</script>
<style>

</style>