"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const usualCustomer = db.UsualCustomer;
module.exports = {
    //insertion of a new company
    insertUsualCustomer(req, res) {
        sequelize
            .query("INSERT INTO usual_customer (first_name, last_name, personal_ident, age, special_condition,  personal_group_id ) VALUES('" +
            req.body.first_name +
            "', '" +
            req.body.last_name +
            "','" +
            req.body.personal_ident +
            "', '" +
            req.body.age +
            "', '" +
            req.body.special_condition +
            "', '" +
            req.body.personal_group_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('usualCustomer added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateUsualCustomer(req, res) {
        return usualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((usualCustomer) => {
            if (!usualCustomer) {
                return res.status(200).send({
                    message: ' inexistant usualCustomer',
                });
            }
            else {
                return usualCustomer
                    .update({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    personal_ident: req.body.personal_ident,
                    age: req.body.age,
                    special_condition: req.body.special_condition,
                    personal_group_id: req.body.personal_group_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`${req.body.first_name} was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readUsualCustomer(req, res) {
        return usualCustomer
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((usualCustomer) => {
            if (!usualCustomer) {
                return res.status(200).send({
                    message: 'inexistant usualCustomer',
                });
            }
            else {
                return res.status(200).send(usualCustomer);
            }
        });
    },
    deleteUsualCustomer(req, res) {
        sequelize
            .query("DELETE FROM usual_customer WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('usualCustomer deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy91c3VhbEN1c3RvbWVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3VzdWFsQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUMxQixTQUFTO2FBQ04sS0FBSyxDQUNKLDBIQUEwSDtZQUN4SCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3ZCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDWixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQzthQUM5RCxLQUFLLENBQUMsQ0FBQyxLQUFL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RSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBVc3VhbEN1c3RvbWVyRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9Vc3VhbEN1c3RvbWVyJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgdXN1YWxDdXN0b21lciA9IGRiLlVzdWFsQ3VzdG9tZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydFVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyB1c3VhbF9jdXN0b21lciAoZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwZXJzb25hbF9pZGVudCwgYWdlLCBzcGVjaWFsX2NvbmRpdGlvbiwgIHBlcnNvbmFsX2dyb3VwX2lkICkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZmlyc3RfbmFtZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lmxhc3RfbmFtZSArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGVyc29uYWxfaWRlbnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hZ2UgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5zcGVjaWFsX2NvbmRpdGlvbiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnBlcnNvbmFsX2dyb3VwX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd1c3VhbEN1c3RvbWVyIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlVXN1YWxDdXN0b21lcihyZXEsIHJlcykge1xuICAgIHJldHVybiB1c3VhbEN1c3RvbWVyXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh1c3VhbEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIGlmICghdXN1YWxDdXN0b21lcikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgdXN1YWxDdXN0b21lcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHVzdWFsQ3VzdG9tZXJcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBmaXJzdF9uYW1lOiByZXEuYm9keS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICBsYXN0X25hbWU6IHJlcS5ib2R5Lmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgcGVyc29uYWxfaWRlbnQ6IHJlcS5ib2R5LnBlcnNvbmFsX2lkZW50LFxuICAgICAgICAgICAgICBhZ2U6IHJlcS5ib2R5LmFnZSxcbiAgICAgICAgICAgICAgc3BlY2lhbF9jb25kaXRpb246IHJlcS5ib2R5LnNwZWNpYWxfY29uZGl0aW9uLFxuXG4gICAgICAgICAgICAgIHBlcnNvbmFsX2dyb3VwX2lkOiByZXEuYm9keS5wZXJzb25hbF9ncm91cF9pZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZChgJHtyZXEuYm9keS5maXJzdF9uYW1lfSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHVzdWFsQ3VzdG9tZXJcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHVzdWFsQ3VzdG9tZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHVzdWFsQ3VzdG9tZXInLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c3VhbEN1c3RvbWVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZVVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSB1c3VhbF9jdXN0b21lciBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgndXN1YWxDdXN0b21lciBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=