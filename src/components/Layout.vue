<template>
    <div class="work">
        <top-menu></top-menu>
        <app-main></app-main>
    </div>
    

    
</template>
<script>
import TopMenu from "./TopMenu"
import AppMain from "./AppMain"

export default {
    name: "Layout",
    components: {
        TopMenu,
        AppMain
    }
}
</script>
