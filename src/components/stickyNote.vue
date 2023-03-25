<script>
export default {
  props: {
    index: "",
    notes: [],
    isOpen: Boolean,
  },
  data() {
    return {
      noteText: "",
      colors : ["#fffd75", "#faaaca", "#69f098", "#ffff88", "#38a1c5"]
    };
  },
  computed:{},
  methods: {
    getNoteId(index) {
      this.$emit("getTheData", index);
    },
    getNoteIdText(index) {
    let emmitData = {
        index: index,
        isOpen: true
    }
      this.$emit("editTheData", emmitData);
      this.isOpen = true
    },
    randNum(){
        return Math.floor(Math.random() * this.colors.length)
    },
    getColor() {
      let color = this.colors[this.randNum()]
      return {
        backgroundColor: color,
      }
    }
  },
  
};
</script>

<template>
    
  <div v-for="(note, index) in notes" class="sticky_note" :style="getColor()">
    <div class="sticky_note">
      <div class="sticky_note_header">
        <div class="icon" @click="getNoteId(index)">
          <img :src="'../src/assets/trash.png'" />
        </div>
        <div class="icon" @click="getNoteIdText(index)">
          <img :src="'../src/assets/edit.png'" />
        </div>
      </div>
      <div
        class="sticky_note_body"
        @blur="handleBlur(index)"
      >
      <h3>{{ note }}</h3>
      <!-- </textarea> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky_note:hover{
    /* transform: skew(-0.01turn, 1deg); */
    transform: skew(1deg, -1deg);
    transition: all 0.5s;

}

.sticky_note_body {
  resize: none;
  font-family: "Neucha", cursive;
  height: 250px;
  width: 250px;
  /* background-color: rgb(255, 0,255); */
  box-shadow: 0 9px 9px -6px #000;
  color: #000;
  padding: 15px;
  appearance: none;
  border: none;
  font-size: 1.3rem;
}
.sticky_note_body:focus {
  appearance: none;
  border: none;
  outline: none;
}
.sticky_note_header {
  height: 60px;
  width: 280px;
  /* background-color: #c36d0c; */
  display: flex;
  align-items: center;
}
.icon {
  border: none;
  /* background-color: #c36d0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0 15px;
  /* box-shadow: -1px 3px 5px #989898, 3px -1px 5px #454545; */
}
.icon img {
  height: 20px;
  opacity: 0.5;
}
</style>
