"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const personalGroup = db.PersonalGroup;
module.exports = {
    //insertion of a new company
    insertPersonalGroup(req, res) {
        sequelize
            .query("INSERT INTO personal_group (group_name, group_number) VALUES('" +
            req.body.group_name +
            "', '" +
            req.body.group_number +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('personalGroup added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updatePersonalGroup(req, res) {
        return personalGroup
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((personalGroup) => {
            if (!personalGroup) {
                return res.status(200).send({
                    message: ' inexistant personalGroup',
                });
            }
            else {
                return personalGroup
                    .update({
                    group_name: req.body.group_name,
                    group_number: req.body.group_number,
                })
                    .then(() => res
                    .status(200)
                    .send(`${req.body.group_name} was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readPersonalGroup(req, res) {
        return personalGroup
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((personalGroup) => {
            if (!personalGroup) {
                return res.status(200).send({
                    message: 'inexistant personal group',
                });
            }
            else {
                return res.status(200).send(personalGroup);
            }
        });
    },
    // read personalGroup with pagination
    readPersonalGroupChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return personalGroup
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((personalGroup) => {
            if (!personalGroup) {
                return res.status(200).send({
                    message: 'inexistant personal Group',
                });
            }
            else {
                return res.status(200).send(personalGroup);
            }
        });
    },
    deletePersonalGroup(req, res) {
        sequelize
            .query("DELETE FROM personal_group WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('personal group deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9wZXJzb25hbEdyb3VwLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3BlcnNvbmFsR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUMxQixTQUFTO2FBQ04sS0FBSyxDQUNKLGdFQUFnRTtZQUM5RCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDbkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixJQUFJLEVBRU4sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDckMsRUFBRSxDQUNIO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7YUFDOUQsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUMxQixPQUFPLGFBQWE7YUFDakIsT0FBTyxDQUFDO1lBQ1AsS0FBSyxF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LEVBQzdELEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2FBQ2pFLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBQZXJzb25hbEdyb3VwRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9QZXJzb25hbEdyb3VwJztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgcGVyc29uYWxHcm91cCA9IGRiLlBlcnNvbmFsR3JvdXA7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydFBlcnNvbmFsR3JvdXAocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBwZXJzb25hbF9ncm91cCAoZ3JvdXBfbmFtZSwgZ3JvdXBfbnVtYmVyKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5ncm91cF9uYW1lICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZ3JvdXBfbnVtYmVyICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdwZXJzb25hbEdyb3VwIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlUGVyc29uYWxHcm91cChyZXEsIHJlcykge1xuICAgIHJldHVybiBwZXJzb25hbEdyb3VwXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwZXJzb25hbEdyb3VwKSA9PiB7XG4gICAgICAgIGlmICghcGVyc29uYWxHcm91cCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgcGVyc29uYWxHcm91cCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHBlcnNvbmFsR3JvdXBcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBncm91cF9uYW1lOiByZXEuYm9keS5ncm91cF9uYW1lLFxuICAgICAgICAgICAgICBncm91cF9udW1iZXI6IHJlcS5ib2R5Lmdyb3VwX251bWJlcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZChgJHtyZXEuYm9keS5ncm91cF9uYW1lfSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRQZXJzb25hbEdyb3VwKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHBlcnNvbmFsR3JvdXBcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHBlcnNvbmFsR3JvdXApID0+IHtcbiAgICAgICAgaWYgKCFwZXJzb25hbEdyb3VwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IHBlcnNvbmFsIGdyb3VwJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocGVyc29uYWxHcm91cCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICAvLyByZWFkIHBlcnNvbmFsR3JvdXAgd2l0aCBwYWdpbmF0aW9uXG4gIHJlYWRQZXJzb25hbEdyb3VwQ2h1bmsocmVxLCByZXMpIHtcbiAgICBsZXQgcGFnZSA9IHJlcS5ib2R5LnBhZ2U7XG4gICAgbGV0IHBhZ2VTaXplID0gcmVxLmJvZHkucGFnZVNpemU7XG5cbiAgICByZXR1cm4gcGVyc29uYWxHcm91cFxuICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAvLyB3aGVyZToge30sXG4gICAgICAgIG9mZnNldDogcGFnZSxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwZXJzb25hbEdyb3VwKSA9PiB7XG4gICAgICAgIGlmICghcGVyc29uYWxHcm91cCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBwZXJzb25hbCBHcm91cCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHBlcnNvbmFsR3JvdXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlUGVyc29uYWxHcm91cChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHBlcnNvbmFsX2dyb3VwIFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdwZXJzb25hbCBncm91cCBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=