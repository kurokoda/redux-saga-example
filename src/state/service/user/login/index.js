import axios from "axios";

const payload = {
  token: "UJk_FGOQ1bjBEsW2LENNbA",
  data: {
    id: "personNickname",
    email: "internetEmail",
    gender: "personGender",
    last_login: {
      date_time: "dateTime|UNIX",
      ip4: "internetIP4"
    }
  }
};

function userLoginService(requestData) {
  return axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: payload
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
}

export { userLoginService };
