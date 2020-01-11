<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    @click.prevent="toggleTheme"
    class="toggle-theme"
  >
    <img v-if="darkTheme" src="../assets/images/milk.svg" width="30" height="30" />
    <img v-else src="../assets/images/coffee.svg" width="30" height="30" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    };
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;

      // This is using a script that is added in index.html
      window.__setPreferredTheme(this.darkTheme ? "dark" : "light");
    }
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
  }
};
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    border: 0;
  }
  &:focus {
    outline: none;
    border: 0;
  }
  img {
    transition: opacity 1s;
  }
}
</style>