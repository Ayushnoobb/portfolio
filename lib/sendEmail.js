import axios from "axios";

const sendEmail = async (email, message) => {
  // return axios({
  //   method: 'post',
  //   url: '/api/send-mail',
  //   body: {
  //     email: email,
  //     subject:'Contact Mail',
  //     message: message,
  //   },
  // });
  console.log(email)

  return(
    axios.post('/api/send-mail', {
      method:'POST',
      body:{
        email: email,
        subject:'Contact Mail',
        message: message,
      }
    })
  )
};

export default sendEmail;
