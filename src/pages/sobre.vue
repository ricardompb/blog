<template>
  <div>Sobre</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PagSobre',
  mounted () {
    this.setVal({
      foto: '',
      nome: 'Sobre',
      descricao: ''
    })
  },
  methods: {
    ...mapMutations({ setVal: 'setVal' })
  }
}
</script>
