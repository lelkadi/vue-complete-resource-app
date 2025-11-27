<template>
    <dialog ref="dialog">
        <h2>{{ dialogTitle }}</h2>
        <p>{{ dialogMessage }}</p>
        <BaseButton @click="close" variant="secondary">OK</BaseButton>
    </dialog>
</template>

<script>
export default {
    name: 'BaseErrorDialog',
    data() {
        return {
            dialogTitle: '',
            dialogMessage: ''
        }
    },
    methods: {
        open(title, message) {
            this.dialogTitle = title;
            this.dialogMessage = message;
            this.$refs.dialog.showModal();
        },
        close() {
            this.$refs.dialog.close();
        }
    }
}
</script>

<style scoped>
dialog {
    border: none;
    border-radius: 12px;
    padding: 2rem;
    min-width: 300px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
}

h2 {
    margin-bottom: 1rem;
    color: #333;
}

p {
    margin-bottom: 1.5rem;
    color: #666;
}
</style>