export default class Music {
    constructor() {}

    setVoice(num) {
        localStorage.setItem("voice", num);

        return num;
    }

    getVoice() {
        return localStorage.getItem("voice") || 1;
    }
}