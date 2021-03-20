const client = require('@sendgrid/mail')

function sendEmail(client, message, senderEmail, senderName) {
  return new Promise((fulfill, reject) => {
    const contact = message.body.contact.contact
    const shipping = message.body.contact.shipping
    const items = message.body.items

    // Create contact details
    let html = `<h2>Contact Details</h2><p>Name: ${contact.name}</p><p>Email: ${contact.email}</p><p>Phone: ${contact.phone}</p>`
    // Add shippingn details
    html += `<h2>Shipping Details</h2><p>Street: ${shipping.street}</p><p>City: ${shipping.city}</p><p>Postcode: ${shipping.postcode}</p>`

    html += `<h2>Items</h2>
      <table style="border: 1px solid black;border-spacing: 5px;">
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>`

    console.log('items', Object.keys(items).length)
    const numItems = Object.keys(items).length
    for (let index = 0; index < numItems; index++) {
      const item = items[index]
      console.log(item)
      html += `
        <tr>
        <td>${item.category}</td>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>${item.price}</td>
      </tr>`
    }
    html += `</table>`
    const data = {
      from: {
        email: senderEmail,
        name: senderName
      },
      to: 'office@goorganicguano.co.za,sales@goorganicguano.co.za',
      subject: 'New ' + message.body['form-name'],
      //text: message.body
      html: html
    }
    console.log('data', data)

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

  // console.log(SENDGRID_API_KEY,SENDGRID_SENDER_EMAIL,SENDGRID_SENDER_NAME)
  // console.log('event', event.body)
  const body = JSON.parse(event.body)
  // console.log('body', body)
  const message = body

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(client, message, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
    .then(response => callback(null, { statusCode: response.statusCode }))
    .catch(err => callback(err, null))
}
