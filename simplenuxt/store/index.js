//utility functions
function extractGameNameFromTeaserPath(path) {
  let contents = path.split('/')
  return contents[contents.length - 2]
}

export const state = () => ({
  gameContent: {
    burned: {title: 'A cool game'}
  }
})

export const getters = {
  gameNames: state => Object.keys(state.gameContent),
  getGameByName: state => (id) => state.gameContent[id]
}

export const mutations = {
  setGameContent( state, gc ) {
    state.gameContent = gc
  },
  addGameContent( state, gc ) {
    state.gameContent[gc.name] = gc.content
  }
}

export const actions = {
  async nuxtServerInit({store}) {
    console.log("called on server init!")
    await store.dispatch('fetchGameTeasers')
  },

  async fetchGameTeasers({commit}) {
    const teaserContent = await this.$content('games', {deep: true}).where({slug: 'teaser'}).only(['slug', 'game'])
      .fetch()
    teaserContent
     .forEach(tc => commit( "addGameContent", {name: extractGameNameFromTeaserPath(tc.path), content: tc.game} ))
  }
}
