<template>
    <ul>
        <LearningResource
            v-for="resource in resources"
            :key="resource.id"
            :id="resource.id"
            :title="resource.title"
            :url="resource.url"
            :description="resource.description"
            @delete="removeResource"
        />
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
    name: 'ResourcesList',
    components: {
        LearningResource
    },
    data() {
        return {
            resources: [
                { id: 1, title: 'Vue.js', url: 'https://vuejs.org', description: 'The progressive JavaScript framework.' },
                { id: 2, title: 'Vue Router', url: 'https://router.vuejs.org', description: 'The official router for Vue.js.' },
                { id: 3, title: 'Vue Composition API', url: 'https://composition-api.vuejs.org', description: 'API for composing logic in Vue components.' },
                { id: 4, title: 'Vue Test Utils', url: 'https://test-utils.vuejs.org', description: 'Official testing utilities for Vue.js.' },
            ]
        }
    },
    methods: {
    removeResource(resourceId) {
      this.resources = this.resources.filter(resource => resource.id !== resourceId);
    }
  }
}
</script>

<style scoped>
</style>
