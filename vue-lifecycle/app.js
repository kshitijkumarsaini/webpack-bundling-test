const vm = Vue.createApp({
  data() {
    return {
      message: "hello world!",
    };
  },
  beforeCreate() {
    console.log("before create", this.message);
  },
  created() {
    console.log("created", this.message);
  },
  beforeMount() {
    console.log("before mount", this.$el);
  },
  mounted() {
    console.log("mounted", this.$el);
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
});

vm.mount("#app");
