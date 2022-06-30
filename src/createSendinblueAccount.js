function createSendinblueAccount(
  listId,
  email = "",
  data = { firstName: "", lastName: "", note: "" }
) {
  const { firstName, lastName, note } = data;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key":
        "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",
    },
    body: JSON.stringify({
      email: email,
      attributes: {
        NOME: firstName,
        COGNOME: lastName,
        NOTE: note,
      },
      listIds: listId,
      updateEnabled: false,
      emailBlacklisted: false,
      smsBlacklisted: false,
    }),
  };

  fetch("https://api.sendinblue.com/v3/contacts", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
export default createSendinblueAccount;
