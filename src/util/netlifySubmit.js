/**
 * send form values to netlify
 * @param {object} values
 * @param {Array} fileInputNames - names of any inputs that contain files
 * @returns {Promise}
 */

const netlifySubmit = async (values, fileInputNames = []) => {
  const keys = Object.keys(values);
  const formData = new FormData();

  for (let i = 0; i < keys.length; i++) {
    const inputValue = values[keys[i]];
    const inputName = keys[i];

    if (fileInputNames.includes(keys[i])) {
      Array.from(inputValue).forEach((file) => {
        formData.append(inputName, file);
      });
    } else {
      formData.append(inputName, inputValue);
      console.log(formData);
    }
  }

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    url: "/__forms/contact.html",
    body: new URLSearchParams(formData).toString(),
    data: formData,
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

export default netlifySubmit;
