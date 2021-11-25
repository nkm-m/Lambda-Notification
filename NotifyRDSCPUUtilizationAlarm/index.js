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
      username: `${projectName} RDS CPUUtilization Alarm`,
      text: `${projectName}のRDSインスタンスのCPU使用率が80%を超えています。`,
      icon_emoji: "",
    },
    json: true,
  };

  request.post(options);
};
