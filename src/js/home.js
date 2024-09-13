function get(a, b) {
    if (typeof (b) !== 'number' || b <= 0) {
        return a;
    }
    let str = ''
    for (let i = 1; i <= b; i++) {
        if (i === b) {
            str += `${a * i}`;
        } else {
            str += `${a * i}---`;
        }
    }
    return str;
}