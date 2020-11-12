"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const rentWithDriverUsualCustomer = db.RentWithDriverUsualCustomer;
module.exports = {
    //insertion of a new company
    insertRentWithDriverUsualCustomer(req, res) {
        sequelize
            .query("INSERT INTO rent_with_driver_usual_customer(ref, date_rent, hour_rent, date_prev_return,hour_prev_return,date_return,deposit,usual_customer_id ) VALUES('" +
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
            req.body.usual_customer_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('rent added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateRentWithDriverUsualCustomer(req, res) {
        return rentWithDriverUsualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentWithDriverUsualCustomer) => {
            if (!rentWithDriverUsualCustomer) {
                return res.status(200).send({
                    message: ' inexistant rent',
                });
            }
            else {
                return rentWithDriverUsualCustomer
                    .update({
                    ref: req.body.ref,
                    date_rent: req.body.date_rent,
                    hour_rent: req.body.hour_rent,
                    date_prev_return: req.body.date_prev_return,
                    date_return: req.body.date_return,
                    deposit: req.body.deposit,
                    usual_customer_id: req.body.usual_customer_id,
                })
                    .then(() => res.status(200).send(`rent updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readRentWithDriverUsualCustomer(req, res) {
        return rentWithDriverUsualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((rentWithDriverUsualCustomer) => {
            if (!rentWithDriverUsualCustomer) {
                return res.status(200).send({
                    message: 'inexistant rent',
                });
            }
            else {
                return res.status(200).send(rentWithDriverUsualCustomer);
            }
        });
    },
    // read rentWithDriverUsualCustomer with pagination
    readRentWithDriverUsualCustomerChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return rentWithDriverUsualCustomer
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((rentWithDriverUsualCustomer) => {
            if (!rentWithDriverUsualCustomer) {
                return res.status(200).send({
                    message: 'inexistant rentWithDriverUsualCustomer',
                });
            }
            else {
                return res.status(200).send(rentWithDriverUsualCustomer);
            }
        });
    },
    deleteRentWithDriverUsualCustomer(req, res) {
        sequelize
            .query("DELETE FROM rent_with_driver_usual_customer  WHERE id='" +
            req.params.id +
            "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('rent deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9yZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLDJCQUEyQixHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztBQUVuRSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsNEJBQTRCO0lBQzVCLGlDQUFpQyxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLFNBQVM7YUFDTixLQUFLLENBQ0osMkpBQTJKO1lBQ3pKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNaLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDbEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDekIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsSUFBSSxFQUVOLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVB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LFFBQVEsQ0FBQztRQUVqQyxPQUFPLDJCQUEyQjthQUMvQixPQUFPLENBQUM7WUFDUCxhQUFhO1lBQ2IsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSx3Q0FBd0M7aUJBQ2xELENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGlDQUFpQyxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLFNBQVM7YUFDTixLQUFLLENBQ0oseURBQXlEO1lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNiLEdBQUcsRUFDTCxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXInO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIgPSBkYi5SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHJlbnRfd2l0aF9kcml2ZXJfdXN1YWxfY3VzdG9tZXIocmVmLCBkYXRlX3JlbnQsIGhvdXJfcmVudCwgZGF0ZV9wcmV2X3JldHVybixob3VyX3ByZXZfcmV0dXJuLGRhdGVfcmV0dXJuLGRlcG9zaXQsdXN1YWxfY3VzdG9tZXJfaWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZWYgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kYXRlX3JlbnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5ob3VyX3JlbnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kYXRlX3ByZXZfcmV0dXJuICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuaG91cl9wcmV2X3JldHVybiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfcmV0dXJuICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZGVwb3NpdCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnVzdWFsX2N1c3RvbWVyX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdyZW50IGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCByZW50JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgcmVmOiByZXEuYm9keS5yZWYsXG4gICAgICAgICAgICAgIGRhdGVfcmVudDogcmVxLmJvZHkuZGF0ZV9yZW50LFxuICAgICAgICAgICAgICBob3VyX3JlbnQ6IHJlcS5ib2R5LmhvdXJfcmVudCxcbiAgICAgICAgICAgICAgZGF0ZV9wcmV2X3JldHVybjogcmVxLmJvZHkuZGF0ZV9wcmV2X3JldHVybixcbiAgICAgICAgICAgICAgZGF0ZV9yZXR1cm46IHJlcS5ib2R5LmRhdGVfcmV0dXJuLFxuICAgICAgICAgICAgICBkZXBvc2l0OiByZXEuYm9keS5kZXBvc2l0LFxuICAgICAgICAgICAgICB1c3VhbF9jdXN0b21lcl9pZDogcmVxLmJvZHkudXN1YWxfY3VzdG9tZXJfaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoYHJlbnQgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHJlbnQnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgLy8gcmVhZCByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIgd2l0aCBwYWdpbmF0aW9uXG4gIHJlYWRSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJDaHVuayhyZXEsIHJlcykge1xuICAgIGxldCBwYWdlID0gcmVxLmJvZHkucGFnZTtcbiAgICBsZXQgcGFnZVNpemUgPSByZXEuYm9keS5wYWdlU2l6ZTtcblxuICAgIHJldHVybiByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJcbiAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgLy8gd2hlcmU6IHt9LFxuICAgICAgICBvZmZzZXQ6IHBhZ2UsXG4gICAgICAgIGxpbWl0OiBwYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSByZW50X3dpdGhfZHJpdmVyX3VzdWFsX2N1c3RvbWVyICBXSEVSRSBpZD0nXCIgK1xuICAgICAgICAgIHJlcS5wYXJhbXMuaWQgK1xuICAgICAgICAgIFwiJ1wiLFxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLkRFTEVURSB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3JlbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG59O1xuIl19