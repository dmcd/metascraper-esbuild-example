import * as cdk from 'aws-cdk-lib'
import * as awsLambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'

export class ExampleStack extends cdk.Stack {
  lambda: cdk.aws_lambda.Function

  constructor(
    scope: Construct,
    _envName: string,
    id: string,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props)

    this.lambda = new awsLambdaNodejs.NodejsFunction(this, 'scrapeUrl', {
      runtime: cdk.aws_lambda.Runtime.NODEJS_16_X,
      handler: 'handler',
      entry: 'src/lambda-fns/scrapeUrl.ts',
    })
  }
}
