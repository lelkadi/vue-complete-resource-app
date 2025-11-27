<template>
  <li>
    <BaseCard>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </template>
      
      <template #header>
        <h3>{{ title }}</h3>
      </template>
      
      <p class="description">{{ description }}</p>
      
      <template #footer>
        <BaseButton :href="url" variant="primary">
          <template #default>View Resource</template>
          <template #icon-right>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </template>
        </BaseButton>
        
        <BaseButton variant="danger" @click="$emit('delete', id)">
          <template #icon-left>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </template>
          <template #default>Delete</template>
        </BaseButton>
      </template>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';

export default {
  name: 'LearningResource',
  components: {
    BaseCard,
    BaseButton
  },
  props: {
    id: Number,
    title: String,
    url: String,
    description: String
  }
}
</script>

<style scoped>
li {
  list-style: none;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

.description {
  margin: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
