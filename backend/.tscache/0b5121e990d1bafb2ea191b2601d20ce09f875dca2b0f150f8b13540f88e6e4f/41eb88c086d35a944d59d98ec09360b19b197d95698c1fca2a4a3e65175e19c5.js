"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const rentWithDriverClientCompany = db.RentWithDriverClientCompany;
module.exports = {
    //insertion of a new company
    insertRentWithDriverClientCompany(req, res) {
        sequelize
            .query("INSERT INTO rent_with_driver_client_company (ref, date_rent, hour_rent, date_prev_return,hour_prev_return,date_return,deposit,client_company_id ) VALUES('" +
            req.body.ref +
            "', '" +
            req.body.date_rent +
            "', '" +
            req.body.hour_rent +
            "', '" +
            req.body.date_prev_return +
            "', '" +
            req.body.hour_prev_return +
            "', '" +
            req.body.date_return +
            "', '" +
            req.body.deposit +
            "', '" +
            req.body.client_company_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('rent added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateRentWithDriverClientCompany(req, res) {
        return rentWithDriverClientCompany
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentWithDriverClientCompany) => {
            if (!rentWithDriverClientCompany) {
                return res.status(200).send({
                    message: ' inexistant rent',
                });
            }
            else {
                return rentWithDriverClientCompany
                    .update({
                    ref: req.body.ref,
                    date_rent: req.body.date_rent,
                    hour_rent: req.body.hour_rent,
                    date_prev_return: req.body.date_prev_return,
                    date_return: req.body.date_return,
                    deposit: req.body.deposit,
                    client_company_id: req.body.client_company_id,
                })
                    .then(() => res.status(200).send(`rent updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readRentWithDriverClientCompany(req, res) {
        return rentWithDriverClientCompany
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentWithDriverClientCompany) => {
            if (!rentWithDriverClientCompany) {
                return res.status(200).send({
                    message: 'inexistant rent',
                });
            }
            else {
                return res.status(200).send(rentWithDriverClientCompany);
            }
        });
    },
    deleteRentWithDriverClientCompany(req, res) {
        sequelize
            .query("DELETE FROM rent_with_driver_client_company  WHERE id='" +
            req.params.id +
            "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('rent deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9yZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvcmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLDJCQUEyQixHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztBQUVuRSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsNEJBQTRCO0lBQzVCLGlDQUFpQyxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLFNBQVM7YUFDTixLQUFLLENBQ0osNEpBQTRKO1lBQzFKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNaLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDbEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDekIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsSUFBSSxFQUVOLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVB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VUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9SZW50V2l0aERyaXZlckNsaWVudENvbXBhbnknO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkgPSBkYi5SZW50V2l0aERyaXZlckNsaWVudENvbXBhbnk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHJlbnRfd2l0aF9kcml2ZXJfY2xpZW50X2NvbXBhbnkgKHJlZiwgZGF0ZV9yZW50LCBob3VyX3JlbnQsIGRhdGVfcHJldl9yZXR1cm4saG91cl9wcmV2X3JldHVybixkYXRlX3JldHVybixkZXBvc2l0LGNsaWVudF9jb21wYW55X2lkICkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucmVmICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGF0ZV9yZW50ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuaG91cl9yZW50ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGF0ZV9wcmV2X3JldHVybiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmhvdXJfcHJldl9yZXR1cm4gK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kYXRlX3JldHVybiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRlcG9zaXQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5jbGllbnRfY29tcGFueV9pZCArXG4gICAgICAgICAgXCInKVwiLFxuXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgncmVudCBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZVJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueShyZXEsIHJlcykge1xuICAgIHJldHVybiByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueSkgPT4ge1xuICAgICAgICBpZiAoIXJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgcmVudCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueVxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHJlZjogcmVxLmJvZHkucmVmLFxuICAgICAgICAgICAgICBkYXRlX3JlbnQ6IHJlcS5ib2R5LmRhdGVfcmVudCxcbiAgICAgICAgICAgICAgaG91cl9yZW50OiByZXEuYm9keS5ob3VyX3JlbnQsXG4gICAgICAgICAgICAgIGRhdGVfcHJldl9yZXR1cm46IHJlcS5ib2R5LmRhdGVfcHJldl9yZXR1cm4sXG4gICAgICAgICAgICAgIGRhdGVfcmV0dXJuOiByZXEuYm9keS5kYXRlX3JldHVybixcbiAgICAgICAgICAgICAgZGVwb3NpdDogcmVxLmJvZHkuZGVwb3NpdCxcbiAgICAgICAgICAgICAgY2xpZW50X2NvbXBhbnlfaWQ6IHJlcS5ib2R5LmNsaWVudF9jb21wYW55X2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKGByZW50IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueShyZXEsIHJlcykge1xuICAgIHJldHVybiByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueSkgPT4ge1xuICAgICAgICBpZiAoIXJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCByZW50JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZVJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHJlbnRfd2l0aF9kcml2ZXJfY2xpZW50X2NvbXBhbnkgIFdIRVJFIGlkPSdcIiArXG4gICAgICAgICAgcmVxLnBhcmFtcy5pZCArXG4gICAgICAgICAgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgncmVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=