import { createApp } from 'vue'

import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseErrorDialog from './components/ui/BaseErrorDialog.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseErrorDialog', BaseErrorDialog)

app.mount('#app')
