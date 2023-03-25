<script>
import StickyNote from "./views/sticky-note.vue";

export default {
  data() {
    return {
      bindText: "",
      index: "",
      text: "",
      notes: [],
      isOpen: false,
    };
  },

  components: {
    StickyNote,
  },
  methods: {
    addNote() {
      this.notes.push(this.text);
      this.text = "";
    },

    handleCallback(index) {
      console.log(index);
      this.index = index;
      this.notes.splice(index, 1);
    },
    editNoteHandler(data) {
      console.log(this.data);
      this.index = data.index;
      this.isOpen = data.isOpen
      console.log(this.isOpen);
     
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <img :src="'../src/assets/logo.png'" />
      </div>
      <div class="input_field">
        <input
          @keyup.enter="addNote"
          type="text"
          v-model="text"
          placeholder="Enter Note..."
        />
      </div>
    </div>
    <div class="sticky_notes_body">
      <StickyNote
        :notes="notes"
        @getTheData="handleCallback"
        @editTheData="editNoteHandler"
      />
    </div>

    <Teleport to="#modal" >
      <div v-if="isOpen" class="mainModal">
      <div  class="backdrop"  @click="isOpen = false"> </div>
        <div  class="modal" >
          <textarea type="text" v-model="notes[index]" />
          <!-- <button @click="isOpen = false">Close</button> -->
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.main{
  background-color: #272727;

}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
}

.input_field input[type="text"] {
  margin: 20px;
  border: none;
  border-radius: 50px;
  width: 350px;
  height: 50px;
  background-color: #272727;
  box-shadow: 4px 0px 12px rgba(255, 255, 255, 0.25), 0px 4px 12px 1px #000000;
  color: #cf7f21;
  font-size: 20px;
  padding-left: 20px;
}
.input_field input[type="text"]:focus {
  outline: none;
  box-shadow: 2px 0px 12px rgba(255, 255, 255, 0.25), 0px 2px 12px 1px #000000;
}
.input_field input[type="text"]::placeholder {
  color: #cf7e216d;
}
.sticky_notes_body {
  width: 90%;
  margin: 2% auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3em;
}
.mainModal{
  overflow: hidden;
}
.backdrop{
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: fixed;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4em);
}
.modal{
  height: 40vh;
  width: 40%;
  background-color: #fff;
  backdrop-filter: blur(25px);
  position: absolute;
  left: 33%;
  bottom: 40vh;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  box-shadow: 1px -1px 0px rgba(255, 255, 255, 0.45), -1px 1px 0px 0px #000000;
  
}
.modal textarea{
  resize: none;
  height: 30vh;
  width: 85%;
  border: none;
  outline: none;
  background-color: #272727;
  color: #cf7f21;
  font-size: 1.5rem;
  font-family:  "Neucha", cursive;
  padding: 1em;
  box-shadow: 4px 0px 12px rgba(255, 255, 255, 0.25), 0px 4px 12px 1px #000000;
  border-radius: 6px;
}
.modal textarea:focus{
  box-shadow: 2px 0px 12px rgba(255, 255, 255, 0.25), 0px 2px 12px 1px #000000;
}
</style>
