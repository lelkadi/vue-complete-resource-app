<template>
  <TheHeader title="RememberMe" />
  <ResourcesList :resources="storedResources" />
  <TheFooter />
</template>

<script>
import ResourcesList from './components/ResourcesList.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';

export default {
  name: 'App',
  components: {
    ResourcesList,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      storedResources: [
        { id: 1, title: 'Vue.js', url: 'https://vuejs.org', description: 'The progressive JavaScript framework.' },
        { id: 2, title: 'Vue Router', url: 'https://router.vuejs.org', description: 'The official router for Vue.js.' },
        { id: 3, title: 'Vue Composition API', url: 'https://composition-api.vuejs.org', description: 'API for composing logic in Vue components.' },
        { id: 4, title: 'Vue Test Utils', url: 'https://test-utils.vuejs.org', description: 'Official testing utilities for Vue.js.' },
        { id: 5, title: 'Vue Router', url: 'https://router.vuejs.org', description: 'The official router for Vue.js.' },
        { id: 6, title: 'Vue Composition API', url: 'https://composition-api.vuejs.org', description: 'API for composing logic in Vue components.' },
        { id: 7, title: 'Vue Test Utils', url: 'https://test-utils.vuejs.org', description: 'Official testing utilities for Vue.js.' },
        { id: 8, title: 'Vue Router', url: 'https://router.vuejs.org', description: 'The official router for Vue.js.' },
        { id: 9, title: 'Vue Composition API', url: 'https://composition-api.vuejs.org', description: 'API for composing logic in Vue components.' },
        { id: 10, title: 'Vue Test Utils', url: 'https://test-utils.vuejs.org', description: 'Official testing utilities for Vue.js.' },
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 119, 255, 0.3), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(138, 180, 248, 0.3), transparent 50%);
  pointer-events: none;
  z-index: 0;
}

#app {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  margin: 0;
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  flex: 1;
}

@media (max-width: 768px) {
  ul {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
}
</style>
