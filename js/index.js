//* 1
console.log("----------Task 1----------");
{
  const loop = [5, 6, 1];
  console.log(loop);
  loop[1] = 10;
  console.log(loop);
}
//* 2
console.log("----------Task 2----------");
{
  const loop = ["Apple", "Banana", "Chery"];
  console.log(loop);
  loop[3] = "Grapes";
  console.log(loop);
}
//* 3
console.log("----------Task 3----------");
{
  const loop = [4, 5, 2, 6, 7, 1];
  let sum = 0;
  console.log(loop);
  for (let i = 0; i < loop.length; i++) {
    sum += loop[i];
  }
  console.log(sum);
}
//* 4
console.log("----------Task 4----------");
{
  const loop = [1, 2, 3, 4, 5];
  for (let i = 0; i < loop.length; i++) {
    console.log(loop[i]);
  }
}
//* 5
console.log("----------Task 5----------");
{
  const family = ["Dad", "Mom", "Sister", "Brother", "Grandma"];
  for (const familyMember of family) {
    if (familyMember.length > 5) {
      console.log(familyMember);
    }
  }
}
//* 6
console.log("----------Task 6----------");
{
  const numbers = [3, 4, 1, 6, 10, 8, 0];
  let maxNumber = 0;
  for (const number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  console.log(maxNumber);
}
//* 7
console.log("----------Task 7----------");
{
  const numbers = [3, 4, 1, 6, 10, 8, 0];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}
