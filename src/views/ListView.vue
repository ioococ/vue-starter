<template>
  <div class="list">
    <p v-html="this.id"></p>
    <p v-text="this.name" :title="name"></p>
  </div>
</template>
<script type="module">
export default {
  name: "ListView",
  created() {
    // console.log("init");
    this.id = this.$route.query.id
    this.name = this.$route.query.name
    console.log(this.$route.query);
  },
  data() {
    return {
      id: "",
      name: "",
    }
  },
  methods: {
  }
}
</script>
