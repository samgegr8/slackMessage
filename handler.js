 
var Slack = require('slack-node');

var webhookUri = "https://hooks.slack.com/services/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";

var slack = new Slack();
 
var res;

module.exports.hello = async (event) => {
    console.log("Nice To Know");
    res = await sendSlackMessage(webhookUri);
    console.log(res);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: res,
            input: event,
        }, null, 2),
    };
};

const sendSlackMessage = (webhookUri) => {
    return new Promise((resolve, reject) => {
        message = "Testing Message to Slack Channel";
        slack.setWebhook(webhookUri);
        slack.webhook({
            channel: "#general",
            username: "Samrat",
            icon_emoji: ":ghost:",
            text: message
        }, function (err, response) {
            if (err) {
                console.log(err); // an error occurred
                reject(err);
            } else {
                resolve(response);
                console.log(response);
            }
        });
    });
};


