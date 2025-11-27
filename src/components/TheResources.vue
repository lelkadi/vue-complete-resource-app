<template>
    <BaseCard>
      <BaseButton @click="selectedComponent = 'AddResource'" :variant="selectedComponent === 'AddResource' ? 'primary' : 'secondary'">Add Resource</BaseButton>
      <BaseButton @click="selectedComponent = 'ResourcesList'" :variant="selectedComponent === 'ResourcesList' ? 'primary' : 'secondary'">Stored Resources</BaseButton>
      <component :is="selectedComponent"></component>
    </BaseCard>
</template>

<script>
import BaseButton from './ui/BaseButton.vue';
import BaseCard from './ui/BaseCard.vue';
import ResourcesList from './ResourcesList.vue';
import AddResource from './AddResource.vue';

export default {
  name: 'TheResources',
  components: {
    BaseButton,
    BaseCard,
    ResourcesList,
    AddResource
  },
  data() {
    return {
      selectedComponent: 'ResourcesList'
    };
  }
}
</script>

<style scoped>
</style>
