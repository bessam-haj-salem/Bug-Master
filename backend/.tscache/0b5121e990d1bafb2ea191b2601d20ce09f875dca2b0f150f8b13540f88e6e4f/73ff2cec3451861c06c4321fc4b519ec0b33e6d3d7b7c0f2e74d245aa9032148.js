"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const stopoverTrip = db.StopoverTrip;
module.exports = {
    insertStopoverTrip(req, res) {
        sequelize
            .query("INSERT INTO stopover_trip (adress, zone, time_and_date, city, country,km_from_departure,duration_hour_from_departure, trip_id ) VALUES('" +
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
            req.body.trip_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('stopoverTrip added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateStopoverTrip(req, res) {
        return stopoverTrip
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((stopoverTrip) => {
            if (!stopoverTrip) {
                return res.status(200).send({
                    message: ' inexistant stopover Trip',
                });
            }
            else {
                return stopoverTrip
                    .update({
                    adress: req.body.adress,
                    zone: req.body.zone,
                    time_and_date: req.body.time_and_date,
                    country: req.body.country,
                    km_from_departure: req.body.km_from_departure,
                    duration_hour_from_departure: req.body.duration_hour_from_departure,
                    trip_id: req.body.trip_id,
                })
                    .then(() => res.status(200).send(`stopoverTrip was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readStopoverTrip(req, res) {
        return stopoverTrip
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((stopoverTrip) => {
            if (!stopoverTrip) {
                return res.status(200).send({
                    message: 'inexistant stopoverTrip',
                });
            }
            else {
                return res.status(200).send(stopoverTrip);
            }
        });
    },
    // read stopoverTrip with pagination
    readStopoverTripChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return stopoverTrip
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((stopoverTrip) => {
            if (!stopoverTrip) {
                return res.status(200).send({
                    message: 'inexistant stopover Trip',
                });
            }
            else {
                return res.status(200).send(stopoverTrip);
            }
        });
    },
    deleteStopoverTrip(req, res) {
        sequelize
            .query("DELETE FROM stopover_trip WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('stopoverTrip deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9zdG9wb3ZlclRyaXAudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcG92ZXJUcmlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN6QixTQUFTO2FBQ04sS0FBSyxDQUNKLDBJQUEwSTtZQUN4SSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2IsS0FBSztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCO1lBQ3JDLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEIsSUFBSSxFQUVOLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdB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RSxJQUFJO1lBQ1osS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSwwQkFBMEI7aUJBQ3BDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN6QixTQUFTO2FBQ04sS0FBSyxDQUNKLHNDQUFzQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDNUQsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDL0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IFN0b3BvdmVyVHJpcEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvU3RvcG92ZXJUcmlwJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3Qgc3RvcG92ZXJUcmlwID0gZGIuU3RvcG92ZXJUcmlwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zZXJ0U3RvcG92ZXJUcmlwKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gc3RvcG92ZXJfdHJpcCAoYWRyZXNzLCB6b25lLCB0aW1lX2FuZF9kYXRlLCBjaXR5LCBjb3VudHJ5LGttX2Zyb21fZGVwYXJ0dXJlLGR1cmF0aW9uX2hvdXJfZnJvbV9kZXBhcnR1cmUsIHRyaXBfaWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hZHJlc3MgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS56b25lICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS50aW1lX2FuZF9kYXRlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY2l0eSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmNvdW50cnkgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5rbV9mcm9tX2RlcGFydHVyZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmR1cmF0aW9uX2hvdXJfZnJvbV9kZXBhcnR1cmUgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnRyaXBfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3N0b3BvdmVyVHJpcCBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZVN0b3BvdmVyVHJpcChyZXEsIHJlcykge1xuICAgIHJldHVybiBzdG9wb3ZlclRyaXBcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHN0b3BvdmVyVHJpcCkgPT4ge1xuICAgICAgICBpZiAoIXN0b3BvdmVyVHJpcCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgc3RvcG92ZXIgVHJpcCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3BvdmVyVHJpcFxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIGFkcmVzczogcmVxLmJvZHkuYWRyZXNzLFxuICAgICAgICAgICAgICB6b25lOiByZXEuYm9keS56b25lLFxuICAgICAgICAgICAgICB0aW1lX2FuZF9kYXRlOiByZXEuYm9keS50aW1lX2FuZF9kYXRlLFxuICAgICAgICAgICAgICBjb3VudHJ5OiByZXEuYm9keS5jb3VudHJ5LFxuICAgICAgICAgICAgICBrbV9mcm9tX2RlcGFydHVyZTogcmVxLmJvZHkua21fZnJvbV9kZXBhcnR1cmUsXG4gICAgICAgICAgICAgIGR1cmF0aW9uX2hvdXJfZnJvbV9kZXBhcnR1cmU6XG4gICAgICAgICAgICAgICAgcmVxLmJvZHkuZHVyYXRpb25faG91cl9mcm9tX2RlcGFydHVyZSxcbiAgICAgICAgICAgICAgdHJpcF9pZDogcmVxLmJvZHkudHJpcF9pZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChgc3RvcG92ZXJUcmlwIHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFN0b3BvdmVyVHJpcChyZXEsIHJlcykge1xuICAgIHJldHVybiBzdG9wb3ZlclRyaXBcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHN0b3BvdmVyVHJpcCkgPT4ge1xuICAgICAgICBpZiAoIXN0b3BvdmVyVHJpcCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBzdG9wb3ZlclRyaXAnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChzdG9wb3ZlclRyaXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgLy8gcmVhZCBzdG9wb3ZlclRyaXAgd2l0aCBwYWdpbmF0aW9uXG4gIHJlYWRTdG9wb3ZlclRyaXBDaHVuayhyZXEsIHJlcykge1xuICAgIGxldCBwYWdlID0gcmVxLmJvZHkucGFnZTtcbiAgICBsZXQgcGFnZVNpemUgPSByZXEuYm9keS5wYWdlU2l6ZTtcblxuICAgIHJldHVybiBzdG9wb3ZlclRyaXBcbiAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgLy8gd2hlcmU6IHt9LFxuICAgICAgICBvZmZzZXQ6IHBhZ2UsXG4gICAgICAgIGxpbWl0OiBwYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoc3RvcG92ZXJUcmlwKSA9PiB7XG4gICAgICAgIGlmICghc3RvcG92ZXJUcmlwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHN0b3BvdmVyIFRyaXAnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChzdG9wb3ZlclRyaXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlU3RvcG92ZXJUcmlwKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiREVMRVRFIEZST00gc3RvcG92ZXJfdHJpcCBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnc3RvcG92ZXJUcmlwIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==