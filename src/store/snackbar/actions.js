export default {
    setVisible({commit},value) {
        console.log(value);
        commit('setVisible', value)
    }
}