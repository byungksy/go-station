<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Gaon Streaming
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <!--      <q-tabs align="left">-->
      <!--        <q-route-tab to="/page1" label="Page One" />-->
      <!--        <q-route-tab to="/page2" label="Page Two" />-->
      <!--        <q-route-tab to="/page3" label="Page Three" />-->
      <!--      </q-tabs>-->
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile">
      <!-- drawer content -->
      <div class="q-pa-md">
        <router-link :to="{name: 'login'}"
          ><q-btn v-bind="{label: 'Login Page'}"
        /></router-link>
        <br />
        <router-link :to="{name: 'channels'}"
          ><q-btn v-bind="{label: 'Channels Page'}"
        /></router-link>
        <br />
        <router-link :to="{name: 'live-channel'}"
          ><q-btn v-bind="{label: 'Channel - Live Page'}"
        /></router-link>
        <br />
        <router-link :to="{name: 'record-channel'}"
          ><q-btn v-bind="{label: 'Channel - Record Page'}"
        /></router-link>
      </div>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <chat-place />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ChatPlace from 'src/components/ChatPlace.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {ChatPlace},
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
