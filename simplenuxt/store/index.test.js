import Vuex from "vuex"
import { createLocalVue } from "@vue/test-utils"

describe("store/index.js has games metadata and content", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
    console.log('<<< loaded store')
    console.log(NuxtStore)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    await store.dispatch('init')
  })

  describe('Loading actor content', () => {
    let actorNames
    beforeEach(() => {
      actorNames = store.getters['actorNames']
    })
    test(`when I call actorNames it returns a non-empty list of names`, () => {
      expect(actorNames('burned').length).toBeGreaterThan(0)
    })
  })
})



