<template>
    <el-menu-item>
        <slot></slot>
    </el-menu-item>
</template>
<script>
export default {
    props: ['links'],
}
</script>
