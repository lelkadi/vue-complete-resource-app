<template>
    <ul>
        <LearningResource
            v-for="resource in resources"
            :key="resource.id"
            :id="resource.id"
            :title="resource.title"
            :url="resource.url"
            :description="resource.description"
            @delete="removeResource($event)"
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
    inject: ['resources', 'removeResource']
}
</script>

<style scoped>
</style>
