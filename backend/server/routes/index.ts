//sc
let express = require('express');
var str = '';
var sleep = require('sleep');

var Sequelize = require('sequelize');

let app = express();
// var fs = require('fs');
// let bodyParser = require('body-parser');
// let multer = require('multer');
// let upload = multer();
// let parser = require('xml2json');
// const xml2js = require('xml2js');
// const axios = require('axios');

// let xmlParser = require('xml2json'); //pour parser de xml-->json
// let convert = require('xml-js');
// var js2xmlparser = require('js2xmlparser'); //pour parser json--->xml

const Project = require('../controllers').project;
const Issues = require('../controllers').issues;
const Members = require('../controllers').members;
const MembersProject = require('../controllers').membersProject;
const IssuesMembers = require('../controllers').issuesMembers; //const auth= require('../controllers').auth;

import * as processus from 'child_process';

let WebSocket = require('ws');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

// api routes

// global error handler

module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept,uix,From,Authorization '
    );
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, PUT, DELETE, OPTIONS'
    );

    next();
  });
  var path = require('path');

  //**Project */
  app.post('/apiRF/Project/insert', Project.insertProject);
  app.put('/apiRF/Project/update/:id', Project.updateProject);
  app.get('/apiRF/Project/read/:id', Project.readProject);
  app.delete('/apiRF/Project/delete/:id', Project.deleteProject);
  app.post('/apiRF/Project/readPage', Project.readProjectChunk);
  //**Issues */
  app.post('/apiRF/Issues/insert', Issues.insertIssues);
  app.put('/apiRF/Issues/update/:id', Issues.updateIssues);
  app.get('/apiRF/Issues/read/:id', Issues.readIssues);
  app.delete('/apiRF/Issues/delete/:id', Issues.deleteIssues);
  app.post('/apiRF/Issues/readPage', Issues.readIssuesChunk);
  //**Members */
  app.post('/apiRF/Members/insert', Members.insertMembers);
  app.put('/apiRF/Members/update/:id', Members.updateMembers);
  app.get('/apiRF/Members/read/:id', Members.readMembers);
  app.delete('/apiRF/Members/delete/:id', Members.deleteMembers);
  app.post('/apiRF/Members/readPage', Members.readMembersChunk);
  //**MembersProject */
  app.post('/apiRF/MembersProject/insert', MembersProject.insertMembersProject);
  app.put(
    '/apiRF/MembersProject/update/:id',
    MembersProject.updateMembersProject
  );
  app.get('/apiRF/MembersProject/read/:id', MembersProject.readMembersProject);
  app.delete(
    '/apiRF/MembersProject/delete/:id',
    MembersProject.deleteMembersProject
  );
  app.post(
    '/apiRF/MembersProject/readPage',
    MembersProject.readMembersProjectChunk
  );
  //**IssuesMembers */
  app.post('/apiRF/IssuesMembers/insert', IssuesMembers.insertIssuesMembers);
  app.put('/apiRF/IssuesMembers/update/:id', IssuesMembers.updateIssuesMembers);
  app.get('/apiRF/IssuesMembers/read/:id', IssuesMembers.readIssuesMembers);
  app.delete(
    '/apiRF/IssuesMembers/delete/:id',
    IssuesMembers.deleteIssuesMembers
  );
  app.post(
    '/apiRF/IssuesMembers/readPage',
    IssuesMembers.readIssuesMembersChunk
  );
};
