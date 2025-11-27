<template>
  <header>
    <h1>{{ title }}</h1>
    <p class="tagline">Your curated collection of learning resources</p>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

header h1 {
  background: linear-gradient(135deg, #ffffff 0%, #f0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(255, 255, 255, 0.3);
  animation: fadeInDown 0.6s ease-out;
}

.tagline {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.5rem;
  letter-spacing: 0.02em;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }
  
  .tagline {
    font-size: 0.9rem;
  }
}
</style>
