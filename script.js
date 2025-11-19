//your JS code here. If required.
const form = document.querySelector("form");
const fontEle = document.querySelector("#fontsize");
const colorEle = document.querySelector("#fontcolor");
form.addEventListener("submit", () => {
  document.cookie = `fontsize=${fontEle.value}`;
  document.cookie = `fontcolor=${colorEle.value}`;
});

const cookies = document.cookie.split("; ");


console.log(cookies);
if (cookies) {
  const val = [];
  for (const c of cookies) {
    const [_, value] = c.split("=");
    val.push(value);
  }
  document.documentElement.style.setProperty("--fontsize", `${val[0]}px`);
  document.documentElement.style.setProperty("--fontcolor", `${val[1]}`);
  
}
