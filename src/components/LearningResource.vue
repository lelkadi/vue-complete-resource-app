<template>
  <li>
    <BaseCard>
      <template #icon>
        <BookIcon />
      </template>
      
      <template #header>
        <h3>{{ title }}</h3>
      </template>
      
      <p class="description">{{ description }}</p>
      
      <template #footer>
        <BaseButton :href="url" variant="primary">
          <template #default>View Resource</template>
          <template #icon-right>
            <ArrowRightIcon />
          </template>
        </BaseButton>
        
        <BaseButton variant="danger" @click="$emit('delete', id)">
          <template #icon-left>
            <TrashIcon />
          </template>
        </BaseButton>
      </template>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';
import BookIcon from './icons/BookIcon.vue';
import ArrowRightIcon from './icons/ArrowRightIcon.vue';
import TrashIcon from './icons/TrashIcon.vue';

export default {
  name: 'LearningResource',
  components: {
    BaseCard,
    BaseButton,
    BookIcon,
    ArrowRightIcon,
    TrashIcon
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
