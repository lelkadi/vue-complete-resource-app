<template>
  <div class="card">
    <div v-if="$slots.icon" class="card-icon">
      <slot name="icon"></slot>
    </div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <div class="card-content">
      <slot></slot>
    </div>
    <nav v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.5);
}

.card:hover::before {
  opacity: 1;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.card-icon :deep(svg) {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.9);
}

.card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2));
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

header :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.card-content {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.card-footer {
  margin-top: auto;
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }
  
  header :deep(h3) {
    font-size: 1.25rem;
  }
}
</style>
