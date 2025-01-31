const DB = require("./db");
const DocumentInterface = require("./documentinterface");
const { Voter } = require("./Voter");
const { Election } = require("./Election");
const { Logger } = require("./Logger");
const { ApiResponse } = require("./ApiResponse");
const { ApiRequire } = require("./ApiRequire");
const { AccessControl } = require("./AccessControl");
const { FileInProcessing } = require("./FileInProcessing");
const { Application } = require("./Application");
const { yauzl } = require("yauzl");
const { processUpload } = require("./processUpload");
const s3CsvToJson = require("s3-csv-to-json");
const prepareVoterRecord = require("./prepareVoterRecord");
const jsSHA = require("./sha3");
const Ajv = require("ajv");
const edfSchema = require("./electionDefinitionSchema.json");
const totp = require("totp-generator");
//const { CopyObjectCommand } = require("@aws-sdk/client-s3");
exports.Election = Election;
exports.Logger = Logger;
exports.Voter = Voter;
exports.Election = Election;
exports.ApiResponse = ApiResponse;
exports.ApiRequire = ApiRequire;
exports.DocumentInterface = DocumentInterface;
exports.DB = DB;
exports.AccessControl = AccessControl;
exports.FileInProcessing = FileInProcessing;
exports.Application = Application;
exports.yauzl = yauzl;
exports.processUpload = processUpload;
exports.s3CsvToJson = s3CsvToJson;
exports.prepareVoterRecord = prepareVoterRecord;
exports.jsSHA = jsSHA;
exports.Ajv = Ajv;
exports.edfSchema = edfSchema;
exports.totp = totp;
//exports.CopyObjectCommand = CopyObjectCommand;
