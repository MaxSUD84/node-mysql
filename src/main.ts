import { createApp } from "vue";
// import './style.css'
// import App from './App.vue'

const App = {
    data() {
        return {
            placeholderString: "Введие название заметки",
            title: "Список заметок",
            inputValue: "",
            notes: ["Заметка 1", "Заметка 2"],
        };
    },
    methods: {
        inputChangeHandler(event: InputEvent) {
            // console.log(event.target.value);
            this.inputValue = event.target.value;
        },
        btnAddNoteHandler() {
            if (this.inputValue) {
                this.notes.push(this.inputValue);
            }
            this.inputValue = "";
        },
        // Timing : 51:13
    },
};

createApp(App).mount("#app");
