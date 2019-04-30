const functions = require('firebase-functions');


exports.firebaseEmail = functions.https.onCall((request, response) => {

    let email = request.email;
    let name = request.name

    var api_key = '40960b8e3e394b242a6487a4cc0e3159-2416cf28-2fbf2a7f';
    var DOMAIN = 'sandbox34a1e715a75d4cc9943d6e90f05c53e6.mailgun.org';
    var mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: DOMAIN
    });

    var data = {
        from: 'Travel <godswill@gmail.com>',
        to: `${name} <${email}>`,
        subject: `Hello ${name}!`,
        text: `Your message was succesfully sent !!!!`
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }
        console.log(body);
    });
});