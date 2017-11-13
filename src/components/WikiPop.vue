<template>
  <div class="wiki-pop">
    <div class="wiki-title">{{ title }}</div>
    <hr/>
    <img class="wiki-img" v-show="img" :src="img">
    <div class="wiki-content">{{ content }}</div>
  </div>
</template>

<script>
import wiki from 'wikijs'
const wikiArgs = {
  apiUrl: 'http://ja.wikipedia.org/w/api.php'
}

function createWiki (arg) {
  const lang = (arg && arg.lang) || 'en'
  const apiUrl = `http://${lang}.wikipedia.org/w/api.php`
  return wiki({
    apiUrl
  })
}

export default {
  name: 'WikiPop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: '',
      img: null,
      title: ''
    }
  },
  props: ['name', 'random', 'lang'],
  mounted () {
    if (this.$props.name != null) {
      this.title = this.$props.name
    }
    if (this.$props.random != null) {
      (async () => {
        const wiki = createWiki({
          lang: this.$props.lang
        })
        const titleList = await wiki.random(1)
        this.title = titleList[0]
        const page = await wiki.page(this.title)
        const content = await page.content()
        const image = await page.mainImage()
        this.img = image
        this.content = content
      })()
    }
    if (this.title == null || this.title.length === 0) {
      return
    }
    (async () => {
      const page = await createWiki().page(this.$props.title)
      const content = await page.content()
      const image = await page.mainImage()
      this.img = image
      this.content = content
    })()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wiki-title {
  font-size: 1em;
  font-weight: bold;
}
.wiki-pop {
  margin: 0px;
  padding: 5px;
  box-sizing: content-box;
  overflow: hidden;
  background-color: #FAFAFA;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.23);
}
.wiki-img {
  max-width: 100%;
  max-height: 50%;
  float: right;
  height: auto;
}
.wiki-content {
  font-size: 0.9em;
}
</style>
