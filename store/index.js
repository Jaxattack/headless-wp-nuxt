const siteURL = "https://www.lancejackson.co.nz/headless_wordpress"

export const state = () => ({
  posts: [],
  headlineAnimate: 'Nuxt Boilerplate with headless Wordpress'
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/casestudies/`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ acf, title, slug, id }) => ({
          acf,
          title,
          slug,
          id,
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  }
}
