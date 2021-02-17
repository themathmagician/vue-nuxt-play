//utility functions
function extractGameNameFromTeaserPath(path) {
  let contents = path.split('/')
  return contents[contents.length - 2]
}

export const state = () => ({
  gameContent: {}
})

export const getters = {
  isLoaded: (state, getters) => (id) => !!getters.getGame(id),
  isLoadedActor: (state, getters) => (id) => !!(getters.getGame(id).actors && getters.getGame(id).actors.length > 0),
  gameNames: state => Object.keys(state.gameContent),
  getGame: (state) => (id) => state.gameContent[id],
  getActor: (state, getters) => ({game, name}) => {
    console.log('get actor for: ' + game + ', ' + name)
    return getters.getGame(game).actors[name]
  },
  actorNames: (state, getters) => (id) => Object.keys(getters.getGame(id).actors)
}

export const mutations = {
  setGameContent(state, gc) {
    state.gameContent = gc
  },
  addGameContent(state, gc) {
    state.gameContent[gc.name] = gc.content
    state.gameContent[gc.name].actors = {}

  },
  addActorContent(state, {
    game: g, name: n, actor: a = {
      role: '?',
      bio: '...',
      charisma: 0,
      patience: 0,
      tech: 0,
      people: 0,
      process: 0
    }
  }) {
    console.log(`adding actor ${a} with name ${n} to ${g}`)
    console.log(a)
    state.gameContent[g].actors[n] = a
  }
}

export const actions = {
  async nuxtServerInit({store}) {
    console.log("called on server init!")
    await store.dispatch('fetchGameTeasers')
  },

  async fetchGameTeasers({getters, commit, dispatch}) {
    const teaserContent = await this.$content('games', {deep: true}).where({slug: 'teaser'}).only(['slug', 'game'])
      .fetch()
    teaserContent
      .forEach(tc => commit("addGameContent", {name: extractGameNameFromTeaserPath(tc.path), content: tc.game}))
  },

  async fetchActorsForGame({getters, dispatch, commit}, game) {
    if (!getters.isLoaded(game)) {
      console.log(`loading game teasers before actors for ${game} `)
      await dispatch('fetchGameTeasers')
    }
    if (!getters.isLoadedActor(game)) {
      const actorsContent = await this.$content('games', game, 'actors', {deep: true}).fetch()
      console.log(actorsContent)
      actorsContent
        .forEach(ac => commit('addActorContent', {game, name: ac.slug, actor: ac.actor}))
    }

  }
}
