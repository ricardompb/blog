<template>
  <div>Descrição</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PagDescricao',
  mounted () {
    this.setVal({
      foto: 'https://placekitten.com/300/300',
      nome: '',
      descricao: ''
    })
  },
  methods: {
    ...mapMutations({ setVal: 'setVal' })
  }
}
</script>
