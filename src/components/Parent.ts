import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Parent extends Vue {
    parentClicked() {
        console.log('Parent click')
    }
}