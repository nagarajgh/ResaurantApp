<script>
export default {
    name: 'Dropdown',
    props:{
        labelName: String,
        items: Array,
        // defaultValue: String,
    },
    data() {
        return {
            selectedValue:'',
        };
    },

};
</script>

<template>
    <div class="">
        <label class="text-text1 font-font2 text-xl" for="select">{{labelName ? labelName : ""}} : </label>
        <select class="rounded-md" name="select" id="" v-model="selectedValue" >
            <option value="" selected hidden> {{ items[0]}}</option>
            <option v-for="item in items" :value="item"> {{ item }}</option>
        </select>
    </div>
</template>

<style  scoped>
select{
    background-color: inherit;
    padding: 10px 19px;
    color: #b6b6b6;
    border: 1px solid #d5d5d5; 
}
</style>