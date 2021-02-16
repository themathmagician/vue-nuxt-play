//utility functions
function extractGameNameFromTeaserPath(path) {
  let contents = path.split('/')
  return contents[contents.length - 2]
}

export const state = () => ({
  gameContent: {
    burned: {title: 'A cool game', actors: {}}
  }
})

export const getters = {
  gameNames: state => Object.keys(state.gameContent),
  getGameByName: (state, getters) => (id) => state.gameContent[id],
  actorNames: state => (gid, aid) => getters.getGameByName(gid).actors ? getters.getGameByName(gid).actors[aid]:undefined
}

export const mutations = {
  setGameContent( state, gc ) {
    state.gameContent = gc
  },
  addGameContent( state, gc ) {
    state.gameContent[gc.name] = gc.content
  },
  addActorContent( state, ac ){

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
  },

  async fetchActorForGame({commit}, game) {
    const actorsContent = await this.$content('games', games, 'actors', {deep: true}).fetch()
    console.log(actorsContent)
    actorsContent
      .forEach( ac => commit( 'addActorContent'))
    return {actorsContent}
  }
}
