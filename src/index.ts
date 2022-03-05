const name = "seokman",
  age = 32,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

sayHi(name, 44, gender);

export {};
