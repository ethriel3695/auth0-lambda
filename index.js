const axios = require('axios');

exports.handler = async (event, context, callback) => {
  const postObject = {
    client_id: 'l3baHEBRJGe3ULMJ7lTgonyLzDbSNSnf',
    client_secret:
      '9nDInEnT6K_hqeRA_-iS9XNTmDiAbYqFO2zoU5wut497d1n4FlvpbVsX2RkWmUsJ',
    audience: 'https://reubenellis.auth0.com/api/v2/',
    grant_type: 'client_credentials',
  };
  const url = 'https://reubenellis.auth0.com/oauth/token';
  const token = await axios.post(url, postObject);
  const options = {
    headers: { authorization: 'Bearer ' + token.data.access_token },
  };
  const users = await axios.get(
    'https://reubenellis.auth0.com/api/v2/users',
    options
  );
  console.log(users);
};
