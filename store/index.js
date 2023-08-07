export const state = () => ({
  projects: [
    {
      name: 'project_1',
      title: 'My dummy project',
      short_text: 'This is a short text',
      text: 'This is long text, This is long text, This is long text, This is long text, This is long text, This is long text',
      tech_stack: [],
      tags: [],
      thumbnail: 'https://source.unsplash.com/random/300x200',
      images: ['https://source.unsplash.com/random/800x600', 'https://source.unsplash.com/random/800x600','https://source.unsplash.com/random/800x600']
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
