import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { ProjectFactory } from '../models-ts/Project';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const project = db.Project;

module.exports = {
  //insertion of a new company
  insertProject(req, res) {
    sequelize
      .query(
        "INSERT INTO project (name, subproject, description,homePage, categorie ,modules) VALUES('" +
          req.body.name +
          "', '" +
          req.body.subproject +
          "', '" +
          req.body.description +
          "', '" +
          req.body.homePage +
          "', '" +
          req.body.categorie +
          "','" +
          req.body.modules +
          "')",

        { type: sequelize.QueryTypes.INSERT },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert vehicule succeded' })
      )
      .catch((error) => res.status(400).send(error));
  },
  updateProject(req, res) {
    return project
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((project) => {
        if (!project) {
          return res.status(200).send({
            message: ' inexistant project'
          });
        } else {
          return project
            .update({
              name: req.body.name,
              subproject: req.body.subproject,
              description: req.body.description,
              homePage: req.body.homePage,
              public: req.body.public,
              modules: req.body.modules
            })
            .then(() =>
              res
                .status(200)
                .send({ success: true, message: 'insert vehicule succeded' })
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readProject(req, res) {
    return project
      .findOne({
        where: { id: req.params.id },
        attributes: {}
      })
      .then((project) => {
        if (!project) {
          return res.status(200).send({
            message: 'inexistant project'
          });
        } else {
          return res.status(200).send(project);
        }
      });
  },
  // read Project with pagination
  readProjectChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return project
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize
      })
      .then((project) => {
        if (!project) {
          return res.status(200).send({
            message: 'inexistant project'
          });
        } else {
          return res.status(200).send(project);
        }
      });
  },
  deleteProject(req, res) {
    sequelize
      .query(
        "DELETE FROM project WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(
        res
          .status(200)
          .send({ success: true, message: 'insert vehicule succeded' })
      )
      .catch((error) => res.status(400).send(error));
  }
};
