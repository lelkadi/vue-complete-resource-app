<template>
  <component 
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :class="['base-btn', variant]"
    @click="handleClick"
  >
    <slot name="icon-left"></slot>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <slot name="icon-right"></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'danger', 'secondary'].includes(value)
    },
    href: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick(event) {
      if (!this.href) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: inherit;
  border: 1px solid;
}

.base-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.base-btn:hover::before {
  left: 100%;
}

.base-btn :deep(svg) {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

/* Primary variant */
.primary {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
  border-color: rgba(255, 255, 255, 0.3);
}

.primary:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.25));
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.primary:hover :deep(svg) {
  transform: translateX(4px);
}

/* Secondary variant */ 
.secondary {
  background: linear-gradient(135deg, rgba(203, 40, 40, 0.262), rgba(149, 137, 137, 0.15));
  border-color: rgba(255, 255, 255, 0.3);
}

.secondary:hover {
  background: linear-gradient(135deg, rgba(203, 40, 40, 0.262), rgba(149, 137, 137, 0.15));
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.secondary:hover :deep(svg) {
  transform: translateX(4px);
}

/* Danger variant */
.danger {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(220, 38, 38, 0.2));
  border-color: rgba(239, 68, 68, 0.4);
}

.danger:hover {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.5), rgba(220, 38, 38, 0.4));
  border-color: rgba(239, 68, 68, 0.6);
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);
}

.danger:active {
  transform: scale(0.98);
}

.danger:hover :deep(svg) {
  transform: rotate(10deg) scale(1.1);
}
</style>
