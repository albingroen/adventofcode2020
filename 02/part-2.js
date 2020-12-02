const data = require("./data.json");

function main(entries) {
  const validatePassword = (policy, password) => {
    const reqs = policy.split(" ")[0].split("-");
    const letter = policy.split(" ")[1];

    const startPos = Number(reqs[0]);
    const endPos = Number(reqs[1]);

    const startIsMatch = password[startPos - 1] === letter;
    const endIsMatch = password[endPos - 1] === letter;

    const isValid =
      (startIsMatch && !endIsMatch) || (endIsMatch && !startIsMatch);

    return isValid;
  };

  const validPasswords = entries.filter((entry) => {
    const password = entry.split(": ")[1];
    const policy = entry.split(": ")[0];
    return validatePassword(policy, password);
  });

  return validPasswords.length;
}

console.log(
  main(data)
);
