import { createApp, computed } from "vue";
// import './style.css'
// import App from './App.vue'

const App = {
    data() {
        return {
            placeholderString: "Введие название заметки",
            errorMessage: "",
            title: "Список заметок",
            inputValue: "",
            notes: ["Заметка 1", "Заметка 2"],
        };
    },
    methods: {
        // inputChangeHandler(event: InputEvent) {
        //     this.inputValue = event.target.value;
        // },
        btnAddNoteHandler() {
            if (this.inputValue) {
                this.notes.push(this.inputValue);
            }
            this.inputValue = "";
        },
        btnDelNoteHandler(i) {
            // btnDelNoteHandler(note) {
            // this.notes = this.notes.filter((n) => n !== note);
            this.notes.splice(i, 1);
        },
        toUpperCase: (item: string) => item.toUpperCase(),
    },
    // reactive: {
    //     _notes: ["Заметка 1", "Заметка 2", , "Заметка 3"],
    // },
    // computed: {
    //     doubleNotes: () => this._notes.length * 2,
    // },
    watch: {
        inputValue(value) {
            if (value.length > 25) {
                this.inputValue = "";
                this.errorMessage = "Слишком много символов (не более 25)";
            }
        },
    },
};

// const double_Notes = computed(() => App._notes.length * 2);

createApp(App).mount("#app");
