"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const insurance = db.VehiculeInsurance;
module.exports = {
    insertInsurance(req, res) {
        sequelize
            .query("INSERT INTO vehicule_insurance (ref_insurance_contract, name_insurance_agency, date_begin, date_end, cost_insurance, vehicule_fleet_id ) VALUES('" +
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
            "')", { type: sequelize.QueryTypes.INSERT }, {})
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
            }
            else {
                return insurance
                    .update({
                    ref_insurance_contract: req.body.ref_insurance_contract,
                    name_insurance_agency: req.body.name_insurance_agency,
                    date_begin: req.body.date_begin,
                    date_end: req.body.date_end,
                    cost_insurance: req.body.cost_insurance,
                    vehicule_fleet_id: req.body.vehicule_fleet_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`vehicule insurance was updated successfully`))
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
            }
            else {
                return res.status(200).send(insurance);
            }
        });
    },
    deleteInsurance(req, res) {
        sequelize
            .query("DELETE FROM vehicule_insurance WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('vehicule insurance deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy92ZWhpY3VsZUluc3VyYW5jZS50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy92ZWhpY3VsZUluc3VyYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLDRDQUE0QztBQUU1QyxNQUFNLEVBQUUsR0FBRyx3QkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFFL0IsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDdEIsU0FBUzthQUNOLEtBQUssQ0FDSixtSkFBbUo7WUFDakosR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0I7WUFDL0IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCO1lBQzlCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNqQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3ZCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtZQUMxQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7YUFDbkUsS0FBSyxDQUFDLENBQUMsS0FBSyxF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QUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBUZWNobmljYWxJbnNwZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9UZWNobmljYWxJbnNwZWN0aW9uJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgaW5zdXJhbmNlID0gZGIuVmVoaWN1bGVJbnN1cmFuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnNlcnRJbnN1cmFuY2UocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyB2ZWhpY3VsZV9pbnN1cmFuY2UgKHJlZl9pbnN1cmFuY2VfY29udHJhY3QsIG5hbWVfaW5zdXJhbmNlX2FnZW5jeSwgZGF0ZV9iZWdpbiwgZGF0ZV9lbmQsIGNvc3RfaW5zdXJhbmNlLCB2ZWhpY3VsZV9mbGVldF9pZCApIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnJlZl9pbnN1cmFuY2VfY29udHJhY3QgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5uYW1lX2luc3VyYW5jZV9hZ2VuY3kgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfYmVnaW4gK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kYXRlX2VuZCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmNvc3RfaW5zdXJhbmNlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudmVoaWN1bGVfZmxlZXRfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3ZlaGljdWxlIGluc3VyYW5jZSBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZUluc3VyYW5jZShyZXEsIHJlcykge1xuICAgIHJldHVybiBpbnN1cmFuY2VcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGluc3VyYW5jZSkgPT4ge1xuICAgICAgICBpZiAoIWluc3VyYW5jZSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgdmVoaWN1bGUgaW5zdXJhbmNlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaW5zdXJhbmNlXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgcmVmX2luc3VyYW5jZV9jb250cmFjdDogcmVxLmJvZHkucmVmX2luc3VyYW5jZV9jb250cmFjdCxcbiAgICAgICAgICAgICAgbmFtZV9pbnN1cmFuY2VfYWdlbmN5OiByZXEuYm9keS5uYW1lX2luc3VyYW5jZV9hZ2VuY3ksXG4gICAgICAgICAgICAgIGRhdGVfYmVnaW46IHJlcS5ib2R5LmRhdGVfYmVnaW4sXG4gICAgICAgICAgICAgIGRhdGVfZW5kOiByZXEuYm9keS5kYXRlX2VuZCxcbiAgICAgICAgICAgICAgY29zdF9pbnN1cmFuY2U6IHJlcS5ib2R5LmNvc3RfaW5zdXJhbmNlLFxuICAgICAgICAgICAgICB2ZWhpY3VsZV9mbGVldF9pZDogcmVxLmJvZHkudmVoaWN1bGVfZmxlZXRfaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoYHZlaGljdWxlIGluc3VyYW5jZSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRJbnN1cmFuY2UocmVxLCByZXMpIHtcbiAgICByZXR1cm4gaW5zdXJhbmNlXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChpbnN1cmFuY2UpID0+IHtcbiAgICAgICAgaWYgKCFpbnN1cmFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgdmVoaWN1bGUgaW5zdXJhbmNlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoaW5zdXJhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZUluc3VyYW5jZShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHZlaGljdWxlX2luc3VyYW5jZSBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgndmVoaWN1bGUgaW5zdXJhbmNlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==