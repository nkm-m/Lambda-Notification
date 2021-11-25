const request = require("request");

exports.handler = function (event) {
  console.log(JSON.stringify(event, null, 2));

  const projectName = "<Project Name>";
  const options = {
    url: "Slack Incoming WebHook URL",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      username: `${projectName} EC2 LogicalDeskFreeSpace Alarm`,
      text: `<!channel>\nAction Required\n${projectName}のEC2インスタンスのストレージの空き容量が低下しています。`,
      icon_emoji: "",
    },
    json: true,
  };

  request.post(options);
};
