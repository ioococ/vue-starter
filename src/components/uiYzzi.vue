<template>
    <div>
        <el-button @click="show()">Show</el-button>
        <p></p>
        <span v-text="msg"></span>
    </div>
</template>
<script type="module">
export default {
    name: "uiYzzi",
    props: {
        msg: String
    },
    methods: {
        show() {
            this.$emit("key", { msg: "大珠小珠落玉盘" })
        }
    }
}
</script>