import "./tailwind.css";

const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()_-=+[]{}\\|/?<>,.'\"~";

function generate({
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSpecials,
}) {
  let all = "";
  if (includeUpperCase) all += UPPER_CASE;
  if (includeLowerCase) all += LOWER_CASE;
  if (includeNumbers) all += NUMBERS;
  if (includeSpecials) all += SPECIAL;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += all.charAt(Math.floor(Math.random() * all.length));
  }
  return password;
}

document.querySelector("#generate").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const length = parseInt(fd.get("length"));
  const includeUpperCase = !!fd.get("includeUpperCase");
  const includeLowerCase = !!fd.get("includeLowerCase");
  const includeNumbers = !!fd.get("includeNumbers");
  const includeSpecials = !!fd.get("includeSpecials");
  const password = generate({
    length,
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSpecials,
  });

  document.querySelector("#password").value = password;

  console.log(password);
});
