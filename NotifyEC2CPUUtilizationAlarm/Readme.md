# 概要

EC2 インスタンスの CPU 使用率高騰 のイベントを Slack に通知するプログラムです。

# 構成

CloudWatch アラーム → SNS → Lambda

# 設定

- Lambda レイヤーに node_modules を登録

  `request`モジュールをインストールした node_modules を登録します。

  [Lambda レイヤーに node_modules を登録してみた](https://zenn.dev/mn87/articles/c421ebaea55f8b)

- Lambda 用 IAM ロール作成
  `AWSLambdaBasicExecutionRole`ポリシーを付与します。

  [IAM コンソールでの実行ロールの作成](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/lambda-intro-execution-role.html#permissions-executionrole-console)

- Slack の Incoming WebHook の URL を取得

  [Slack での Incoming Webhook の利用](https://slack.com/intl/ja-jp/help/articles/115005265063-Slack-%E3%81%A7%E3%81%AE-Incoming-Webhook-%E3%81%AE%E5%88%A9%E7%94%A8)

  取得した URL を index.js に貼り付けます。

- Lambda 関数作成

  ランタイム：`Node.js 14.x`

  実行ロール：作成した IAM ロール

- index.js を Lambda 関数にアップロード

- SNS
  トピックを作成し、サブスクリプションで Lambda を選択します。

- CloudWatch アラームを作成

  アクションで SNS トピックを選択します。
