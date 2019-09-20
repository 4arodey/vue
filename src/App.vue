<template>
  <v-app>
  <Layout>
    <Menu></Menu>
  </Layout>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    Menu,
    Layout,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
  /*@import "../node_modules/wijmo/styles/wijmo.css";*/

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
