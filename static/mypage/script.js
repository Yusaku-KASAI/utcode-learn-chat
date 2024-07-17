const app = document.getElementById("app");
const title = document.createElement("h1");
title.textContent = "ユーザー登録";
const form = document.createElement("form");
const table = document.createElement("table");
const info = ["苗字", "名前", "誕生日", "性別"];
for (tag of info) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = tag;
  const td2 = document.createElement("td");
  const input = document.createElement("input");
  td2.appendChild(input);
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
}
const button = document.createElement("button");
button.textContent = "登録";
form.appendChild(table);
form.appendChild(button);
app.appendChild(title);
app.appendChild(form);
