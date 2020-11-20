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
            .query("INSERT INTO usual_customer (first_name, last_name, personal_ident, age, special_condition, trip_id, personal_group_id, client_company_id  ) VALUES('" +
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
            req.body.trip_id +
            "', '" +
            req.body.personal_group_id +
            "', '" +
            req.body.client_company_id +
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
                    trip_id: req.body.trip_id,
                    personal_group_id: req.body.personal_group_id,
                    client_company_id: req.body.client_company_id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy91c3VhbEN1c3RvbWVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3VzdWFsQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUMxQixTQUFTO2FBQ04sS0FBSyxDQUNKLHNKQUFzSjtZQUNwSixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNsQixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3ZCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDWixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FB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QUM3RCxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUNoRSxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgVXN1YWxDdXN0b21lckZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvVXN1YWxDdXN0b21lcic7XG5jb25zdCBkYiA9IGNyZWF0ZU1vZGVscyhzZXF1ZWxpemVDb25maWcpO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBkYi5zZXF1ZWxpemU7XG5cbmNvbnN0IHVzdWFsQ3VzdG9tZXIgPSBkYi5Vc3VhbEN1c3RvbWVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy9pbnNlcnRpb24gb2YgYSBuZXcgY29tcGFueVxuICBpbnNlcnRVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gdXN1YWxfY3VzdG9tZXIgKGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcGVyc29uYWxfaWRlbnQsIGFnZSwgc3BlY2lhbF9jb25kaXRpb24sIHRyaXBfaWQsIHBlcnNvbmFsX2dyb3VwX2lkLCBjbGllbnRfY29tcGFueV9pZCAgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5maXJzdF9uYW1lICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubGFzdF9uYW1lICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wZXJzb25hbF9pZGVudCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmFnZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnNwZWNpYWxfY29uZGl0aW9uICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudHJpcF9pZCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnBlcnNvbmFsX2dyb3VwX2lkICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY2xpZW50X2NvbXBhbnlfaWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3VzdWFsQ3VzdG9tZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVVc3VhbEN1c3RvbWVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHVzdWFsQ3VzdG9tZXJcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHVzdWFsQ3VzdG9tZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c3VhbEN1c3RvbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCB1c3VhbEN1c3RvbWVyJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdXN1YWxDdXN0b21lclxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIGZpcnN0X25hbWU6IHJlcS5ib2R5LmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgIGxhc3RfbmFtZTogcmVxLmJvZHkubGFzdF9uYW1lLFxuICAgICAgICAgICAgICBwZXJzb25hbF9pZGVudDogcmVxLmJvZHkucGVyc29uYWxfaWRlbnQsXG4gICAgICAgICAgICAgIGFnZTogcmVxLmJvZHkuYWdlLFxuICAgICAgICAgICAgICBzcGVjaWFsX2NvbmRpdGlvbjogcmVxLmJvZHkuc3BlY2lhbF9jb25kaXRpb24sXG4gICAgICAgICAgICAgIHRyaXBfaWQ6IHJlcS5ib2R5LnRyaXBfaWQsXG4gICAgICAgICAgICAgIHBlcnNvbmFsX2dyb3VwX2lkOiByZXEuYm9keS5wZXJzb25hbF9ncm91cF9pZCxcbiAgICAgICAgICAgICAgY2xpZW50X2NvbXBhbnlfaWQ6IHJlcS5ib2R5LmNsaWVudF9jb21wYW55X2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgIC5zZW5kKGAke3JlcS5ib2R5LmZpcnN0X25hbWV9IHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZFVzdWFsQ3VzdG9tZXIocmVxLCByZXMpIHtcbiAgICByZXR1cm4gdXN1YWxDdXN0b21lclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigodXN1YWxDdXN0b21lcikgPT4ge1xuICAgICAgICBpZiAoIXVzdWFsQ3VzdG9tZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgdXN1YWxDdXN0b21lcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzdWFsQ3VzdG9tZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlVXN1YWxDdXN0b21lcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHVzdWFsX2N1c3RvbWVyIFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd1c3VhbEN1c3RvbWVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==