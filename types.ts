let n: any = 6;
n = "Mario";

const isWinter: boolean = true;
const count: number = 5;
const myName: String = "Mario";

const names: string[] = ["Mario", "Mariarosa"];
const vars: any[] = [...names, 5];
console.log(vars);

enum Grades {
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
}
const grade: Grades = Grades.A;
console.log(`Your grade is: ${grade}`);

// void
(function hi(): void {
  console.log("Ciao");
})();
