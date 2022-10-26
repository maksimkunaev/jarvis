<template>
  <div class="main-root">
    <div class="main-photo"></div>
    <p class="main-item text-S main-description">v0.02</p>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.main-root
  display flex
  flex-direction: column
  align-items: center;
  width: var(--layout-width);
  max-width: 100%;
  margin: 0 auto;

.main-item, .main-photo {
  margin-top: 24px;
}

.main-photo
  width: 400px;
  height: 400px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }

.main-description
  text-align: center;
</style>
