import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { MembersFactory } from '../models-ts/Members';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const members = db.Members;

module.exports = {
  //insertion of a new members
  insertMembers(req, res) {
    sequelize
      .query(
        "INSERT INTO members (first_name, last_name, role) VALUES('" +
          req.body.first_name +
          "', '" +
          req.body.last_name +
          "', '" +
          req.body.role +
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
  updateMembers(req, res) {
    return members
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((members) => {
        if (!members) {
          return res.status(200).send({
            message: ' inexistant members'
          });
        } else {
          return members
            .update({
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              role: req.body.role
            })
            .then(() =>
              res
                .status(200)
                .send({ success: true, message: 'insert members succeded' })
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readMembers(req, res) {
    return members
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((members) => {
        if (!members) {
          return res.status(200).send({
            message: 'inexistant members'
          });
        } else {
          return res.status(200).send(members);
        }
      });
  },
  // read members with pagination
  readMembersChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return members
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize
      })
      .then((members) => {
        if (!members) {
          return res.status(200).send({
            message: 'inexistant members'
          });
        } else {
          return res.status(200).send(members);
        }
      });
  },
  deleteMembers(req, res) {
    sequelize
      .query(
        "DELETE FROM members WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert members succeded' })
      )
      .catch((error) => res.status(400).send(error));
  }
};
