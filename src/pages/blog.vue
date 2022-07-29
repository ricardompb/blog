<template>
  <div class="pt-lg-5">
    <div class="row">
      <div class="col-md-12">
        <h1>Últimas do Blog</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <template v-for="(row, idx) in rows" :key="idx">
        <div class="col-md-12">
          <h3>{{ row.descricao }}</h3>
        </div>
        <div class="col-md-3">
          <p>{{ row.complemento }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PagBlog',
  data () {
    return {
      rows: [
        {
          descricao: '5 dicas para sua carreira profissional',
          complemento: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
        },
        {
          descricao: '5 dicas para sua carreira profissional',
          complemento: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
        },
        {
          descricao: '5 dicas para sua carreira profissional',
          complemento: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
        },
        {
          descricao: '5 dicas para sua carreira profissional',
          complemento: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
        },
        {
          descricao: '5 dicas para sua carreira profissional',
          complemento: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
        }
      ]
    }
  },
  mounted () {
    this.setVal({
      foto: 'XXX',
      nome: 'Ricardo',
      descricao: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.'
    })
  },
  methods: {
    ...mapMutations({ setVal: 'setVal' })
  }
}
</script>
