var app = new Vue({
    el: "#app",
    data: {
        isLastInputANumber: false,
        isResultDisplayed: false,
        inputValues: [
            "C",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            "00",
            ".",
            "=",
        ],
        screenValue: "",
    },
    methods: {
        clearScreen() {
            this.isLastInputANumber = false;
            this.isResultDisplayed = false;
            this.screenValue = "";
        },
        inputOperator(inputValue) {
            if (this.isLastInputANumber) {
                this.screenValue += inputValue;
                this.isLastInputANumber = false;
                this.isResultDisplayed = false;
            }
        },
        inputNumber(inputValue) {
            if (this.isResultDisplayed) {
                this.screenValue = inputValue;
                this.isResultDisplayed = false;
                this.isLastInputANumber = true;
            } else {
                this.screenValue += inputValue;
                this.isLastInputANumber = true;
            }
        },
        displayResult() {
            if (this.screenValue) {
                this.screenValue = math.evaluate(this.screenValue);
                this.isResultDisplayed = true;
            }
        },
    },
});

