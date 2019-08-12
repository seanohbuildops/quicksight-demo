const AWS = require('aws-sdk');
require('dotenv').config();

var quicksight = new AWS.QuickSight({
  accessKeyId: process.env.AWS_SEANS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SEANS_SECRET_ACCESS_KEY,
});

let response;

exports.lambdaHandler = async (event, context) => {

  return new Promise((resolve, reject) => {
    quicksight.getDashboardEmbedUrl({
      AwsAccountId: process.env.AWS_SEANS_ACCOUNT_ID,
      DashboardId: process.env.AWS_QUICKSIGHT_DASHBOARD_ID,
      IdentityType: 'IAM',
    }, function(err, data){

      if(err){
        console.log(err, err.stack)
        return reject(err);
      } else {
        console.log(data);
      }

      response = {
        'statusCode': 200,
        'body': data.EmbedUrl
      }

      return resolve(response);
    });
  })
}
