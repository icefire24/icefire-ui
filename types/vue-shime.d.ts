declare module '*.vue' {
    import type {defineComponent} from 'vue'
    let component: defineComponent<{},{},any>
    export default component
}