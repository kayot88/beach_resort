// import contentful from 'contentful';
const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.REACT_APP_CONT_SPACE,
  accessToken: process.env.REACT_APP_CONT_TOKEN
});


export default client