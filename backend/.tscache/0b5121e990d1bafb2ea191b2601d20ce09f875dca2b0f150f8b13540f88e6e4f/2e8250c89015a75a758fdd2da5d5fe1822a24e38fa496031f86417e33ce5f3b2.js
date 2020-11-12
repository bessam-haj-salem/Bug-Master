"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeConfig = require('../config/sequelizeConfig.json');
const models_ts_1 = require("../models-ts");
const db = models_ts_1.createModels(sequelizeConfig);
const sequelize = db.sequelize;
const clientCompany = db.ClientCompany;
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
        return clientCompany
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((clientCompany) => {
            if (!clientCompany) {
                return res.status(200).send({
                    message: ' inexistant company',
                });
            }
            else {
                return clientCompany
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
        return clientCompany
            .findOne({
            where: { id: req.params.id },
            attributes: {},
        })
            .then((clientCompany) => {
            if (!clientCompany) {
                return res.status(200).send({
                    message: 'inexistant company',
                });
            }
            else {
                return res.status(200).send(clientCompany);
            }
        });
    },
    // read client companies with pagination
    readClientChunk(req, res) {
        let page = req.body.page;
        let pageSize = req.body.pageSize;
        return clientCompany
            .findAll({
            // where: {},
            offset: page,
            limit: pageSize,
        })
            .then((clientCompany) => {
            if (!clientCompany) {
                return res.status(200).send({
                    message: 'inexistant client Company',
                });
            }
            else {
                return res.status(200).send(clientCompany);
            }
        });
    },
    deleteClient(req, res) {
        sequelize
            .query("DELETE FROM client_company WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('company deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9jbGllbnRDb21wYW55LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL2NsaWVudENvbXBhbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbkIsU0FBUzthQUNOLEtBQUssQ0FDSixxTUFBcU07WUFDbk0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7WUFDNUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2QsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCO1lBQzlCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQjtZQUMvQixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDYixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3hCLElBQUksRUFFTixFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQzthQUN4RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUNuQixPQUFPLGFBQWE7YUFDakIsT0FBTyxDQUFDO1lBQ1AsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzVCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxxQkFBcUI7aUJBQy9CLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sYUFBYTtxQkFDakIsTUFBTSxDQUFDO29CQUNOLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ25DLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQ3ZCLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO29CQUNqRCxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUMvQixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUNyQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUNuQixZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUNuQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtvQkFDckQsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0I7b0JBQ3ZELFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQzNCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ25CLGVBQWUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWU7aUJBQzFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUNULEdBQUc7cUJBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksMkJBQTJCLENBQUMsQ0FDN0Q7cUJBQ0EsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDakIsT0FBTyxhQUFhO2FBQ2pCLE9BQU8sQ0FBQztZQUNQLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUM1QixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNsQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsd0NBQXdDO0lBQ3hDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRztRQUN0QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVqQyxPQUFPLGFBQWE7YUFDakIsT0FBTyxDQUFDO1lBQ1AsYUFBYTtZQUNiLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSwyQkFBMkI7aUJBQ3JDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDNUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbkIsU0FBUzthQUNOLEtBQUssQ0FDSix1Q0FBdUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQzdELEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQzFELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9DbGllbnRDb21wYW55JztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgY2xpZW50Q29tcGFueSA9IGRiLkNsaWVudENvbXBhbnk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvL2luc2VydGlvbiBvZiBhIG5ldyBjb21wYW55XG4gIGluc2VydENsaWVudChyZXEsIHJlcykge1xuICAgIHNlcXVlbGl6ZVxuICAgICAgLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIGNsaWVudF9jb21wYW55IChjb21wYW55X25hbWUsIGFkcmVzcywgY29tbWVyY2lhbF9yZWdpc3RlciwgcGF0ZW50X3JlZiwgZW1haWwsbG9nbyxwaG9uZV9udW1iZXIsIG5hbWVfcGVyc29uX2luX2NoYXJnZSxwaG9uZV9wZXJzb25faW5fY2hhcmdlLCBwYXNzd29yZCxkZWJ0ICx0cmFkZV9tYXJnaW5faWQgKSBWQUxVRVMoJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5jb21wYW55X25hbWUgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5hZHJlc3MgK1xuICAgICAgICAgIFwiJywnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmNvbW1lcmNpYWxfcmVnaXN0ZXIgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wYXRlbnRfcmVmICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuZW1haWwgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5sb2dvICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5waG9uZV9udW1iZXIgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5uYW1lX3BlcnNvbl9pbl9jaGFyZ2UgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5waG9uZV9wZXJzb25faW5fY2hhcmdlICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5wYXNzd29yZCArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmRlYnQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS50cmFkZV9tYXJnaW5faWQgK1xuICAgICAgICAgIFwiJylcIixcblxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLklOU0VSVCB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ2NvbXBhbnkgYWRkZWQgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICB1cGRhdGVDbGllbnQocmVxLCByZXMpIHtcbiAgICByZXR1cm4gY2xpZW50Q29tcGFueVxuICAgICAgLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxLnBhcmFtcy5pZCB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoY2xpZW50Q29tcGFueSkgPT4ge1xuICAgICAgICBpZiAoIWNsaWVudENvbXBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJyBpbmV4aXN0YW50IGNvbXBhbnknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjbGllbnRDb21wYW55XG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgY29tcGFueV9uYW1lOiByZXEuYm9keS5jb21wYW55X25hbWUsXG4gICAgICAgICAgICAgIGFkcmVzczogcmVxLmJvZHkuYWRyZXNzLFxuICAgICAgICAgICAgICBjb21tZXJjaWFsX3JlZ2lzdGVyOiByZXEuYm9keS5jb21tZXJjaWFsX3JlZ2lzdGVyLFxuICAgICAgICAgICAgICBwYXRlbnRfcmVmOiByZXEuYm9keS5wYXRlbnRfcmVmLFxuICAgICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgICAgICAgIGxvZ286IHJlcS5ib2R5LmxvZ28sXG4gICAgICAgICAgICAgIHBob25lX251bWJlcjogcmVxLmJvZHkucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICBuYW1lX3BlcnNvbl9pbl9jaGFyZ2U6IHJlcS5ib2R5Lm5hbWVfcGVyc29uX2luX2NoYXJnZSxcbiAgICAgICAgICAgICAgcGhvbmVfcGVyc29uX2luX2NoYXJnZTogcmVxLmJvZHkucGhvbmVfcGVyc29uX2luX2NoYXJnZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkLFxuICAgICAgICAgICAgICBkZWJ0OiByZXEuYm9keS5kZWJ0LFxuICAgICAgICAgICAgICB0cmFkZV9tYXJnaW5faWQ6IHJlcS5ib2R5LnRyYWRlX21hcmdpbl9pZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZChgJHtyZXEuYm9keS5jb21wYW55X25hbWV9IHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgcmVhZENsaWVudChyZXEsIHJlcykge1xuICAgIHJldHVybiBjbGllbnRDb21wYW55XG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChjbGllbnRDb21wYW55KSA9PiB7XG4gICAgICAgIGlmICghY2xpZW50Q29tcGFueSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaW5leGlzdGFudCBjb21wYW55JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2xpZW50Q29tcGFueSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICAvLyByZWFkIGNsaWVudCBjb21wYW5pZXMgd2l0aCBwYWdpbmF0aW9uXG4gIHJlYWRDbGllbnRDaHVuayhyZXEsIHJlcykge1xuICAgIGxldCBwYWdlID0gcmVxLmJvZHkucGFnZTtcbiAgICBsZXQgcGFnZVNpemUgPSByZXEuYm9keS5wYWdlU2l6ZTtcblxuICAgIHJldHVybiBjbGllbnRDb21wYW55XG4gICAgICAuZmluZEFsbCh7XG4gICAgICAgIC8vIHdoZXJlOiB7fSxcbiAgICAgICAgb2Zmc2V0OiBwYWdlLFxuICAgICAgICBsaW1pdDogcGFnZVNpemUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGNsaWVudENvbXBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFjbGllbnRDb21wYW55KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IGNsaWVudCBDb21wYW55JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2xpZW50Q29tcGFueSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGVDbGllbnQocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJERUxFVEUgRlJPTSBjbGllbnRfY29tcGFueSBXSEVSRSBpZD0nXCIgKyByZXEucGFyYW1zLmlkICsgXCInXCIsXG4gICAgICAgIHsgdHlwZTogc2VxdWVsaXplLlF1ZXJ5VHlwZXMuREVMRVRFIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgICAudGhlbihyZXMuc3RhdHVzKDIwMCkuc2VuZCgnY29tcGFueSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbn07XG4iXX0=