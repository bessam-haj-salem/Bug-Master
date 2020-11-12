"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const maintenance = db.VehiculeMaintenance;
module.exports = {
    insertMaintenance(req, res) {
        sequelize
            .query("INSERT INTO vehicule_maintenance (nature_maintenance, date_maintenance, designation_maintenance, cost_maintenance,  vehicule_fleet_id ) VALUES('" +
            req.body.nature_maintenance +
            "', '" +
            req.body.date_maintenance +
            "','" +
            req.body.designation_maintenance +
            "', '" +
            req.body.cost_maintenance +
            "', '" +
            req.body.vehicule_fleet_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('vehicule maintenance added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateMaintenance(req, res) {
        return maintenance
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((maintenance) => {
            if (!maintenance) {
                return res.status(200).send({
                    message: ' inexistant vehicule maintenance',
                });
            }
            else {
                return maintenance
                    .update({
                    nature_maintenance: req.body.nature_maintenance,
                    date_maintenance: req.body.date_maintenance,
                    designation_maintenance: req.body.designation_maintenance,
                    cost_maintenance: req.body.cost_maintenance,
                    vehicule_fleet_id: req.body.vehicule_fleet_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`vehicule maintenance was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readMaintenance(req, res) {
        return maintenance
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((maintenance) => {
            if (!maintenance) {
                return res.status(200).send({
                    message: 'inexistant vehicule maintenance',
                });
            }
            else {
                return res.status(200).send(maintenance);
            }
        });
    },
    deleteMaintenance(req, res) {
        sequelize
            .query("DELETE FROM vehicule_maintenance WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('vehicule maintenance deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy92ZWhpY3VsZU1haW50ZW5hbmNlLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3ZlaGljdWxlTWFpbnRlbmFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztBQUUzQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDeEIsU0FBUzthQUNOLEtBQUssQ0FDSixrSkFBa0o7WUFDaEosR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFDM0IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3pCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QjtZQUNoQyxNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDekIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzthQUNyRSxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgVmVoaWN1bGVNYWludGVuYW5jZUZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvVmVoaWN1bGVNYWludGVuYW5jZSc7XG5jb25zdCBkYiA9IGNyZWF0ZU1vZGVscyhzZXF1ZWxpemVDb25maWcpO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBkYi5zZXF1ZWxpemU7XG5cbmNvbnN0IG1haW50ZW5hbmNlID0gZGIuVmVoaWN1bGVNYWludGVuYW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluc2VydE1haW50ZW5hbmNlKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gdmVoaWN1bGVfbWFpbnRlbmFuY2UgKG5hdHVyZV9tYWludGVuYW5jZSwgZGF0ZV9tYWludGVuYW5jZSwgZGVzaWduYXRpb25fbWFpbnRlbmFuY2UsIGNvc3RfbWFpbnRlbmFuY2UsICB2ZWhpY3VsZV9mbGVldF9pZCApIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lm5hdHVyZV9tYWludGVuYW5jZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfbWFpbnRlbmFuY2UgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRlc2lnbmF0aW9uX21haW50ZW5hbmNlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY29zdF9tYWludGVuYW5jZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnZlaGljdWxlX2ZsZWV0X2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd2ZWhpY3VsZSBtYWludGVuYW5jZSBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZU1haW50ZW5hbmNlKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG1haW50ZW5hbmNlXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChtYWludGVuYW5jZSkgPT4ge1xuICAgICAgICBpZiAoIW1haW50ZW5hbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCB2ZWhpY3VsZSBtYWludGVuYW5jZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1haW50ZW5hbmNlXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgbmF0dXJlX21haW50ZW5hbmNlOiByZXEuYm9keS5uYXR1cmVfbWFpbnRlbmFuY2UsXG4gICAgICAgICAgICAgIGRhdGVfbWFpbnRlbmFuY2U6IHJlcS5ib2R5LmRhdGVfbWFpbnRlbmFuY2UsXG4gICAgICAgICAgICAgIGRlc2lnbmF0aW9uX21haW50ZW5hbmNlOiByZXEuYm9keS5kZXNpZ25hdGlvbl9tYWludGVuYW5jZSxcbiAgICAgICAgICAgICAgY29zdF9tYWludGVuYW5jZTogcmVxLmJvZHkuY29zdF9tYWludGVuYW5jZSxcbiAgICAgICAgICAgICAgdmVoaWN1bGVfZmxlZXRfaWQ6IHJlcS5ib2R5LnZlaGljdWxlX2ZsZWV0X2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgIC5zZW5kKGB2ZWhpY3VsZSBtYWludGVuYW5jZSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRNYWludGVuYW5jZShyZXEsIHJlcykge1xuICAgIHJldHVybiBtYWludGVuYW5jZVxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigobWFpbnRlbmFuY2UpID0+IHtcbiAgICAgICAgaWYgKCFtYWludGVuYW5jZSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCB2ZWhpY3VsZSBtYWludGVuYW5jZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKG1haW50ZW5hbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZU1haW50ZW5hbmNlKHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiREVMRVRFIEZST00gdmVoaWN1bGVfbWFpbnRlbmFuY2UgV0hFUkUgaWQ9J1wiICsgcmVxLnBhcmFtcy5pZCArIFwiJ1wiLFxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLkRFTEVURSB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ3ZlaGljdWxlIG1haW50ZW5hbmNlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==