import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { MembersProjectFactory } from '../models-ts/MembersProject';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const membersProject = db.MembersProject;

module.exports = {
  //insertion of a new members
  insertMembersProject(req, res) {
    sequelize
      .query(
        "INSERT INTO members_project (project_id, members_id) VALUES('" +
          req.body.project_id +
          "', '" +
          req.body.members_id +
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
  updateMembersProject(req, res) {
    return membersProject
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((membersProject) => {
        if (!membersProject) {
          return res.status(200).send({
            message: ' inexistant membersProject'
          });
        } else {
          return membersProject
            .update({
              project_id: req.body.project_id,
              members_id: req.body.members_id
            })
            .then(() =>
              res.status(200).send({
                success: true,
                message: 'insert membersProject succeded'
              })
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readMembersProject(req, res) {
    return membersProject
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((membersProject) => {
        if (!membersProject) {
          return res.status(200).send({
            message: 'inexistant membersProject'
          });
        } else {
          return res.status(200).send(membersProject);
        }
      });
  },
  // read membersProject with pagination
  readMembersProjectChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return membersProject
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize
      })
      .then((membersProject) => {
        if (!membersProject) {
          return res.status(200).send({
            message: 'inexistant membersProject'
          });
        } else {
          return res.status(200).send(membersProject);
        }
      });
  },
  deleteMembersProject(req, res) {
    sequelize
      .query(
        "DELETE FROM members_project WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert membersProject succeded' })
      )
      .catch((error) => res.status(400).send(error));
  }
};
