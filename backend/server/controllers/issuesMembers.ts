import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { IssuesMembersFactory } from '../models-ts/IssuesMembers';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const issuesMembers = db.IssuesMembers;

module.exports = {
  //insertion of a new members
  insertIssuesMembers(req, res) {
    sequelize
      .query(
        "INSERT INTO issues_members (members_id, issues_id) VALUES('" +
          req.body.members_id +
          "', '" +
          req.body.issues_id +
          "')",

        { type: sequelize.QueryTypes.INSERT },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert members succeded' })
      )
      .catch((error) => res.status(400).send(error));
  },
  updateIssuesMembers(req, res) {
    return issuesMembers
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((issuesMembers) => {
        if (!issuesMembers) {
          return res.status(200).send({
            message: ' inexistant issuesMembers'
          });
        } else {
          return issuesMembers
            .update({
              members_id: req.body.members_id,
              issues_id: req.body.issues_id
            })
            .then(() =>
              res.status(200).send({
                success: true,
                message: 'insert issuesMembers succeded'
              })
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readIssuesMembers(req, res) {
    return issuesMembers
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((issuesMembers) => {
        if (!issuesMembers) {
          return res.status(200).send({
            message: 'inexistant issuesMembers'
          });
        } else {
          return res.status(200).send(issuesMembers);
        }
      });
  },
  // read issuesMembers with pagination
  readIssuesMembersChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return issuesMembers
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize
      })
      .then((issuesMembers) => {
        if (!issuesMembers) {
          return res.status(200).send({
            message: 'inexistant issuesMembers'
          });
        } else {
          return res.status(200).send(issuesMembers);
        }
      });
  },
  deleteIssuesMembers(req, res) {
    sequelize
      .query(
        "DELETE FROM issues_members WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert issuesMembers succeded' })
      )
      .catch((error) => res.status(400).send(error));
  }
};
