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
    deleteInspection(req, res) {
        sequelize
            .query("DELETE FROM technical_inspection WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('inspection deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy90ZWNobmljYWxJbnNwZWN0aW9uLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3RlY2huaWNhbEluc3BlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztBQUUxQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDdkIsU0FBUzthQUNOLEtBQUssQ0FDSix3TEFBd0w7WUFDdEwsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2YsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUN4QixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDMUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0I7WUFDL0IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3hCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzthQUNyRSxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3ZCLE9BQU8sVUFBVTthQUNkLE9BQU8sQ0FBQztZQUNQLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUM1QixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxrQ0FBa0M7aUJBQzVDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sVUFBVTtxQkFDZCxNQUFNLENBQUM7b0JBQ04sTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFDdkIsZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZTtvQkFDekMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7b0JBQzdDLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ25DLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCO29CQUN2RCxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhO29CQUNyQyxlQUFlLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlO29CQUN6QyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO29CQUN6QixpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtpQkFDOUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FDNUQ7cUJBQ0EsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDckIsT0FBTyxVQUFVO2FBQ2QsT0FBTyxDQUFDO1lBQ1AsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzVCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLHVCQUF1QjtpQkFDakMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3ZCLFNBQVM7YUFDTixLQUFLLENBQ0osNkNBQTZDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUNuRSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUM3RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgVGVjaG5pY2FsSW5zcGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvVGVjaG5pY2FsSW5zcGVjdGlvbic7XG5jb25zdCBkYiA9IGNyZWF0ZU1vZGVscyhzZXF1ZWxpemVDb25maWcpO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBkYi5zZXF1ZWxpemU7XG5cbmNvbnN0IGluc3BlY3Rpb24gPSBkYi5UZWNobmljYWxJbnNwZWN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zZXJ0SW5zcGVjdGlvbihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHRlY2huaWNhbF9pbnNwZWN0aW9uIChyZWZfdGksIGRhdGVfaW5zcGVjdGlvbiwgbmF0dXJlX2luc3BlY3Rpb24sIG9ic2VydmF0aW9ucywgbmFtZV9pbnNwZWN0aW9uX2FnZW5jeSxyZWZfYWdyZWVtZW50LGV4cGlyYXRpb25fZGF0ZSxjb3N0X3RpLCB2ZWhpY3VsZV9mbGVldF9pZCApIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnJlZl90aSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRhdGVfaW5zcGVjdGlvbiArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubmF0dXJlX2luc3BlY3Rpb24gK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5vYnNlcnZhdGlvbnMgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5uYW1lX2luc3BlY3Rpb25fYWdlbmN5ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucmVmX2FncmVlbWVudCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmV4cGlyYXRpb25fZGF0ZSArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY29zdF90aSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnZlaGljdWxlX2ZsZWV0X2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd0ZWNobmljYWwgaW5zcGVjdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZUluc3BlY3Rpb24ocmVxLCByZXMpIHtcbiAgICByZXR1cm4gaW5zcGVjdGlvblxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoaW5zcGVjdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWluc3BlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyBpbmV4aXN0YW50IHRlY2huaWNhbCBpbnNwZWN0aW9uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaW5zcGVjdGlvblxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHJlZl90aTogcmVxLmJvZHkucmVmX3RpLFxuICAgICAgICAgICAgICBkYXRlX2luc3BlY3Rpb246IHJlcS5ib2R5LmRhdGVfaW5zcGVjdGlvbixcbiAgICAgICAgICAgICAgbmF0dXJlX2luc3BlY3Rpb246IHJlcS5ib2R5Lm5hdHVyZV9pbnNwZWN0aW9uLFxuICAgICAgICAgICAgICBvYnNlcnZhdGlvbnM6IHJlcS5ib2R5Lm9ic2VydmF0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZV9pbnNwZWN0aW9uX2FnZW5jeTogcmVxLmJvZHkubmFtZV9pbnNwZWN0aW9uX2FnZW5jeSxcbiAgICAgICAgICAgICAgcmVmX2FncmVlbWVudDogcmVxLmJvZHkucmVmX2FncmVlbWVudCxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbl9kYXRlOiByZXEuYm9keS5leHBpcmF0aW9uX2RhdGUsXG4gICAgICAgICAgICAgIGNvc3RfdGk6IHJlcS5ib2R5LmNvc3RfdGksXG4gICAgICAgICAgICAgIHZlaGljdWxlX2ZsZWV0X2lkOiByZXEuYm9keS52ZWhpY3VsZV9mbGVldF9pZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChgaW5zcGVjdGlvbiB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRJbnNwZWN0aW9uKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGluc3BlY3Rpb25cbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGluc3BlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFpbnNwZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IGluc3BlY3Rpb24nLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChpbnNwZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZUluc3BlY3Rpb24ocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSB0ZWNobmljYWxfaW5zcGVjdGlvbiBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnaW5zcGVjdGlvbiBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=