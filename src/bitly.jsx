const token = "353d7cf0d5b2f13b9cf92782fefd43f49ac240e3";
function shorten({ link }, callback, errorCallback) {
  const data = { long_url: link };

  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,

      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        errorCallback(`HTTP error! status: ${response.status};`);
      }

      return response.json();
    })

    .then((json) => {
      callback(json.link);

      return json;
    });
}

module.exports = {
  shorten,
};
