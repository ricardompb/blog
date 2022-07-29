<template>
  <div>
    Olá, Bem vindo ao meu Blog, Meu nome é Roboto.<br/>
    Aqui no bloque você vai encontrar diversos assunto relacionados a tecnologia.<br/>
    Nos ajude a movimentar nosso blog...
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PagSobre',
  mounted () {
    this.setVal({
      foto: 'https://thumbs.dreamstime.com/z/illustration-profile-icon-avatar-inhabitant-male-illustration-profile-icon-avata-237916010.jpg',
      nome: '',
      descricao: 'Essa página é para mostrar um pouco mais do nosso blog...'
    })
  },
  methods: {
    ...mapMutations({ setVal: 'setVal' })
  }
}
</script>
