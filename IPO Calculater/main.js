document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let a = +document.getElementById("a-in").value;
  let b = +document.getElementById("b-in").value;
  let c = +document.getElementById("c-in").value;

  let s = (a + b + c) / 2;
  let v = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  let A=v.toFixed(1);
  document.getElementById("s").innerHTML = `semi-perimeter=${s}`;
  document.getElementById("A").innerHTML = `Area=${Math.round(A)}`;
}
