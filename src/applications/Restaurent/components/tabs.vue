<script>
export default{
    props:{

    },
    data(){
        return{
            index: 0,
            data:[
                {
                    title: 'title1',
                    description: ['t1 - desc1', 't1 - desc2']
                },{
                    title: 'title1',
                    description: ['t2 - desc1', 't2 - desc2']
                }
            ]
        }
    },
    methods: {
        getIndex(i){
            this.index = i
        }
    }
}
</script>
<template>
<div class="tab">
    <div  v-for="(details, ind) in data"  class="button-section ">
        <button @click="getIndex(ind)"  class="px-10 py-3 bg-primary rounded">{{ details.title }}</button>
    </div>

    <div class="detail-section">
        <p v-for="details in data[index].description" class="text-lg text-text3"> {{details}} </p>
    </div>
</div>
</template>
<style></style>