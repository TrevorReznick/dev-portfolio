export const state = () => ({})

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id)
  }
}

export const mutations = {
  // @todo
}

export const actions = {
  // @todo
}
