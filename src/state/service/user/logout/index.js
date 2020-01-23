const url = "http://fakerestapi.azurewebsites.net/posts/1";

function userLogoutService(requestData) {
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      return;
    });
}

export { userLogoutService };
