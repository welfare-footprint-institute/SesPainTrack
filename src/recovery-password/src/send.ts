import AWS from "aws-sdk";
import dotenv from "dotenv";
import { TemplateData } from "../templates/type";

dotenv.config();

AWS.config.update({ region: "us-east-1", apiVersion: "2012-10-17" });

const SES = new AWS.SES({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const templateData: TemplateData = {
  name: "Herikle",
  action_url: "https://www.google.com",
  browser_name: "Chrome",
  operating_system: "Windows",
  support_url: "https://www.google.com",
};

var params = {
  Destination: {
    ToAddresses: ["herikle.mesquita@gmail.com"],
  },
  Source: "no-reply@welfarefootprint.org",
  Template: "RECOVERY-PASSWORD",
  TemplateData: JSON.stringify(templateData),
};

SES.sendTemplatedEmail(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
