import * as cdk from 'aws-cdk-lib'
import { ExampleStack } from './example-stack'

export class App extends cdk.App {
  constructor(props?: cdk.AppProps) {
    super(props)
  }

  deploy(envName: string): void {
    new ExampleStack(this, envName, `${envName}-example`, {
      terminationProtection: envName == 'production',
    })
  }
}
