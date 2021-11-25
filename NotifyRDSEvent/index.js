const request = require("request");

exports.handler = function (event) {
  console.log(JSON.stringify(event, null, 2));

  const message = JSON.parse(event.Records[0].Sns.Message);
  const projectName = "<Project Name>";
  const options = {
    url: "Slack Incoming WebHook URL",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      username: `${projectName} RDS Event Notification`,
      text: `${projectName}のRDSインスタンスで${message["Event Message"]}が発生しました。`,
      icon_emoji: "",
    },
    json: true,
  };

  request.post(options);
};
