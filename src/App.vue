<template>
  <div class="row">
    <div class="col-md-12 backgroupd-box" style="top: -50px">
      <nav>
        <router-link class="link" to="/">Blog</router-link> |
        <router-link class="link" to="/sobre">Sobre</router-link> |
        <router-link class="link" to="/descricao">Descrição</router-link>
        <v-input :messages="['Messages']"
                 append-icon="mdi-close"
                 prepend-icon="mdi-phone">
        </v-input>
      </nav>
      <div class="row justify-content-center color pt-5" style="color: white">
        <div class="col-md-2" v-if="foto">
          <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              {{ nome }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              {{ descricao }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState({
      foto: state => state.foto,
      nome: state => state.nome,
      descricao: state => state.descricao,
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.backgroupd-box {
  background-color: steelblue;
}

.link {
  color: white;
  line-break: loose;
}
</style>
