// Note: /opt/Common is where all the lib layer code gets put
const { Election, Voter, ApiResponse, ApiRequire } = require("/opt/Common");

exports.lambdaHandler = async (event, context, callback) => {
  const requiredArgs = ["VIDN"];

  const messageBody = JSON.parse(event.body);

  if (!ApiRequire.hasRequiredArgs(requiredArgs, messageBody)) {
    return ApiResponse.makeRequiredArgumentsError();
  }

  const { VIDN } = messageBody;

  if (
    process.env.AWS_SAM_LOCAL ||
    process.env.DEPLOYMENT_ENVIRONMENT === "development"
  ) {
    if (VIDN.toLowerCase() === "emptyresponse") {
      return ApiResponse.makeResponse(200, Voter.emptyResponse);
    } else if (VIDN.toLowerCase() === "wrongresponse") {
      return ApiResponse.makeResponse(200, Voter.wrongResponse);
    } else if (VIDN.toLowerCase() === "noresponse") {
      return ApiResponse.makeResponse(200, Voter.noResponse);
    }
  }

  const election = await Election.currentElection();

  if (!election) {
    return ApiResponse.noElectionResponse();
  }

  const voter = await Voter.findByVIDN(VIDN);

  if (!voter) {
    return ApiResponse.noMatchingVoter(messageBody);
  }

  // TODO: need to find out if we're using firebase in the app for messaging.
  // Update device token if there's a match
  // const { device_token } = voter.attributes;
  // await voter.update({device_token: FCM_token})

  return ApiResponse.makeResponse(200, election.ballotDefintion(voter));
};
