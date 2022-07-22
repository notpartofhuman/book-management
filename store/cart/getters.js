import { mapGetters } from 'vuex'

export default {
    getCountCarts(state) {
        return state.carts.length
    }
}