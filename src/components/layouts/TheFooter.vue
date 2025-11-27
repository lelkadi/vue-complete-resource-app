<template>
  <footer>
    <p>&copy; 2025 Vue Resources. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
footer {
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
}

footer p {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02em;
}
</style>
