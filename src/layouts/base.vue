<template>
  <q-layout>
    <!-- Be sure to play with the Layout demo on docs -->
    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar color="secondary">
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer"/>
        <q-toolbar-title>
          Header
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab slot="title" icon="map" to="/your/route" replace label="One Tab"/>
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-layout-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer side="left" v-model="leftDrawer">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <ul>
          <li><router-link to="/">Home</router-link> </li>
          <li><router-link to="welcome">Welcome</router-link> </li>

        </ul>
        <!-- Content here -->
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>
    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar color="green">
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer"/>
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab slot="title" icon="map" to="/your/route" replace label="One Tab"/>
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-layout-footer>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data() {
    return {
      leftDrawer: true
    };
  }
};
</script>

<style>
</style>
