import { createApp } from "vue";
// import './style.css'
// import App from './App.vue'

const App = {
    data: () => ({
        title: "Заголовок заметки",
        html: "<h1>Vue 3 App</h1><hr/>",
        placeholderString: "Введите значение ...",
        errorMessage: "",
        person: {
            firstName: "Max",
            lastName: "G",
            age: 30,
        },
        items: [1, 2],
    }),
    methods: {
        // inputChangeHandler(event: InputEvent) {
        //     this.inputValue = event.target.value;
        // },
        btnAddNoteHandler(event) {
            this.items.unshift(this.$refs.myInput.value);
            this.$refs.myInput.value = "";
            console.log(event.key ? event.key : event?.pointerType);
        },
        removeRow(ind) {
            this.items.splice(ind, 1);
        },
        log(data) {
            console.log("Row remove: ", data);
        },
    },
    computed: {
        evenItems() {
            return this.items.filter((i: number) => i % 2 === 0);
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 25) {
                this.inputValue = "";
                this.errorMessage = "Слишком много символов (не более 25)";
            }
        },
    },
};

createApp(App).mount("#app");
