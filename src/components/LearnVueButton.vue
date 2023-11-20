<template>
    <button class="lv-button">
        el boton!
        <slot />
    </button>
</template>
<style scoped>
    .lv-button{
        background:grey;
        color:black;
        border:3px solid green;
        padding:10px;
    }
</style>