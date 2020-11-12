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
    } /* ,
    readClientChunk(req, res) {
      const paginate = ({ page, pageSize }) => {
        const offset = page * pageSize;
        const limit = pageSize;
  
        return {
          offset,
          limit,
        };
      };
      return clientCompany1.findAll({
        where: {
          id: req.body.id,
          page: req.body.page,
          pageSize: req.body.pageSize,
        }, // conditions
        ...paginate({ page, pageSize }),
      });
    } */,
    deleteClient(req, res) {
        sequelize
            .query("DELETE FROM client_company WHERE id='" + req.params.id + "'", { type: sequelize.QueryTypes.DELETE }, {})
            .then(res.status(200).send('company deleted successfully'))
            .catch((error) => res.status(400).send(error));
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9jbGllbnRDb21wYW55LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL2NvbnRyb2xsZXJzL2NsaWVudENvbXBhbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNsRSw0Q0FBNEM7QUFFNUMsTUFBTSxFQUFFLEdBQUcsd0JBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRS9CLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFFeEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLDRCQUE0QjtJQUM1QixZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbkIsU0FBUzthQUNOLEtBQUssQ0FDSixxTUFBcU07WUFDbk0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7WUFDNUIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixNQUFNO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2QsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNiLEtBQUs7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckIsTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCO1lBQzlCLE1BQU07WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQjtZQUMvQixLQUFLO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pCLE1BQU07WUFDTixH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O2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtQkU7SUFDSixZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDbkIsU0FBUzthQUNOLEtBQUssQ0FDSix1Q0FBdUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQzdELEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQzFELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgUXVlcnlUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBzZXF1ZWxpemVDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvc2VxdWVsaXplQ29uZmlnLmpzb24nKTtcbmltcG9ydCB7IGNyZWF0ZU1vZGVscyB9IGZyb20gJy4uL21vZGVscy10cyc7XG5pbXBvcnQgeyBDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy10cy9DbGllbnRDb21wYW55JztcbmNvbnN0IGRiID0gY3JlYXRlTW9kZWxzKHNlcXVlbGl6ZUNvbmZpZyk7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IGRiLnNlcXVlbGl6ZTtcblxuY29uc3QgY2xpZW50Q29tcGFueTEgPSBkYi5DbGllbnRDb21wYW55O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy9pbnNlcnRpb24gb2YgYSBuZXcgY29tcGFueVxuICBpbnNlcnRDbGllbnQocmVxLCByZXMpIHtcbiAgICBzZXF1ZWxpemVcbiAgICAgIC5xdWVyeShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBjbGllbnRfY29tcGFueSAoY29tcGFueV9uYW1lLCBhZHJlc3MsIGNvbW1lcmNpYWxfcmVnaXN0ZXIsIHBhdGVudF9yZWYsIGVtYWlsLGxvZ28scGhvbmVfbnVtYmVyLCBuYW1lX3BlcnNvbl9pbl9jaGFyZ2UscGhvbmVfcGVyc29uX2luX2NoYXJnZSwgcGFzc3dvcmQsZGVidCAsdHJhZGVfbWFyZ2luX2lkICkgVkFMVUVTKCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuY29tcGFueV9uYW1lICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkuYWRyZXNzICtcbiAgICAgICAgICBcIicsJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5jb21tZXJjaWFsX3JlZ2lzdGVyICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGF0ZW50X3JlZiArXG4gICAgICAgICAgXCInLCAnXCIgK1xuICAgICAgICAgIHJlcS5ib2R5LmVtYWlsICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubG9nbyArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGhvbmVfbnVtYmVyICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkubmFtZV9wZXJzb25faW5fY2hhcmdlICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGhvbmVfcGVyc29uX2luX2NoYXJnZSArXG4gICAgICAgICAgXCInLCdcIiArXG4gICAgICAgICAgcmVxLmJvZHkucGFzc3dvcmQgK1xuICAgICAgICAgIFwiJywgJ1wiICtcbiAgICAgICAgICByZXEuYm9keS5kZWJ0ICtcbiAgICAgICAgICBcIicsICdcIiArXG4gICAgICAgICAgcmVxLmJvZHkudHJhZGVfbWFyZ2luX2lkICtcbiAgICAgICAgICBcIicpXCIsXG5cbiAgICAgICAgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5JTlNFUlQgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC50aGVuKHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdjb21wYW55IGFkZGVkIHN1Y2Nlc3NmdWxseScpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTtcbiAgfSxcbiAgdXBkYXRlQ2xpZW50KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGNsaWVudENvbXBhbnkxXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChjbGllbnRDb21wYW55MSkgPT4ge1xuICAgICAgICBpZiAoIWNsaWVudENvbXBhbnkxKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgaW5leGlzdGFudCBjb21wYW55JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY2xpZW50Q29tcGFueTFcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBjb21wYW55X25hbWU6IHJlcS5ib2R5LmNvbXBhbnlfbmFtZSxcbiAgICAgICAgICAgICAgYWRyZXNzOiByZXEuYm9keS5hZHJlc3MsXG4gICAgICAgICAgICAgIGNvbW1lcmNpYWxfcmVnaXN0ZXI6IHJlcS5ib2R5LmNvbW1lcmNpYWxfcmVnaXN0ZXIsXG4gICAgICAgICAgICAgIHBhdGVudF9yZWY6IHJlcS5ib2R5LnBhdGVudF9yZWYsXG4gICAgICAgICAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgICAgICAgICAgbG9nbzogcmVxLmJvZHkubG9nbyxcbiAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiByZXEuYm9keS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgIG5hbWVfcGVyc29uX2luX2NoYXJnZTogcmVxLmJvZHkubmFtZV9wZXJzb25faW5fY2hhcmdlLFxuICAgICAgICAgICAgICBwaG9uZV9wZXJzb25faW5fY2hhcmdlOiByZXEuYm9keS5waG9uZV9wZXJzb25faW5fY2hhcmdlLFxuICAgICAgICAgICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQsXG4gICAgICAgICAgICAgIGRlYnQ6IHJlcS5ib2R5LmRlYnQsXG4gICAgICAgICAgICAgIHRyYWRlX21hcmdpbl9pZDogcmVxLmJvZHkudHJhZGVfbWFyZ2luX2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgIC5zZW5kKGAke3JlcS5ib2R5LmNvbXBhbnlfbmFtZX0gd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpO1xuICB9LFxuICByZWFkQ2xpZW50KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIGNsaWVudENvbXBhbnkxXG4gICAgICAuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiByZXEucGFyYW1zLmlkIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChjbGllbnRDb21wYW55MSkgPT4ge1xuICAgICAgICBpZiAoIWNsaWVudENvbXBhbnkxKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmV4aXN0YW50IGNvbXBhbnknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjbGllbnRDb21wYW55MSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9IC8qICxcbiAgcmVhZENsaWVudENodW5rKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgcGFnaW5hdGUgPSAoeyBwYWdlLCBwYWdlU2l6ZSB9KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBwYWdlICogcGFnZVNpemU7XG4gICAgICBjb25zdCBsaW1pdCA9IHBhZ2VTaXplO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGxpbWl0LFxuICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBjbGllbnRDb21wYW55MS5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiByZXEuYm9keS5pZCxcbiAgICAgICAgcGFnZTogcmVxLmJvZHkucGFnZSxcbiAgICAgICAgcGFnZVNpemU6IHJlcS5ib2R5LnBhZ2VTaXplLFxuICAgICAgfSwgLy8gY29uZGl0aW9uc1xuICAgICAgLi4ucGFnaW5hdGUoeyBwYWdlLCBwYWdlU2l6ZSB9KSxcbiAgICB9KTtcbiAgfSAqLyxcbiAgZGVsZXRlQ2xpZW50KHJlcSwgcmVzKSB7XG4gICAgc2VxdWVsaXplXG4gICAgICAucXVlcnkoXG4gICAgICAgIFwiREVMRVRFIEZST00gY2xpZW50X2NvbXBhbnkgV0hFUkUgaWQ9J1wiICsgcmVxLnBhcmFtcy5pZCArIFwiJ1wiLFxuICAgICAgICB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLkRFTEVURSB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzLnN0YXR1cygyMDApLnNlbmQoJ2NvbXBhbnkgZGVsZXRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7XG4gIH0sXG59O1xuIl19