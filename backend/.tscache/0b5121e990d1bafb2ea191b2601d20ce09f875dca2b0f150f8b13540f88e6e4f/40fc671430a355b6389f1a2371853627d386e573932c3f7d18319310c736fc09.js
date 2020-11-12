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
    // read vehicule with pagination
    readVehiculeChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return vehicule
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy92ZWhpY3VsZUZsZWV0LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL3ZlaGljdWxlRmxlZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFbEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDckIsU0FBUzthQUNOLEtBQUssQ0FDSiwwT0FBME87WUFDeE8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2IsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNkLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUN2QixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEIsS0FBSztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO1lBQzVCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QjtZQUNoQyxNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0I7WUFDakMsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCO1lBQ2pDLEtBQUs7WUFD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SUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQzNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBWZWhpY3VsZUZsZWV0RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9WZWhpY3VsZUZsZWV0JztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgdmVoaWN1bGUgPSBkYi5WZWhpY3VsZUZsZWV0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy9pbnNlcnRpb24gb2YgYSBuZXcgY29tcGFueVxuICBpbnNlcnRWZWhpY3VsZShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHZlaGljdWxlX2ZsZWV0ICh0eXBlLCBicmFuZCwgaG9yc2VfcG93ZXIsIHZlaGljdWxlX2ltYWdlLG51bWJlcl9wbGFjZXMsIGFjY2Vzc29yaWVzLHJlZ2lzdHJhdGlvbl9udW1iZXIsIHR5cGVfY29udHJhY3Rfb3duZXJzaGlwLHJlZl9jb250cmFjdG9yX293bmVyc2hpcCxvd25lcnNoaXBfY29udHJhY3RfaW1hZ2UsIG1pbGVhZ2UsIGF2YWlsYWJpbGl0eSwgdHJpcF9pZCkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudHlwZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmJyYW5kICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5ob3JzZV9wb3dlciArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LnZlaGljdWxlX2ltYWdlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubnVtYmVyX3BsYWNlcyArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmFjY2Vzc29yaWVzICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZWdpc3RyYXRpb25fbnVtYmVyICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudHlwZV9jb250cmFjdF9vd25lcnNoaXAgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZWZfY29udHJhY3Rvcl9vd25lcnNoaXAgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5vd25lcnNoaXBfY29udHJhY3RfaW1hZ2UgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lm1pbGVhZ2UgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hdmFpbGFiaWxpdHkgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS50cmlwX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd2ZWhpY3VsZSBhZGRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHVwZGF0ZVZlaGljdWxlKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHZlaGljdWxlXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh2ZWhpY3VsZSkgPT4ge1xuICAgICAgICBpZiAoIXZlaGljdWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCB2ZWhpY3VsZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZlaGljdWxlXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgdHlwZTogcmVxLmJvZHkudHlwZSxcbiAgICAgICAgICAgICAgYnJhbmQ6IHJlcS5ib2R5LmJyYW5kLFxuICAgICAgICAgICAgICBob3JzZV9wb3dlcjogcmVxLmJvZHkuaG9yc2VfcG93ZXIsXG4gICAgICAgICAgICAgIHZlaGljdWxlX2ltYWdlOiByZXEuYm9keS52ZWhpY3VsZV9pbWFnZSxcbiAgICAgICAgICAgICAgbnVtYmVyX3BsYWNlczogcmVxLmJvZHkubnVtYmVyX3BsYWNlcyxcbiAgICAgICAgICAgICAgYWNjZXNzb3JpZXM6IHJlcS5ib2R5LmFjY2Vzc29yaWVzLFxuICAgICAgICAgICAgICByZWdpc3RyYXRpb25fbnVtYmVyOiByZXEuYm9keS5yZWdpc3RyYXRpb25fbnVtYmVyLFxuICAgICAgICAgICAgICB0eXBlX2NvbnRyYWN0X293bmVyc2hpcDogcmVxLmJvZHkudHlwZV9jb250cmFjdF9vd25lcnNoaXAsXG4gICAgICAgICAgICAgIHJlZl9jb250cmFjdG9yX293bmVyc2hpcDogcmVxLmJvZHkucmVmX2NvbnRyYWN0b3Jfb3duZXJzaGlwLFxuICAgICAgICAgICAgICBvd25lcnNoaXBfY29udHJhY3RfaW1hZ2U6IHJlcS5ib2R5Lm93bmVyc2hpcF9jb250cmFjdF9pbWFnZSxcbiAgICAgICAgICAgICAgbWlsZWFnZTogcmVxLmJvZHkubWlsZWFnZSxcbiAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiByZXEuYm9keS5hdmFpbGFiaWxpdHksXG4gICAgICAgICAgICAgIHRyaXBfaWQ6IHJlcS5ib2R5LnRyaXBfaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoYHRoZSB2ZWhpY3VsZSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRWZWhpY3VsZShyZXEsIHJlcykge1xuICAgIHJldHVybiB2ZWhpY3VsZVxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigodmVoaWN1bGUpID0+IHtcbiAgICAgICAgaWYgKCF2ZWhpY3VsZSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCB2ZWhpY3VsZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHZlaGljdWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIC8vIHJlYWQgdmVoaWN1bGUgd2l0aCBwYWdpbmF0aW9uXG4gIHJlYWRWZWhpY3VsZUNodW5rKHJlcSwgcmVzKSB7XG4gICAgbGV0IHBhZ2UgPSByZXEuYm9keS5wYWdlO1xuICAgIGxldCBwYWdlU2l6ZSA9IHJlcS5ib2R5LnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHZlaGljdWxlXG4gICAgICAuZmluZEFsbCh7XG4gICAgICAgIC8vIHdoZXJlOiB7fSxcbiAgICAgICAgb2Zmc2V0OiBwYWdlLFxuICAgICAgICBsaW1pdDogcGFnZVNpemUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHZlaGljdWxlKSA9PiB7XG4gICAgICAgIGlmICghdmVoaWN1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgdmVoaWN1bGUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh2ZWhpY3VsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVWZWhpY3VsZShyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIHZlaGljdWxlX2ZsZWV0IFdIRVJFIGlkPSdcIiArIHJlcS5wYXJhbXMuaWQgKyBcIidcIixcbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5ERUxFVEUgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd2ZWhpY3VsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=