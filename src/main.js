import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createStore } from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from './router'

const store = createStore({
  state: {
    foto: '',
    nome: '',
    descricao: ''
  },
  mutations: {
    setVal (state, payload) {
      const { foto, descricao } = payload
      state.foto = foto
      state.descricao = descricao
    }
  }
})

createApp(App)
  .use(BootstrapVue3)
  .use(router)
  .use(store)
  .mount('#app')
