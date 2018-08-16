Vue.component("message", {
  template: `
  `,
  data() {
    return {
      tasks: [
        { task: "001", complete: true },
        { task: "002", complete: true },
        { task: "003", complete: true },
        { task: "004", complete: true }
      ]
    };
  }
});

new Vue({
  el: "#root"
});
