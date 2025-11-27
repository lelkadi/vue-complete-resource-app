<template>
    <BaseCard>
        <h2>Add a New Resource</h2>

        <form @submit.prevent="submitForm">
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="title">
            </div>
            <div>
                <label for="url">URL:</label>
                <input type="text" id="url" v-model="url">
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" v-model="description"></textarea>
            </div>
            <BaseButton type="submit" variant="primary">Add Resource</BaseButton>
        </form>
    </BaseCard>
</template>

<script>
export default {
    name: 'AddResource',
    data() {
        return {
            title: '',
            url: '',
            description: ''
        };
    },
    inject: ['addResource', 'errorDialog'],
    methods: {
        submitForm() {
            // Validate input
            if (this.title.trim() === '' || this.url.trim() === '' || this.description.trim() === '') {
                this.errorDialog('Invalid input', 'Please enter a valid input for all fields.');

            } else {
                this.addResource(this.title, this.url, this.description);
            }

            this.title = '';
            this.url = '';
            this.description = '';
        }
    }
}
</script>

<style scoped>
form {
    margin: 1rem;
}

form div {
    margin: 0.5rem 0;
}

form div label {
    font-weight: bold;
}

form div input,
form div textarea {
    width: 100%;
    padding: 0.15rem;
}

form div textarea {
    min-height: 10rem;
}
</style>
