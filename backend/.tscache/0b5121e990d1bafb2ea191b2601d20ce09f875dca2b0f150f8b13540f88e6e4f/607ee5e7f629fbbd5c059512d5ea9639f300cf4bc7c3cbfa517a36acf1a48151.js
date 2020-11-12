"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const clientCompany1 = db.ClientCompany;
module.exports = {
    //insertion of a new company
    insertClient(req, res) {
        sequelize
            .query("INSERT INTO client_company (company_name, adress, commercial_register, patent_ref, email,logo,phone_number, name_person_in_charge,phone_person_in_charge, password,debt ,trade_margin_id ) VALUES('" +
            req.body.company_name +
            "', '" +
            req.body.adress +
            "','" +
            req.body.commercial_register +
            "', '" +
            req.body.patent_ref +
            "', '" +
            req.body.email +
            "', '" +
            req.body.logo +
            "','" +
            req.body.phone_number +
            "', '" +
            req.body.name_person_in_charge +
            "', '" +
            req.body.phone_person_in_charge +
            "','" +
            req.body.password +
            "', '" +
            req.body.debt +
            "', '" +
            req.body.trade_margin_id +
            "')", { type: sequelize.QueryTypes.INSERT }, {})
            .then(res.status(200).send('company added successfully'))
            .catch((error) => res.status(400).send(error));
    },
    updateClient(req, res) {
        return clientCompany1
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((clientCompany1) => {
            if (!clientCompany1) {
                return res.status(200).send({
                    message: ' inexistant company',
                });
            }
            else {
                return clientCompany1
                    .update({
                    company_name: req.body.company_name,
                    adress: req.body.adress,
                    commercial_register: req.body.commercial_register,
                    patent_ref: req.body.patent_ref,
                    email: req.body.email,
                    logo: req.body.logo,
                    phone_number: req.body.phone_number,
                    name_person_in_charge: req.body.name_person_in_charge,
                    phone_person_in_charge: req.body.phone_person_in_charge,
                    password: req.body.password,
                    debt: req.body.debt,
                    trade_margin_id: req.body.trade_margin_id,
                })
                    .then(() => res
                    .status(200)
                    .send(`${req.body.company_name} was updated successfully`))
                    .catch((error) => res.status(400).send(error));
            }
        })
            .catch((error) => res.status(400).send(error));
    },
    readClient(req, res) {
        return clientCompany1
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((clientCompany1) => {
            if (!clientCompany1) {
                return res.status(200).send({
                    message: 'inexistant company',
                });
            }
            else {
                return res.status(200).send(clientCompany1);
            }
        });
    },
    // read client companies with pagination
    readClientChunk(req, res) {
        let page = req.body.page;
        let pagesize = req.body.page.size;
        return clientCompany1.findAll({
            where: {
                id: req.body.id,
                page: req.body.page,
                pageSize: req.body.pageSize,
            },
            limit: 2,
            offset: 0,
        });
    },
    deleteClient(req, res) {
        sequelize
            .query("DELETE FROM client_company WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('company deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9jbGllbnRDb21wYW55LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL2NsaWVudENvbXBhbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFeEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbkIsU0FBUzthQUNOLEtBQUssQ0FDSixxTUFBcU07WUFDbk0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7WUFDNUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2QsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCO1lBQzlCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQjtZQUMvQixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLE1BQU07WUFDTixH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QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IHNlcXVlbGl6ZUNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9zZXF1ZWxpemVDb25maWcuanNvbicpO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzLXRzJztcbmltcG9ydCB7IENsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzLXRzL0NsaWVudENvbXBhbnknO1xuY29uc3QgZGIgPSBjcmVhdGVNb2RlbHMoc2VxdWVsaXplQ29uZmlnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gZGIuc2VxdWVsaXplO1xuXG5jb25zdCBjbGllbnRDb21wYW55MSA9IGRiLkNsaWVudENvbXBhbnk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydENsaWVudChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIGNsaWVudF9jb21wYW55IChjb21wYW55X25hbWUsIGFkcmVzcywgY29tbWVyY2lhbF9yZWdpc3RlciwgcGF0ZW50X3JlZiwgZW1haWwsbG9nbyxwaG9uZV9udW1iZXIsIG5hbWVfcGVyc29uX2luX2NoYXJnZSxwaG9uZV9wZXJzb25faW5fY2hhcmdlLCBwYXNzd29yZCxkZWJ0ICx0cmFkZV9tYXJnaW5faWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5jb21wYW55X25hbWUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hZHJlc3MgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmNvbW1lcmNpYWxfcmVnaXN0ZXIgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wYXRlbnRfcmVmICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZW1haWwgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5sb2dvICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5waG9uZV9udW1iZXIgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5uYW1lX3BlcnNvbl9pbl9jaGFyZ2UgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5waG9uZV9wZXJzb25faW5fY2hhcmdlICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wYXNzd29yZCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRlYnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS50cmFkZV9tYXJnaW5faWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ2NvbXBhbnkgYWRkZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVDbGllbnQocmVxLCByZXMpIHtcbiAgICByZXR1cm4gY2xpZW50Q29tcGFueTFcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGNsaWVudENvbXBhbnkxKSA9PiB7XG4gICAgICAgIGlmICghY2xpZW50Q29tcGFueTEpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyBpbmV4aXN0YW50IGNvbXBhbnknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjbGllbnRDb21wYW55MVxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIGNvbXBhbnlfbmFtZTogcmVxLmJvZHkuY29tcGFueV9uYW1lLFxuICAgICAgICAgICAgICBhZHJlc3M6IHJlcS5ib2R5LmFkcmVzcyxcbiAgICAgICAgICAgICAgY29tbWVyY2lhbF9yZWdpc3RlcjogcmVxLmJvZHkuY29tbWVyY2lhbF9yZWdpc3RlcixcbiAgICAgICAgICAgICAgcGF0ZW50X3JlZjogcmVxLmJvZHkucGF0ZW50X3JlZixcbiAgICAgICAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICAgICAgICBsb2dvOiByZXEuYm9keS5sb2dvLFxuICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6IHJlcS5ib2R5LnBob25lX251bWJlcixcbiAgICAgICAgICAgICAgbmFtZV9wZXJzb25faW5fY2hhcmdlOiByZXEuYm9keS5uYW1lX3BlcnNvbl9pbl9jaGFyZ2UsXG4gICAgICAgICAgICAgIHBob25lX3BlcnNvbl9pbl9jaGFyZ2U6IHJlcS5ib2R5LnBob25lX3BlcnNvbl9pbl9jaGFyZ2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgZGVidDogcmVxLmJvZHkuZGVidCxcbiAgICAgICAgICAgICAgdHJhZGVfbWFyZ2luX2lkOiByZXEuYm9keS50cmFkZV9tYXJnaW5faWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoYCR7cmVxLmJvZHkuY29tcGFueV9uYW1lfSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG4gIHJlYWRDbGllbnQocmVxLCByZXMpIHtcbiAgICByZXR1cm4gY2xpZW50Q29tcGFueTFcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGNsaWVudENvbXBhbnkxKSA9PiB7XG4gICAgICAgIGlmICghY2xpZW50Q29tcGFueTEpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2luZXhpc3RhbnQgY29tcGFueScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNsaWVudENvbXBhbnkxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG4gIC8vIHJlYWQgY2xpZW50IGNvbXBhbmllcyB3aXRoIHBhZ2luYXRpb25cbiAgcmVhZENsaWVudENodW5rKHJlcSwgcmVzKSB7XG4gICAgbGV0IHBhZ2UgPSByZXEuYm9keS5wYWdlO1xuICAgIGxldCBwYWdlc2l6ZSA9IHJlcS5ib2R5LnBhZ2Uuc2l6ZTtcblxuICAgIHJldHVybiBjbGllbnRDb21wYW55MS5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiByZXEuYm9keS5pZCxcbiAgICAgICAgcGFnZTogcmVxLmJvZHkucGFnZSxcbiAgICAgICAgcGFnZVNpemU6IHJlcS5ib2R5LnBhZ2VTaXplLFxuICAgICAgfSxcbiAgICAgIGxpbWl0OiAyLFxuICAgICAgb2Zmc2V0OiAwLFxuICAgIH0pO1xuICB9LFxuICBkZWxldGVDbGllbnQocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSBjbGllbnRfY29tcGFueSBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnY29tcGFueSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=