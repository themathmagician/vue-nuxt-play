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
  })

  describe('actorNames', () => {
    let actorNames
    beforeEach(() => {
      actorNames = store.getters['actorNames']
    })
    test(`it returns a non-empty list of names`, () => {
      expect(actorNames('burned').length).toBeGreaterThan(0)
    })
  })
})



