"use strict";

const axios = require("axios");

module.exports.getAccessToken = async event => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=6lrpip852j7ksr4u06d69bbbdj" +
    "&client_secret=jeimv3h67cqid77pk723ss840i" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://sammykhaleel.github.io/meetup/" +
    "&code=99935756b21d9f4468ec7b54339faff9";

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    })
  };
};
