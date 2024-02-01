let p = document.querySelector("p");
let generatorFactBtn = document.querySelector("#btn1");
let clearFactBtn = document.querySelector("#btn2");

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "Something Went wrong";
  }
}

generatorFactBtn.addEventListener("click", async () => {
  let fact = await getFacts();
  p.innerText = fact;
});

clearFactBtn.addEventListener("click", () => {
  p.innerText = "";
});
