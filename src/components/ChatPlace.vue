<template>
  <div class="q-pa-md row justify-center">
    <div>
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        stamp="7 minutes ago"
        sent
        text-color="white"
        bg-color="primary"
        size='6'
      >
        <div>
          Hey there!
        </div>

        <div>
          Have you seen Quasar?
          <img src="https://cdn.quasar.dev/img/discord-omq.png" class="my-emoticon">
        </div>
      </q-chat-message>

      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        bg-color="amber"
        size='6'
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatPlace.vue'
};
</script>

<style scoped>
.my-emoji, .my-emoticon {
  height: 2em;
  vertical-align: middle;
  width: 2em;
}
</style>
