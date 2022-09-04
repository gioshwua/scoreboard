count = 0;
s_count = 0;
const score = document.getElementById("score");
const score2 = document.getElementById("score2");

document.getElementById("plus1").onclick = function () {
  count += 1;
  score.innerHTML = count;
};

document.getElementById("plus2").onclick = function () {
  count += 2;
  score.innerHTML = count;
};

document.getElementById("plus3").onclick = function () {
  count += 3;
  score.innerHTML = count;
};

document.getElementById("2plus1").onclick = function () {
  s_count += 1;
  score2.innerHTML = s_count;
};

document.getElementById("2plus2").onclick = function () {
  s_count += 2;
  score2.innerHTML = s_count;
};

document.getElementById("2plus3").onclick = function () {
  s_count += 3;
  score2.innerHTML = s_count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  s_count = 0;
  score.innerHTML = count;
  score2.innerHTML = s_count;
};
