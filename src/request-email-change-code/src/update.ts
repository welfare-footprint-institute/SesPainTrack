import AWS from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

AWS.config.update({
  region: "us-east-1",
  apiVersion: "2012-10-17",
});

const SES = new AWS.SES({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const htmlTemplate = fs.readFileSync(
  "./src/request-email-change-code/templates/template.html",
  "utf8"
);
const textTemplate = fs.readFileSync(
  "./src/request-email-change-code/templates/text.txt",
  "utf8"
);

SES.updateTemplate(
  {
    Template: {
      TemplateName: "REQUEST_EMAIL_CHANGE_CODE",
      HtmlPart: htmlTemplate,
      SubjectPart: "Request Email Change - Pain Track",
      TextPart: textTemplate,
    },
  },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
