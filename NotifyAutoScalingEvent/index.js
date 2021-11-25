const request = require("request");

exports.handler = function (event) {
  console.log(JSON.stringify(event, null, 2));

  const message = JSON.parse(event.Records[0].Sns.Message);
  let text = "";
  const projectName = "<Project Name>";

  if (message.Event.includes("LAUNCH")) {
    text = `${projectName}でAuto ScalingによりEC2インスタンスが起動しました。`;
  } else if (message.Event.includes("TERMINATE")) {
    text = `${projectName}でAuto ScalingによりEC2インスタンスが終了しました。`;
  } else {
    return;
  }

  const options = {
    url: "Slack Incoming WebHook URL",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      username: `${projectName} AutoScaling Notification`,
      text,
      icon_emoji: "",
    },
    json: true,
  };

  request.post(options);
};
