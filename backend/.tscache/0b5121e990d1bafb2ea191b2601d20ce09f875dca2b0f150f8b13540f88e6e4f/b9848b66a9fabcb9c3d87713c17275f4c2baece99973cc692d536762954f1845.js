"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const stopoverUsualCustomer = db.StopoverUsualCustomer;
module.exports = {
    insertStopoverUsualCustomer(req, res) {
        sequelize
            .query("INSERT INTO stopover_usual_customer (adress, zone, time_and_date, city, country,km_from_departure,duration_hour_from_departure, usual_customer_id ) VALUES('" +
            req.body.adress +
            "', '" +
            req.body.zone +
            "','" +
            req.body.time_and_date +
            "', '" +
            req.body.city +
            "', '" +
            req.body.country +
            "', '" +
            req.body.km_from_departure +
            "', '" +
            req.body.duration_hour_from_departure +
            "','" +
            req.body.usual_customer_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('stopoverUsualCustomer added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateStopoverUsualCustomer(req, res) {
        return stopoverUsualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((stopoverUsualCustomer) => {
            if (!stopoverUsualCustomer) {
                return res.status(200).send({
                    message: ' inexistant stopover UsualCustomer',
                });
            }
            else {
                return stopoverUsualCustomer
                    .update({
                    adress: req.body.adress,
                    zone: req.body.zone,
                    time_and_date: req.body.time_and_date,
                    country: req.body.country,
                    km_from_departure: req.body.km_from_departure,
                    duration_hour_from_departure: req.body.duration_hour_from_departure,
                    usual_customer_id: req.body.usual_customer_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`stopoverUsualCustomer was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readStopoverUsualCustomer(req, res) {
        return stopoverUsualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((stopoverUsualCustomer) => {
            if (!stopoverUsualCustomer) {
                return res.status(200).send({
                    message: 'inexistant stopoverUsualCustomer',
                });
            }
            else {
                return res.status(200).send(stopoverUsualCustomer);
            }
        });
    },
    deleteStopoverUsualCustomer(req, res) {
        sequelize
            .query("DELETE FROM stopover_usual_customer WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('stopoverUsualCustomer deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9zdG9wb3ZlclVzdWFsQ3VzdG9tZXIudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcG92ZXJVc3VhbEN1c3RvbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsMkJBQTJCLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbEMsU0FBUzthQUNOLEtBQUssQ0FDSiw4SkFBOEo7WUFDNUosR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2YsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDdEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QjtZQUNyQyxLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsSUFBSSxFQUVOLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FB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RUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7YUFDeEUsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFN0b3BvdmVyVXN1YWxDdXN0b21lckZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvU3RvcG92ZXJVc3VhbEN1c3RvbWVyJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3Qgc3RvcG92ZXJVc3VhbEN1c3RvbWVyID0gZGIuU3RvcG92ZXJVc3VhbEN1c3RvbWVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zZXJ0U3RvcG92ZXJVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gc3RvcG92ZXJfdXN1YWxfY3VzdG9tZXIgKGFkcmVzcywgem9uZSwgdGltZV9hbmRfZGF0ZSwgY2l0eSwgY291bnRyeSxrbV9mcm9tX2RlcGFydHVyZSxkdXJhdGlvbl9ob3VyX2Zyb21fZGVwYXJ0dXJlLCB1c3VhbF9jdXN0b21lcl9pZCApIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmFkcmVzcyArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnpvbmUgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnRpbWVfYW5kX2RhdGUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5jaXR5ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY291bnRyeSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmttX2Zyb21fZGVwYXJ0dXJlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZHVyYXRpb25faG91cl9mcm9tX2RlcGFydHVyZSArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudXN1YWxfY3VzdG9tZXJfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3N0b3BvdmVyVXN1YWxDdXN0b21lciBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZVN0b3BvdmVyVXN1YWxDdXN0b21lcihyZXEsIHJlcykge1xuICAgIHJldHVybiBzdG9wb3ZlclVzdWFsQ3VzdG9tZXJcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHN0b3BvdmVyVXN1YWxDdXN0b21lcikgPT4ge1xuICAgICAgICBpZiAoIXN0b3BvdmVyVXN1YWxDdXN0b21lcikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgc3RvcG92ZXIgVXN1YWxDdXN0b21lcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3BvdmVyVXN1YWxDdXN0b21lclxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIGFkcmVzczogcmVxLmJvZHkuYWRyZXNzLFxuICAgICAgICAgICAgICB6b25lOiByZXEuYm9keS56b25lLFxuICAgICAgICAgICAgICB0aW1lX2FuZF9kYXRlOiByZXEuYm9keS50aW1lX2FuZF9kYXRlLFxuICAgICAgICAgICAgICBjb3VudHJ5OiByZXEuYm9keS5jb3VudHJ5LFxuICAgICAgICAgICAgICBrbV9mcm9tX2RlcGFydHVyZTogcmVxLmJvZHkua21fZnJvbV9kZXBhcnR1cmUsXG4gICAgICAgICAgICAgIGR1cmF0aW9uX2hvdXJfZnJvbV9kZXBhcnR1cmU6XG4gICAgICAgICAgICAgICAgcmVxLmJvZHkuZHVyYXRpb25faG91cl9mcm9tX2RlcGFydHVyZSxcbiAgICAgICAgICAgICAgdXN1YWxfY3VzdG9tZXJfaWQ6IHJlcS5ib2R5LnVzdWFsX2N1c3RvbWVyX2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgIC5zZW5kKGBzdG9wb3ZlclVzdWFsQ3VzdG9tZXIgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkU3RvcG92ZXJVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHN0b3BvdmVyVXN1YWxDdXN0b21lclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoc3RvcG92ZXJVc3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghc3RvcG92ZXJVc3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHN0b3BvdmVyVXN1YWxDdXN0b21lcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHN0b3BvdmVyVXN1YWxDdXN0b21lcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVTdG9wb3ZlclVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSBzdG9wb3Zlcl91c3VhbF9jdXN0b21lciBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnc3RvcG92ZXJVc3VhbEN1c3RvbWVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==