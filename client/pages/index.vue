<template>
  <div class="flex flex-col h-screen">
    <h1 class="text-3xl font-semibold mb-4">Chat Room</h1>
    <div class="flex-grow overflow-y-auto">
      <div v-for="(message, index) in messages" :key="index" class="mb-2">
        <div class="bg-gray-200 rounded-md p-2">
          {{ message }}
        </div>
      </div>
    </div>
    <input v-model="newMessage" @keyup.enter="sendMessage"
           placeholder="Type your message..."
           class="mt-4 p-2 border border-gray-300 rounded-md focus:outline-none"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push(this.newMessage);
        this.newMessage = '';
      }
    },
  },
};
</script>
