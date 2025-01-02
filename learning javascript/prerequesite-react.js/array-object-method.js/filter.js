let marks = [70, 45, 72, 71, 40];
let Agrade = marks.filter((data) => {
  let GradeA = data >= 70;
  return GradeA;
});
console.log(Agrade);
