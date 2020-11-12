"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const inspection = db.TechnicalInspection;
module.exports = {
    insertInspection(req, res) {
        sequelize
            .query("INSERT INTO technical_inspection (ref_ti, date_inspection, nature_inspection, observations, name_inspection_agency,ref_agreement,expiration_date,cost_ti, vehicule_fleet_id ) VALUES('" +
            req.body.ref_ti +
            "', '" +
            req.body.date_inspection +
            "','" +
            req.body.nature_inspection +
            "', '" +
            req.body.observations +
            "', '" +
            req.body.name_inspection_agency +
            "', '" +
            req.body.ref_agreement +
            "', '" +
            req.body.expiration_date +
            "','" +
            req.body.cost_ti +
            "', '" +
            req.body.vehicule_fleet_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('technical inspection added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateInspection(req, res) {
        return inspection
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((inspection) => {
            if (!inspection) {
                return res.status(200).send({
                    message: ' inexistant technical inspection',
                });
            }
            else {
                return inspection
                    .update({
                    ref_ti: req.body.ref_ti,
                    date_inspection: req.body.date_inspection,
                    nature_inspection: req.body.nature_inspection,
                    observations: req.body.observations,
                    name_inspection_agency: req.body.name_inspection_agency,
                    ref_agreement: req.body.ref_agreement,
                    expiration_date: req.body.expiration_date,
                    cost_ti: req.body.cost_ti,
                    vehicule_fleet_id: req.body.vehicule_fleet_id,
                })
                    .then(() => res.status(200).send(`inspection was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readInspection(req, res) {
        return inspection
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((inspection) => {
            if (!inspection) {
                return res.status(200).send({
                    message: 'inexistant inspection',
                });
            }
            else {
                return res.status(200).send(inspection);
            }
        });
    },
    // read inspection with pagination
    readInspectionChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return inspection
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((inspection) => {
            if (!inspection) {
                return res.status(200).send({
                    message: 'inexistant inspection',
                });
            }
            else {
                return res.status(200).send(inspection);
            }
        });
    },
    deleteInspection(req, res) {
        sequelize
            .query("DELETE FROM technical_inspection WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('inspection deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy90ZWNobmljYWxJbnNwZWN0aW9uLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3RlY2huaWNhbEluc3BlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztBQUUxQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDdkIsU0FBUzthQUNOLEtBQUssQ0FDSix3TEFBd0w7WUFDdEwsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2YsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUN4QixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0I7WUFDL0IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3hCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1B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XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBUZWNobmljYWxJbnNwZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9UZWNobmljYWxJbnNwZWN0aW9uJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgaW5zcGVjdGlvbiA9IGRiLlRlY2huaWNhbEluc3BlY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnNlcnRJbnNwZWN0aW9uKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gdGVjaG5pY2FsX2luc3BlY3Rpb24gKHJlZl90aSwgZGF0ZV9pbnNwZWN0aW9uLCBuYXR1cmVfaW5zcGVjdGlvbiwgb2JzZXJ2YXRpb25zLCBuYW1lX2luc3BlY3Rpb25fYWdlbmN5LHJlZl9hZ3JlZW1lbnQsZXhwaXJhdGlvbl9kYXRlLGNvc3RfdGksIHZlaGljdWxlX2ZsZWV0X2lkICkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucmVmX3RpICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGF0ZV9pbnNwZWN0aW9uICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5uYXR1cmVfaW5zcGVjdGlvbiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lm9ic2VydmF0aW9ucyArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lm5hbWVfaW5zcGVjdGlvbl9hZ2VuY3kgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZWZfYWdyZWVtZW50ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZXhwaXJhdGlvbl9kYXRlICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5jb3N0X3RpICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudmVoaWN1bGVfZmxlZXRfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3RlY2huaWNhbCBpbnNwZWN0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlSW5zcGVjdGlvbihyZXEsIHJlcykge1xuICAgIHJldHVybiBpbnNwZWN0aW9uXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChpbnNwZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICghaW5zcGVjdGlvbikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgdGVjaG5pY2FsIGluc3BlY3Rpb24nLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpbnNwZWN0aW9uXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgcmVmX3RpOiByZXEuYm9keS5yZWZfdGksXG4gICAgICAgICAgICAgIGRhdGVfaW5zcGVjdGlvbjogcmVxLmJvZHkuZGF0ZV9pbnNwZWN0aW9uLFxuICAgICAgICAgICAgICBuYXR1cmVfaW5zcGVjdGlvbjogcmVxLmJvZHkubmF0dXJlX2luc3BlY3Rpb24sXG4gICAgICAgICAgICAgIG9ic2VydmF0aW9uczogcmVxLmJvZHkub2JzZXJ2YXRpb25zLFxuICAgICAgICAgICAgICBuYW1lX2luc3BlY3Rpb25fYWdlbmN5OiByZXEuYm9keS5uYW1lX2luc3BlY3Rpb25fYWdlbmN5LFxuICAgICAgICAgICAgICByZWZfYWdyZWVtZW50OiByZXEuYm9keS5yZWZfYWdyZWVtZW50LFxuICAgICAgICAgICAgICBleHBpcmF0aW9uX2RhdGU6IHJlcS5ib2R5LmV4cGlyYXRpb25fZGF0ZSxcbiAgICAgICAgICAgICAgY29zdF90aTogcmVxLmJvZHkuY29zdF90aSxcbiAgICAgICAgICAgICAgdmVoaWN1bGVfZmxlZXRfaWQ6IHJlcS5ib2R5LnZlaGljdWxlX2ZsZWV0X2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGBpbnNwZWN0aW9uIHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZEluc3BlY3Rpb24ocmVxLCByZXMpIHtcbiAgICByZXR1cm4gaW5zcGVjdGlvblxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoaW5zcGVjdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWluc3BlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgaW5zcGVjdGlvbicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGluc3BlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgLy8gcmVhZCBpbnNwZWN0aW9uIHdpdGggcGFnaW5hdGlvblxuICByZWFkSW5zcGVjdGlvbkNodW5rKHJlcSwgcmVzKSB7XG4gICAgbGV0IHBhZ2UgPSByZXEuYm9keS5wYWdlO1xuICAgIGxldCBwYWdlU2l6ZSA9IHJlcS5ib2R5LnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIGluc3BlY3Rpb25cbiAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgLy8gd2hlcmU6IHt9LFxuICAgICAgICBvZmZzZXQ6IHBhZ2UsXG4gICAgICAgIGxpbWl0OiBwYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoaW5zcGVjdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWluc3BlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgaW5zcGVjdGlvbicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGluc3BlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlSW5zcGVjdGlvbihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHRlY2huaWNhbF9pbnNwZWN0aW9uIFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdpbnNwZWN0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==