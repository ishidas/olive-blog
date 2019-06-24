
export const state = () => ({
  width: 0,
  height: 0
})

export const mutations = {
  SET_WIDTH(state, {width, height}) {
    state.width = width
    state.height = height
  }
}

export const actions = {

}
