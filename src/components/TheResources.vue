<template>
    <BaseCard>
      <BaseButton @click="selectedComponent = 'AddResource'" :variant="selectedComponent === 'AddResource' ? 'primary' : 'secondary'">Add Resource</BaseButton>
      <BaseButton @click="selectedComponent = 'ResourcesList'" :variant="selectedComponent === 'ResourcesList' ? 'primary' : 'secondary'">Stored Resources</BaseButton>
      <KeepAlive>
      <component :is="selectedComponent"></component>
      </KeepAlive>
    </BaseCard>
</template>

<script>
import ResourcesList from './ResourcesList.vue';
import AddResource from './AddResource.vue';

export default {
  name: 'TheResources',
  components: {
    ResourcesList,
    AddResource
  },
  data() {
    return {
      selectedComponent: 'ResourcesList',
      resources: [
                { id: 1, title: 'Vue.js', url: 'https://vuejs.org', description: 'The progressive JavaScript framework.' },
                { id: 2, title: 'Vue Router', url: 'https://router.vuejs.org', description: 'The official router for Vue.js.' },
                { id: 3, title: 'Vue Composition API', url: 'https://composition-api.vuejs.org', description: 'API for composing logic in Vue components.' },
                { id: 4, title: 'Vue Test Utils', url: 'https://test-utils.vuejs.org', description: 'Official testing utilities for Vue.js.' },
            ]
    };
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource
    };
  },
  methods: {
    addResource(title, url, description) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        url: url,
        description: description
      };
      this.resources.unshift(newResource);
    },
    removeResource(resourceId) {
      this.resources = this.resources.filter(resource => resource.id !== resourceId);
    }
  }
}
</script>

<style scoped>
</style>
