<template>
  <div class="page page-about transition">
    <section class="about-hero">
      <v-container full >
        <v-row>
          <v-col cols="7">
            <h1>JAMStack architecture can bring an array of benefits to sites and project workflows.</h1>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="about-benefits">
      <v-container>
        <v-row>
          <v-col>
              <h4 class="section-head">Security</h4>
              <p>The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.</p>
              <p>Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.</p>
            </v-col>  
            <v-col>
              <h4 class="section-head">Scale</h4>
              <p>Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.</p>
              <p>With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.</p>
            </v-col>
            <v-col>
              <h4 class="section-head">Performance</h4>
              <p>Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.</p>
              <p>With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.</p>
            </v-col>  
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col>
            <h3>Features</h3>
          </v-col>
          <v-col cols="10">
            <ul>
                <li class="v-list-item" v-for="listItem in listItems">{{ listItem }}</li>
            </ul>
            </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="about-benefits page-bottom">
      <v-container>
        <v-row>
          <v-col>
            <h2>All of the benefits of modern JavaScript development, with the client-facing familiarity of the Wordpress CMS</h2>
          </v-col>
          <v-col cols="1">
          </v-col>
          <v-col>
            <h4 class="section-head">Pre-rendering</h4>
            <p>With Jamstack, the entire front end is prebuilt into highly optimized static pages and assets during a build process. This process of pre-rendering results in sites which can be served directly from a CDN, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.</p>
            <p>With so many popular tools for generating sites, like Gatsby, Hugo, Jekyll, Eleventy, NextJS, and very many more, many web developers are already familiar with the tools needed to become productive Jamstack developers.</p>
            <h4 class="section-head">Enhancing with JavaScript</h4>
            <p>With the markup and other user interface assets of Jamstack sites served directly from a CDN, they can be delivered very quickly and securely. On this foundation, Jamstack sites can use JavaScript and APIs to talk to backend services, allowing experiences to be enhanced and personalized.</p>
            <h4 class="section-head">Supercharging with services</h4>
            <p>The thriving API economy has become a significant enabler for Jamstack sites. The ability to leverage domain experts who offer their products and service via APIs has allowed teams to build far more complex applications than if they were to take on the risk and burden of such capabilities themselves. Now we can outsource things like authentication and identity, payments, content management, data services, search, and much more.</p>
            <p>Jamstack sites might utilise such services at build time, and also at run time directly from the browser via JavaScript. And the clean decoupling of these services allows for greater portability and flexibility, as well as significantly reduced risk.</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "About JAMStack+",
      description: "About Page Description",
      currentUrl: "",
      listItems: [
        "Nuxt",
        "VueJS",
        "SASS",
        "Greensock Animation Plugin",
        "Vuetify Grid",
        "Adobe Fonts",
        "Headless Wordpress",
        "Netlify Auto Deploy",
        "Social Metas"
      ]
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // Facebook OG Tags
        { hid: 'og:type', name: 'og:type', content: "website" },
        { hid: 'og:url', name: 'og:url', content: this.currentUrl },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'og:image', name: 'og:image', content: this.ogImage },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: this.summary },
        { hid: 'twitter:url', name: 'twitter:url', content: this.currentUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.ogImage },
        // Search Engine Meta
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  created() {
    let currentUrl = this.$route.path;
  }
};
</script>

<style lang="scss" scoped>
.page-about {
  .about-hero,
  .about-benefits{
  }
  h3{
    margin-bottom:1em;
  }
  .text-columns-2{
    column-count: 2;
    column-gap:3rem;
  }
}
</style>