import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { TechnicalInspectionFactory } from '../models-ts/TechnicalInspection';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const insurance = db.VehiculeInsurance;

module.exports = {
  insertInsurance(req, res) {
    sequelize
      .query(
        "INSERT INTO vehicule_insurance (ref_insurance_contract, name_insurance_agency, date_begin, date_end, cost_insurance, vehicule_fleet_id ) VALUES('" +
          req.body.ref_insurance_contract +
          "', '" +
          req.body.name_insurance_agency +
          "','" +
          req.body.date_begin +
          "', '" +
          req.body.date_end +
          "', '" +
          req.body.cost_insurance +
          "', '" +
          req.body.vehicule_fleet_id +
          "')",

        { type: sequelize.QueryTypes.INSERT },
        {}
      )
      .then(res.status(200).send('vehicule insurance added successfully'))
      .catch((error) => res.status(400).send(error));
  },
  updateInsurance(req, res) {
    return insurance
      .findOne({
        where: { id: req.params.id },
        attributes: {},
      })
      .then((insurance) => {
        if (!insurance) {
          return res.status(200).send({
            message: ' inexistant vehicule insurance',
          });
        } else {
          return insurance
            .update({
              ref_insurance_contract: req.body.ref_insurance_contract,
              name_insurance_agency: req.body.name_insurance_agency,
              date_begin: req.body.date_begin,
              date_end: req.body.date_end,
              cost_insurance: req.body.cost_insurance,
              vehicule_fleet_id: req.body.vehicule_fleet_id,
            })
            .then(() =>
              res
                .status(200)
                .send(`vehicule insurance was updated successfully`)
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readInsurance(req, res) {
    return insurance
      .findOne({
        where: { id: req.params.id },
        attributes: {},
      })
      .then((insurance) => {
        if (!insurance) {
          return res.status(200).send({
            message: 'inexistant vehicule insurance',
          });
        } else {
          return res.status(200).send(insurance);
        }
      });
  },
  // read insurance with pagination
  readInsuranceChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return insurance
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize,
      })
      .then((insurance) => {
        if (!insurance) {
          return res.status(200).send({
            message: 'inexistant insurance',
          });
        } else {
          return res.status(200).send(insurance);
        }
      });
  },
  deleteInsurance(req, res) {
    sequelize
      .query(
        "DELETE FROM vehicule_insurance WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(res.status(200).send('vehicule insurance deleted successfully'))
      .catch((error) => res.status(400).send(error));
  },
};
