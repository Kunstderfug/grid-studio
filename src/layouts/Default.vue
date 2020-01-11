<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <span class="footer__copyright">V. Gryaznov © {{ new Date().getFullYear() }}</span>
      <br />
      <span class="footer__links">
        <a href="//gryaznoff.com">Webpage</a>
        <a href="//facebook.com/vyacheslav.gryaznov">Facebook</a>
        <a href="//youtube.com/VyacheslavGryaznovPiano">YouTube</a>
        <a href="//mailto:gryaznov.studio@gmail.com">@email</a>
      </span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
};
</script>

<style lang="scss">
.header {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

hr {
  width: 50%;
  border: 1px solid var(--hrcolor);
}

.main {
  width: 100%;
  margin: 0 auto;
  // padding: 1.5vw 15px 0;
  padding: 0.7rem;
}

@media screen and (min-width: 768px) {
  .main {
    padding: 0 3rem;
  }
}

@media screen and (min-width: 1024px) {
  .main {
    padding: 0 6rem;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;
  a {
    margin: 0 0.3rem;
  }

  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 1em;
  }
  hr {
    border: 1px solid var(--link-color);
  }
}
</style>
