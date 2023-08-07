export const state = () => ({
  projects: [
    {
      name: 'project_1',
      title: 'My dummy project',
      short_text: 'This is a short text',
      text: 'This is long text, This is long text, This is long text, This is long text, This is long text, This is long text',
      tech_stack: [],
      tags: []
    }
  ]
})

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
