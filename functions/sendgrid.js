const client = require('@sendgrid/mail')

function sendEmail(client, message, senderEmail, senderName) {
  return new Promise((fulfill, reject) => {
    console.log(message)

    const data = {
      from: {
        email: senderEmail,
        name: senderName
      },
      to: 'office@goorganicguano.co.za',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    }

    client
      .send(data)
      .then(([response, body]) => {
        fulfill(response)
      })
      .catch(error => reject(error))
  })
}

exports.handler = function(event, context, callback) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME
  } = process.env

  const body = JSON.parse(event.body)
  const message = body.message

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(client, message, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
    .then(response => callback(null, { statusCode: response.statusCode }))
    .catch(err => callback(err, null))
}
