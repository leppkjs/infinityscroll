<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>
    <div id="div01" style="text-align:center; border: 1px solid #5AAFFF; height:400px; overflow-y:scroll;" v-on:scroll.passive="onScroll">
      <div id="divContent" ref="divContent">
          <img src="https://t1.daumcdn.net/cfile/tistory/9940D03D5A584CCD0C"><br />
          <img src="https://t1.daumcdn.net/cfile/tistory/99F7323D5A584CCE1C"><br />
          <img src="https://t1.daumcdn.net/cfile/tistory/9948143D5A584CD10A"><br />
          <component v-for="(item, index) in imgs" :is="item" :img-name="imgname[index%3]" :key="index"></component><br>
      </div>
    </div>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      imgs: [],
      imgname: ['https://t1.daumcdn.net/cfile/tistory/9940D03D5A584CCD0C', 'https://t1.daumcdn.net/cfile/tistory/99F7323D5A584CCE1C', 'https://t1.daumcdn.net/cfile/tistory/99E6DF3E5A584CD311']
    }
  },
  methods: {
    onScroll: function({target: scroll}) {
      //스크롤바의 상단위치
      const scrollTop = scroll.scrollTop;
      //스크롤바를 갖는 div의 높이
      const scrollHeight = scroll.offsetHeight;
      //문서 전체 내용을 갖는 div의 높이
      const contentHeight = this.$refs.divContent.offsetHeight ;
      // 스크롤바가 아래 쪽에 위치할 때
      if(scrollTop + scrollHeight +1 >= contentHeight) { 
            //this.$refs.divContent.append(this.imgs);
            this.imgs.push('my-img');
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
