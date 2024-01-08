function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(14, 20, "as-number"));
console.log(combine("Jatin", "Mehta", "as-string"));
