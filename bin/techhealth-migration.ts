#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TechhealthMigrationStack } from '../lib/techhealth-migration-stack';
 
const app = new cdk.App();
new TechhealthMigrationStack(app, 'TechhealthMigrationStack', {


});