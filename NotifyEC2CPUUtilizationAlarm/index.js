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
      username: `${projectName} EC2 CPUUtilization Alarm`,
      text: `<!channel>\nAction Required\n${projectName}のEC2インスタンスのCPU使用率が高騰しています。`,
      icon_emoji: "",
    },
    json: true,
  };

  request.post(options);
};
