// let data = ["Ahtsham Ali", 25, "Electrical Engineer"];
// // console.log(data[0]);

// let about = document.getElementById("info");
// // console.log(about);

// data.map((item) => {
//   //   console.log(item);
//   let li = document.createElement("li");
//   li.innerText = item;
//   //   console.log(li.innerText);

//   about.appendChild(li);
// });

let data = {
  Education: "BS Electrical Engineering",
  Institite: "GC University Faislabad",
  CGPA: 3.12,
  Residence: "Islamabad",
};

let about = document.getElementById("info");

for (key in data) {
  //   console.log(key);
  let li = document.createElement("li");
  // li.innerText =
  //   `${key} :` +
  //   "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
  //   `${data[key]}`;
  li.innerHTML = data[key];
  console.log(li);
  about.appendChild(li);
}

let skills = ["HTML ", "CSS ", "Javascript ", "React ", "ReduxToolkit"];
console.log(skills[0]);

let list = document.getElementById("skillsinfo");

console.log(list);

skills.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = item;
  //   console.log(div);
  list.appendChild(div);
});
