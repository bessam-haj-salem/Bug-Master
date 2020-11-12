"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const vehicule = db.VehiculeFleet;
module.exports = {
    //insertion of a new company
    insertVehicule(req, res) {
        sequelize
            .query("INSERT INTO vehicule_fleet (type, brand, horse_power, vehicule_image,number_places, accessories,registration_number, type_contract_ownership,ref_contractor_ownership,ownership_contract_image, mileage, availability, trip_id) VALUES('" +
            req.body.type +
            "', '" +
            req.body.brand +
            "','" +
            req.body.horse_power +
            "', '" +
            req.body.vehicule_image +
            "', '" +
            req.body.number_places +
            "', '" +
            req.body.accessories +
            "','" +
            req.body.registration_number +
            "', '" +
            req.body.type_contract_ownership +
            "', '" +
            req.body.ref_contractor_ownership +
            "', '" +
            req.body.ownership_contract_image +
            "','" +
            req.body.mileage +
            "', '" +
            req.body.availability +
            "', '" +
            req.body.trip_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('vehicule added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateVehicule(req, res) {
        return vehicule
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((vehicule) => {
            if (!vehicule) {
                return res.status(200).send({
                    message: ' inexistant vehicule',
                });
            }
            else {
                return vehicule
                    .update({
                    type: req.body.type,
                    brand: req.body.brand,
                    horse_power: req.body.horse_power,
                    vehicule_image: req.body.vehicule_image,
                    number_places: req.body.number_places,
                    accessories: req.body.accessories,
                    registration_number: req.body.registration_number,
                    type_contract_ownership: req.body.type_contract_ownership,
                    ref_contractor_ownership: req.body.ref_contractor_ownership,
                    ownership_contract_image: req.body.ownership_contract_image,
                    mileage: req.body.mileage,
                    availability: req.body.availability,
                    trip_id: req.body.trip_id,
                })
                    .then(() => res.status(200).send(`the vehicule was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readVehicule(req, res) {
        return vehicule
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((vehicule) => {
            if (!vehicule) {
                return res.status(200).send({
                    message: 'inexistant vehicule',
                });
            }
            else {
                return res.status(200).send(vehicule);
            }
        });
    },
    deleteVehicule(req, res) {
        sequelize
            .query("DELETE FROM vehicule_fleet WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('vehicule deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy92ZWhpY3VsZUZsZWV0LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3ZlaGljdWxlRmxlZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFbEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDckIsU0FBUzthQUNOLEtBQUssQ0FDSiwwT0FBME87WUFDeE8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNkLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUN2QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsS0FBSztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO1lBQzVCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QjtZQUNoQyxNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0I7WUFDakMsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCO1lBQ2pDLEtBQUs7WUFD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SUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUscUJBQXFCO2lCQUMvQixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3JCLFNBQVM7YUFDTixLQUFLLENBQ0osdUNBQXVDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUM3RCxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQzthQUMzRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUsIFF1ZXJ5VHlwZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3Qgc2VxdWVsaXplQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL3NlcXVlbGl6ZUNvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMtdHMnO1xuaW1wb3J0IHsgVmVoaWN1bGVGbGVldEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMtdHMvVmVoaWN1bGVGbGVldCc7XG5jb25zdCBkYiA9IGNyZWF0ZU1vZGVscyhzZXF1ZWxpemVDb25maWcpO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBkYi5zZXF1ZWxpemU7XG5cbmNvbnN0IHZlaGljdWxlID0gZGIuVmVoaWN1bGVGbGVldDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vaW5zZXJ0aW9uIG9mIGEgbmV3IGNvbXBhbnlcbiAgaW5zZXJ0VmVoaWN1bGUocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyB2ZWhpY3VsZV9mbGVldCAodHlwZSwgYnJhbmQsIGhvcnNlX3Bvd2VyLCB2ZWhpY3VsZV9pbWFnZSxudW1iZXJfcGxhY2VzLCBhY2Nlc3NvcmllcyxyZWdpc3RyYXRpb25fbnVtYmVyLCB0eXBlX2NvbnRyYWN0X293bmVyc2hpcCxyZWZfY29udHJhY3Rvcl9vd25lcnNoaXAsb3duZXJzaGlwX2NvbnRyYWN0X2ltYWdlLCBtaWxlYWdlLCBhdmFpbGFiaWxpdHksIHRyaXBfaWQpIFZBTFVFUygnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnR5cGUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5icmFuZCArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuaG9yc2VfcG93ZXIgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS52ZWhpY3VsZV9pbWFnZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lm51bWJlcl9wbGFjZXMgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hY2Nlc3NvcmllcyArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucmVnaXN0cmF0aW9uX251bWJlciArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnR5cGVfY29udHJhY3Rfb3duZXJzaGlwICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucmVmX2NvbnRyYWN0b3Jfb3duZXJzaGlwICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkub3duZXJzaGlwX2NvbnRyYWN0X2ltYWdlICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5taWxlYWdlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuYXZhaWxhYmlsaXR5ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudHJpcF9pZCArXG4gICAgICAgICAgXCInKVwiLFxuXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgndmVoaWN1bGUgYWRkZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVWZWhpY3VsZShyZXEsIHJlcykge1xuICAgIHJldHVybiB2ZWhpY3VsZVxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigodmVoaWN1bGUpID0+IHtcbiAgICAgICAgaWYgKCF2ZWhpY3VsZSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnIGluZXhpc3RhbnQgdmVoaWN1bGUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2ZWhpY3VsZVxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHR5cGU6IHJlcS5ib2R5LnR5cGUsXG4gICAgICAgICAgICAgIGJyYW5kOiByZXEuYm9keS5icmFuZCxcbiAgICAgICAgICAgICAgaG9yc2VfcG93ZXI6IHJlcS5ib2R5LmhvcnNlX3Bvd2VyLFxuICAgICAgICAgICAgICB2ZWhpY3VsZV9pbWFnZTogcmVxLmJvZHkudmVoaWN1bGVfaW1hZ2UsXG4gICAgICAgICAgICAgIG51bWJlcl9wbGFjZXM6IHJlcS5ib2R5Lm51bWJlcl9wbGFjZXMsXG4gICAgICAgICAgICAgIGFjY2Vzc29yaWVzOiByZXEuYm9keS5hY2Nlc3NvcmllcyxcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uX251bWJlcjogcmVxLmJvZHkucmVnaXN0cmF0aW9uX251bWJlcixcbiAgICAgICAgICAgICAgdHlwZV9jb250cmFjdF9vd25lcnNoaXA6IHJlcS5ib2R5LnR5cGVfY29udHJhY3Rfb3duZXJzaGlwLFxuICAgICAgICAgICAgICByZWZfY29udHJhY3Rvcl9vd25lcnNoaXA6IHJlcS5ib2R5LnJlZl9jb250cmFjdG9yX293bmVyc2hpcCxcbiAgICAgICAgICAgICAgb3duZXJzaGlwX2NvbnRyYWN0X2ltYWdlOiByZXEuYm9keS5vd25lcnNoaXBfY29udHJhY3RfaW1hZ2UsXG4gICAgICAgICAgICAgIG1pbGVhZ2U6IHJlcS5ib2R5Lm1pbGVhZ2UsXG4gICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogcmVxLmJvZHkuYXZhaWxhYmlsaXR5LFxuICAgICAgICAgICAgICB0cmlwX2lkOiByZXEuYm9keS50cmlwX2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGB0aGUgdmVoaWN1bGUgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkVmVoaWN1bGUocmVxLCByZXMpIHtcbiAgICByZXR1cm4gdmVoaWN1bGVcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHZlaGljdWxlKSA9PiB7XG4gICAgICAgIGlmICghdmVoaWN1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgdmVoaWN1bGUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh2ZWhpY3VsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVWZWhpY3VsZShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHZlaGljdWxlX2ZsZWV0IFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd2ZWhpY3VsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=