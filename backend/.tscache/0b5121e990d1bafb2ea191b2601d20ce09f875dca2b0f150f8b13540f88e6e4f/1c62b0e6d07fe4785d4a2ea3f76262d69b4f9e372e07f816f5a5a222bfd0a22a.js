"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const driver = db.Driver;
module.exports = {
    //insertion of a new company
    insertDriver(req, res) {
        sequelize
            .query("INSERT INTO driver (first_name, last_name, personal_ident, ref_drive_licence ) VALUES('" +
            req.body.first_name +
            "', '" +
            req.body.last_name +
            "','" +
            req.body.personal_ident +
            "', '" +
            req.body.ref_drive_licence +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('driver added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateDriver(req, res) {
        return driver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((driver) => {
            if (!driver) {
                return res.status(200).send({
                    message: ' inexistant driver',
                });
            }
            else {
                return driver
                    .update({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    personal_ident: req.body.personal_ident,
                    ref_drive_licence: req.body.ref_drive_licence,
                })
                    .then(() => res
                    .status(200)
                    .send(`${req.body.first_name} was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readDriver(req, res) {
        return driver
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((driver) => {
            if (!driver) {
                return res.status(200).send({
                    message: 'inexistant company',
                });
            }
            else {
                return res.status(200).send(driver);
            }
        });
    },
    // read client companies with pagination
    readDriverChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return driver
            .findAll({
            // where: {},
            offset: 1,
            limit: pageSize,
        })
            .then((driver) => {
            if (!driver) {
                return res.status(200).send({
                    message: 'inexistant drivers',
                });
            }
            else {
                return res.status(200).send(driver);
            }
        });
    },
    deleteDriver(req, res) {
        sequelize
            .query("DELETE FROM driver WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('driver deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9kcml2ZXIudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvY29udHJvbGxlcnMvZHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDbEUsNENBQTRDO0FBRTVDLE1BQU0sRUFBRSxHQUFHLHdCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUUvQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ25CLFNBQVM7YUFDTixLQUFLLENBQ0oseUZBQXlGO1lBQ3ZGLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2xCLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDdkIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQzFCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFlB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YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbkIsU0FBUzthQUNOLEtBQUssQ0FDSiwrQkFBK0IsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQ3JELEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBQ3pELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9DbGllbnRDb21wYW55JztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgZHJpdmVyID0gZGIuRHJpdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy9pbnNlcnRpb24gb2YgYSBuZXcgY29tcGFueVxuICBpbnNlcnREcml2ZXIocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBkcml2ZXIgKGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcGVyc29uYWxfaWRlbnQsIHJlZl9kcml2ZV9saWNlbmNlICkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZmlyc3RfbmFtZSArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5Lmxhc3RfbmFtZSArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGVyc29uYWxfaWRlbnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5yZWZfZHJpdmVfbGljZW5jZSArXG4gICAgICAgICAgXCInKVwiLFxuXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuSU5TRVJUIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnZHJpdmVyIGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlRHJpdmVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGRyaXZlclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoZHJpdmVyKSA9PiB7XG4gICAgICAgIGlmICghZHJpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCBkcml2ZXInLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkcml2ZXJcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBmaXJzdF9uYW1lOiByZXEuYm9keS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICBsYXN0X25hbWU6IHJlcS5ib2R5Lmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgcGVyc29uYWxfaWRlbnQ6IHJlcS5ib2R5LnBlcnNvbmFsX2lkZW50LFxuICAgICAgICAgICAgICByZWZfZHJpdmVfbGljZW5jZTogcmVxLmJvZHkucmVmX2RyaXZlX2xpY2VuY2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoYCR7cmVxLmJvZHkuZmlyc3RfbmFtZX0gd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkRHJpdmVyKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGRyaXZlclxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoZHJpdmVyKSA9PiB7XG4gICAgICAgIGlmICghZHJpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IGNvbXBhbnknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChkcml2ZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbiAgLy8gcmVhZCBjbGllbnQgY29tcGFuaWVzIHdpdGggcGFnaW5hdGlvblxuICByZWFkRHJpdmVyQ2h1bmsocmVxLCByZXMpIHtcbiAgICBsZXQgcGFnZSA9IHJlcS5ib2R5LnBhZ2U7XG4gICAgbGV0IHBhZ2VTaXplID0gcmVxLmJvZHkucGFnZVNpemU7XG5cbiAgICByZXR1cm4gZHJpdmVyXG4gICAgICAuZmluZEFsbCh7XG4gICAgICAgIC8vIHdoZXJlOiB7fSxcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBsaW1pdDogcGFnZVNpemUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRyaXZlcikgPT4ge1xuICAgICAgICBpZiAoIWRyaXZlcikge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBkcml2ZXJzJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZHJpdmVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIGRlbGV0ZURyaXZlcihyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIkRFTEVURSBGUk9NIGRyaXZlciBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnZHJpdmVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxufTtcbiJdfQ==