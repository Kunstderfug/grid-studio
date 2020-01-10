<template>
  <g-link class="logo" to="/">
    <span class="logo__text">&larr; back to all posts</span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--link-color) !important;

  &:hover {
    color: var(--link-color-p) !important;
    border-bottom: none;
  }

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>