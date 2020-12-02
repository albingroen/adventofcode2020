const data = require("./data.json");

function main(entries) {
  const validatePassword = (policy, password) => {
    const limits = policy.split(" ")[0].split("-");
    const letter = policy.split(" ")[1];

    const minOccurences = Number(limits[0]);
    const maxOccurences = Number(limits[1]);

    const occurences = password.split("").filter((l) => l === letter).length;

    const isValid =
      occurences >= Number(minOccurences) &&
      occurences <= Number(maxOccurences);

    return isValid;
  };

  const validPasswords = entries.filter((entry) => {
    const password = entry.split(": ")[1];
    const policy = entry.split(": ")[0];
    return validatePassword(policy, password);
  });

  return validPasswords.length;
}

console.log(main(data));
