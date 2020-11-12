import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { IssuesFactory } from '../models-ts/Issues';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const issues = db.Issues;

module.exports = {
  //insertion of a new ISSUES
  insertIssues(req, res) {
    sequelize
      .query(
        "INSERT INTO issues (categorie, subject, description,status, priority ,start_date, due_date, estimated_time, progress, file, spent_time, activity, updated_by, links ) VALUES('" +
          req.body.categorie +
          "', '" +
          req.body.subject +
          "', '" +
          req.body.description +
          "', '" +
          req.body.status +
          "', '" +
          req.body.priority +
          "','" +
          req.body.start_date +
          "','" +
          req.body.due_date +
          "', '" +
          req.body.estimated_time +
          "', '" +
          req.body.progress +
          "', '" +
          req.body.file +
          "', '" +
          req.body.spent_time +
          "','" +
          req.body.activity +
          "', '" +
          req.body.updated_by +
          "', '" +
          req.body.links +
          "')",

        { type: sequelize.QueryTypes.INSERT },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert issues succeded' })
      )
      .catch((error) => res.status(400).send(error));
  },
  updateIssues(req, res) {
    return issues
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((issues) => {
        if (!issues) {
          return res.status(200).send({
            message: ' inexistant issues'
          });
        } else {
          return issues
            .update({
              categorie: req.body.categorie,
              subject: req.body.subject,
              description: req.body.description,
              status: req.body.status,
              priority: req.body.priority,
              start_date: req.body.start_date,
              due_date: req.body.due_date,
              estimated_time: req.body.estimated_time,
              progress: req.body.progress,
              file: req.body.file,
              spent_time: req.body.spent_time,
              activity: req.body.activity,
              updated_by: req.body.updated_by,
              links: req.body.links
            })
            .then(() =>
              res
                .status(200)
                .send({ success: true, message: 'insert issue succeded' })
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readIssues(req, res) {
    return issues
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((issues) => {
        if (!issues) {
          return res.status(200).send({
            message: 'inexistant issues'
          });
        } else {
          return res.status(200).send(issues);
        }
      });
  },
  // read issues with pagination
  readIssuesChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return issues
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize
      })
      .then((issues) => {
        if (!issues) {
          return res.status(200).send({
            message: 'inexistant issues'
          });
        } else {
          return res.status(200).send(issues);
        }
      });
  },
  deleteIssues(req, res) {
    sequelize
      .query(
        "DELETE FROM issues WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert issue succeded' })
      )
      .catch((error) => res.status(400).send(error));
  }
};
