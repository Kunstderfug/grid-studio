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
      <span class="footer__copyright">V. Gryaznov © {{ new Date().getFullYear() }}</span>
      <p></p>
      <span class="footer__links">
        <div>
          <a href="//gryaznoff.com">Personal webpage</a>
        </div>
        <div>
          <a href="//facebook.com/vyacheslav.gryaznov">Facebook</a>
        </div>
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

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  font-family: "Open Sans", sans-serif;
  a {
    color: var(--link-color);
    text-decoration: none;
    text-transform: uppercase;
    -webkit-transition: all 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }

  a:hover,
  a:focus {
    color: var(--link-color-p);
    // border-bottom: 1px solid #af0606;
  }
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
  color: var(--link-color-p);
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: center;
    margin: 0 1em;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    text-transform: uppercase;
    -webkit-transition: all 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }

  a:hover,
  a:focus {
    color: var(--link-color-p);
    border-bottom: 1px solid var(--link-color-p);
  }
}

button {
  font-family: "Open Sans", sans-serif;
  color: var(--link-color);
  font-size: 1.2rem;
  font-weight: 100;
  padding: 0.5rem 2rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid var(--link-color);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button:hover,
button:focus {
  color: var(--link-color-p);
  border: 1px solid var(--link-color-p);
}

.eq {
  margin-bottom: 1rem;
  background-color: var(--eq-color);
  color: var(--body-color);
  border-radius: 0.7rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-family: monospace;
}

details {
  cursor: pointer;
}

details summary {
  color: #b87023;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

details summary:hover,
details summary:focus {
  color: #af0606;
}

details p {
  color: #222;
}

form {
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: #fff;
}

@media only screen and (min-width: 768px) {
  form {
    position: relative;
    width: 70%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1024px) {
  form {
    position: relative;
    width: 60%;
    margin: 0 auto;
  }
}

label,
input,
select,
textarea {
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}

label {
  font-size: 1.3rem;
}

input {
  color: rgb(139, 139, 139);
}

input,
textarea {
  border: 1px solid lighten(#b87023, 30%);
  padding: 0.3em;
}

input:focus,
textarea:focus {
  border: 1px solid #af0606;
  outline: none;
}
</style>
