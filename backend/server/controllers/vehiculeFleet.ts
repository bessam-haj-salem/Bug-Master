import { Sequelize, QueryTypes } from 'sequelize';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import { createModels } from '../models-ts';
import { VehiculeFleetFactory } from '../models-ts/VehiculeFleet';
const db = createModels(sequelizeConfig);

const sequelize = db.sequelize;

const vehicule = db.VehiculeFleet;

module.exports = {
  //insertion of a new company
  insertVehicule(req, res) {
    sequelize
      .query(
        "INSERT INTO vehicule_fleet (type, brand, horse_power, vehicule_image,number_places, accessories,registration_number, type_contract_ownership,ref_contractor_ownership,ownership_contract_image, mileage, availability, trip_id) VALUES('" +
          req.body.type +
          "', '" +
          req.body.brand +
          "','" +
          req.body.horse_power +
          "', '" +
          req.body.vehicule_image +
          "', '" +
          req.body.number_places +
          "', '" +
          req.body.accessories +
          "','" +
          req.body.registration_number +
          "', '" +
          req.body.type_contract_ownership +
          "', '" +
          req.body.ref_contractor_ownership +
          "', '" +
          req.body.ownership_contract_image +
          "','" +
          req.body.mileage +
          "', '" +
          req.body.availability +
          "', '" +
          req.body.trip_id +
          "')",

        { type: sequelize.QueryTypes.INSERT },
        {}
      )
      .then(res.status(200).send('vehicule added successfully'))
      .catch((error) => res.status(400).send(error));
  },
  updateVehicule(req, res) {
    return vehicule
      .findOne({
        where: { id: req.params.id },
        attributes: {},
      })
      .then((vehicule) => {
        if (!vehicule) {
          return res.status(200).send({
            message: ' inexistant vehicule',
          });
        } else {
          return vehicule
            .update({
              type: req.body.type,
              brand: req.body.brand,
              horse_power: req.body.horse_power,
              vehicule_image: req.body.vehicule_image,
              number_places: req.body.number_places,
              accessories: req.body.accessories,
              registration_number: req.body.registration_number,
              type_contract_ownership: req.body.type_contract_ownership,
              ref_contractor_ownership: req.body.ref_contractor_ownership,
              ownership_contract_image: req.body.ownership_contract_image,
              mileage: req.body.mileage,
              availability: req.body.availability,
              trip_id: req.body.trip_id,
            })
            .then(() =>
              res.status(200).send(`the vehicule was updated successfully`)
            )
            .catch((error) => res.status(400).send(error));
        }
      })
      .catch((error) => res.status(400).send(error));
  },
  readVehicule(req, res) {
    return vehicule
      .findOne({
        where: { id: req.params.id },
        attributes: {},
      })
      .then((vehicule) => {
        if (!vehicule) {
          return res.status(200).send({
            message: 'inexistant vehicule',
          });
        } else {
          return res.status(200).send(vehicule);
        }
      });
  },
  // read vehicule with pagination
  readVehiculeChunk(req, res) {
    let page = req.body.page;
    let pageSize = req.body.pageSize;

    return vehicule
      .findAll({
        // where: {},
        offset: page,
        limit: pageSize,
      })
      .then((vehicule) => {
        if (!vehicule) {
          return res.status(200).send({
            message: 'inexistant vehicule',
          });
        } else {
          return res.status(200).send(vehicule);
        }
      });
  },
  deleteVehicule(req, res) {
    sequelize
      .query(
        "DELETE FROM vehicule_fleet WHERE id='" + req.params.id + "'",
        { type: sequelize.QueryTypes.DELETE },
        {}
      )
      .then(res.status(200).send('vehicule deleted successfully'))
      .catch((error) => res.status(400).send(error));
  },
};
