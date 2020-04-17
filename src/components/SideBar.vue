<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
    >
      <div class="p-1">
        <h3
          class="title is-3"
          style="color : #7957d5;"
          tag="router-link"
          :to="{ path: '/' }"
        >
          Pérgamo
        </h3>

        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Perfil"></b-menu-item>
            <b-menu-item icon="settings">
              <template slot="label" slot-scope="props">
                Admin
                <b-icon
                  class="is-pulled-right"
                  :icon="props.expanded ? 'menu-down' : 'menu-up'"
                ></b-icon>
              </template>
              <b-menu-item icon="account" label="Users"></b-menu-item>
              <b-menu-item icon="cellphone-link">
                <template slot="label">
                  Devices
                  <b-dropdown
                    aria-role="list"
                    class="is-pulled-right"
                    position="is-bottom-left"
                  >
                    <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                    <b-dropdown-item aria-role="listitem"
                      >Action</b-dropdown-item
                    >
                    <b-dropdown-item aria-role="listitem"
                      >Another action</b-dropdown-item
                    >
                    <b-dropdown-item aria-role="listitem"
                      >Something else</b-dropdown-item
                    >
                  </b-dropdown>
                </template>
              </b-menu-item>
              <b-menu-item
                icon="cash-multiple"
                label="Payments"
                disabled
              ></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" label="My Account">
              <b-menu-item label="Account data"></b-menu-item>
              <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <b-menu-item
              label="Expo"
              icon="link"
              tag="router-link"
              target="_blank"
              to="/expo"
            ></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
    };
  },
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
