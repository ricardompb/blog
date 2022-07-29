<template>
  <div>Descrição</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PagDescricao',
  mounted () {
    this.setVal({
      foto: '',
      nome: '',
      descricao: ''
    })
  },
  methods: {
    ...mapMutations({ setVal: 'setVal' })
  }
}
</script>
