var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var n = 6;
n = "Mario";
var isWinter = true;
var count = 5;
var myName = "Mario";
var names = ["Mario", "Mariarosa"];
var vars = __spreadArrays(names, [5]);
console.log(vars);
var Grades;
(function (Grades) {
    Grades[Grades["A"] = 0] = "A";
    Grades[Grades["B"] = 1] = "B";
    Grades[Grades["C"] = 2] = "C";
    Grades[Grades["D"] = 3] = "D";
    Grades[Grades["E"] = 4] = "E";
    Grades[Grades["F"] = 5] = "F";
})(Grades || (Grades = {}));
var grade = Grades.A;
console.log("Your grade is: " + grade);
// void
(function hi() {
    console.log("Ciao");
})();
