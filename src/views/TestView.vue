<template>
  <div class="test">
    <p v-html="text"></p>
    <p v-text="name" :title="name"></p>
    <ul >
      <li v-for="(item,index) in list" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="check()">Change</button>
    <p v-if="status">Onei</p>
    <p v-show="status">uiYzzi</p>
  </div>
</template>
<script type="module">
export default{
  name: "TestView",
  create() {
    console.log("init");
  },
  data() {
    return {
      status: false,
      name: "Onei",
      text: "<h1>This is an test page</h1>",
      list: [{id: 1,name: "Onei"},{id: 2,name: "uiYzzi"}]
    }
  },
  methods:{
    check(){
      this.status = !this.status;
    }
  }
}
</script>
