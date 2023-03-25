<script>
export default{
    props:{
        application: []
    },
    methods:{
        printMsg(){
            console.log(this.application.title);
        }
    }
}
</script>
<template>
    <div class="card">
        <div class="imageSection">
            <img :src="`../src/assets/${application.imageName}.png`" />
        </div>
        <div class="description">
           <h2>{{application.title}}</h2>
           <p>{{ application.description }}</p>
           <RouterLink :to="application.route"> 
            <button @click="printMsg"> Go To Application</button>
           </RouterLink>
        </div>
    </div>
</template>
<style>
.card{
    display: flex;
    flex-direction: column;
    width: 20em;
    border: 6px solid #000;
    
}
.imageSection{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 15em;
    background-color: #fdec00;
    display: flex;
    justify-content: center;
}
.imageSection > img{
    width: 90%;
    height: 13em;
    object-fit: cover;  
    margin: 10px;
    border: 5px solid #000;
}
.description{
    background-color: #fdec00;
    height: 12em;
    padding: 1em;
}
.description h2{
    font-weight: bold;
}
.description button{
    border: 3px solid #000;
    padding: 1em;
    width: 100%;
    margin-top: 5px;
    font-weight: bold;
    background-color: #ff6ce2;
    cursor: pointer;
}
.description button:hover{
    transition: all 0.3s;
    border-left: 6px solid #000;
    border-bottom: 6px solid #000;
    transform: translateX(3px);
    transform: translateY(-3px);
}
</style>