<script>
import Card from './components/Card-primary.vue'

export default{
    data(){
        return{
            application:[
                {
                    title: "Restaurent App",
                    description: "Showcasing the Foods and chefs and Managing the orders and payments.",
                    imageName: "restaurentBg",
                    route: "restaurent",
                    
                },
                {
                    title: "Sticky Note  App",
                    description: "Adding, Deleting and editing Stickynotes with different colors",
                    imageName: "note",
                    route: "sticky-note"
                },
                {
                    title: "Test",
                    description: "For testing purpose",
                    imageName: "note",
                    route: "test"
                },
               
            ]
        }
    },
    components:{
        Card,
    }
}
</script>
<template>
  <div class="home">
    <div class="home-header text-9xl">
      <h1 class="text-5xl">APPLICATIONS</h1> 
    </div>
    <div  class="home-body">
        <div v-for="app in application">
            <Card :application="app"/>
        </div>
    </div>
  </div>
</template>

<style scoped>

.home{
    color: #000;
    padding: 0;
    margin: auto;
    border: 5px solid #000;
    font-family:fantasy;
}
.home-header {
position: sticky;
  display: flex;
  padding: 2em 0;
  background-color: #0004ff;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #000;
  font-size: 20px;
  color: yellow;
}
.home-body{
    display: flex;
    background-color: #a200ff;
    padding: 1em;
    padding: 8% 12%;
    justify-content: flex-start;
    gap: 2em;
    flex-wrap: wrap;
  
}
.home-body > div{
    flex: 23%;
    max-width: 22em;
}
</style>
