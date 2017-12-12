let formatMaps = [{
    reg: /yyyy/g,
    text: (date) => date.getFullYear(),
}, {
    reg: /MM/g,
    text: (date) => date.getMonth() + 1,
}, {
    reg: /dd/g,
    text: (date) => date.getDate(),
}, {
    reg: /HH/g,
    text: (date) => date.getHours(),
}, {
    reg: /mm/g,
    text: (date) => date.getMinutes(),
}, {
    reg: /ss/g,
    text: (date) => date.getSeconds(),
}]

export default function TimePipe(date, format = "yyyy-MM-dd HH:mm:ss") {
    let dateObj = new Date(date);
    let time = format
    
    formatMaps.forEach(e => {
        time = time.replace(e.reg, e.text(dateObj));
    })

    return time;
}