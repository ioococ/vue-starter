<template>
  <div class="test">
    <p v-html="text"></p>
    <!-- <router-link to="test/a">A</router-link> | -->
    <!-- <router-link to="test/b">B</router-link> | -->
    <!-- <router-link to="test/c">C</router-link> -->
    <!-- <router-view /> -->
    <p></p>
    <div>
      <el-input v-model="data1" placeholder="请输入" style="display: inline;" />
      <el-select v-model="symbol" placeholder="请选择" style="width: 80px;" >
        <el-option label="+" value="+" />
        <el-option label="-" value="-" />
        <el-option label="×" value="×" />
        <el-option label="÷" value="÷" />
      </el-select>
      <el-input v-model="data2" placeholder="请输入" style="display: inline;" />
      <el-button @click="calc">=</el-button>
    </div>
    <p></p>
    <el-button @click="toList()">List</el-button>
    <el-button @click="check()">Change</el-button>
    <p v-text="name" :title="name"></p>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">{{ item.name }}</li>
    </ul>
    <p v-if="status">Onei</p>
    <p v-show="status">uiYzzi</p>
    <ui-yzzi msg="嘈嘈切切错杂弹" @key="show"></ui-yzzi>
    <span v-text="msg"></span>
  </div>
</template>
<script type="module">
import uiYzzi from "../components/uiYzzi.vue";
export default {
  name: "TestView",
  created() {
    // console.log("init");
  },
  components: {
    uiYzzi
  },
  data() {
    return {
      status: false,
      data1: '',
      data2: '',
      symbol: '+',
      result: '',
      name: "Onei",
      text: "<h1>This is a test page</h1>",
      msg: '',
      list: [{ id: 1, name: "Onei" }, { id: 2, name: "uiYzzi" }]
    }
  },
  methods: {
    calc() {
      switch (this.symbol) {
        case '+':
          this.result = Number.parseFloat(this.data1) + Number.parseFloat(this.data2);
          break;
        case '-':
          this.result = Number.parseFloat(this.data1) - Number.parseFloat(this.data2);
          break;
        case '×':
          this.result = Number.parseFloat(this.data1) * Number.parseFloat(this.data2);
          break;
        case '÷':
          this.result = Number.parseFloat(this.data1) / Number.parseFloat(this.data2);
          break;
      }
      console.log(this.result);
    },
    check() {
      this.status = !this.status;
    },
    toList() {
      this.$router.push({
        path: '/list',
        query: {
          id: '1',
          name: 'Onei'
        }
      })
    },
    show(e) {
      this.msg = e.msg;
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: var(--el-color-primary);
}
</style>
