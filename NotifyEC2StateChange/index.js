const request = require("request");

exports.handler = function (event) {
  console.log(JSON.stringify(event, null, 2));

  const state = event.detail.state;
  let text = "<!channel>\nAction Required\n";
  const projectName = "<Project Name>";

  if (state === "stopped") {
    text += `${projectName}でEC2インスタンスが停止しました。`;
  } else if (state === "terminated") {
    text += `${projectName}でEC2インスタンスが終了しました。`;
  } else {
    return;
  }
  text += "担当者への追加メッセージ";

  const options = {
    url: "Slack Incoming WebHook URL",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      username: `${projectName} EC2 StateChange Notification`,
      text,
      icon_emoji: "",
    },
    json: true,
  };

  request.post(options);
};
