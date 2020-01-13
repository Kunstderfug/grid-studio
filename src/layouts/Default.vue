<template>
  <div id="app">
    <header class="header" id="intro">
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
      <span class="footer__copyright"
        >V. Gryaznov © {{ new Date().getFullYear() }}</span
      >
      <br />
      <span class="footer__links">
        <a href="//gryaznoff.com" target="_blank" rel="noreferrer">Webpage</a>
        <a
          href="//facebook.com/vyacheslav.gryaznov"
          target="_blank"
          rel="noreferrer"
          >Facebook</a
        >
        <a
          href="//youtube.com/VyacheslavGryaznovPiano"
          target="_blank"
          rel="noreferrer"
          >YouTube</a
        >
        <a
          href="//mailto:gryaznov.studio@gmail.com"
          target="_blank"
          rel="noreferrer"
          >@email</a
        >
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
  margin: -1rem auto 2rem auto;
  // padding: 1.5vw 15px 0;
  padding: 1.3rem;
}

@media screen and (min-width: 768px) {
  .main {
    padding: 0 5rem;
    min-height: calc(100vh - 10rem);
  }
}

@media screen and (min-width: 1024px) {
  .main {
    max-width: calc(var(--content-width) * 1.5);
    min-height: calc(100vh - 12rem);
    padding: 0 6rem;
  }
}

.footer {
  height: auto;
  margin-top: 2rem;
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
}

@media screen and (min-width: 768px) {
  .footer {
    padding-top: 0;
    margin-top: -0.7rem;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    padding: calc(var(--space) / 2);
  }
}
</style>
