"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsualCustomerFactory = void 0;
exports.UsualCustomerFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        personal_ident: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        special_condition: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    };
    const UsualCustomer = sequelize.define('usual_customer', attributes, {
        freezeTableName: true,
    });
    UsualCustomer.associate = (models) => {
        UsualCustomer.belongsTo(models.PersonalGroup, {
            //OK
            foreignKey: 'id',
        });
    };
    UsualCustomer.associate = (models) => {
        UsualCustomer.hasMany(models.PassengerLuggage, {
            foreignKey: 'usual_customer_id',
        });
    };
    UsualCustomer.associate = (models) => {
        UsualCustomer.hasMany(models.Passeport, {
            foreignKey: 'usual_customer_id',
        });
    };
    UsualCustomer.associate = (models) => {
        UsualCustomer.hasMany(models.Stopover, {
            foreignKey: 'usual_customer_id',
        });
    };
    UsualCustomer.associate = (models) => {
        UsualCustomer.hasMany(models.TripUsualCustomer, {
            foreignKey: 'usual_customer_id',
        });
    };
    UsualCustomer.associate = (models) => {
        UsualCustomer.hasMany(models.UsualCustomerClientCompany, {
            foreignKey: 'usual_customer_id',
        });
    };
    return UsualCustomer;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVXN1YWxDdXN0b21lci50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVXN1YWxDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFtQmEsUUFBQSxvQkFBb0IsR0FBRyxDQUNsQyxTQUE4QixFQUM5QixTQUE4QixFQUNrQyxFQUFFO0lBQ2xFLE1BQU0sVUFBVSxHQUFnRDtRQUM5RCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBR3BDLGdCQUFnQixFQUFFLFVBQVUsRUFBRTtRQUM5QixlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzVDLElBQUk7WUFDSixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0MsVUFBVSxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxtQkFBbUI7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ25DLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRTtZQUN2RCxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSB1c3VhbEN1c3RvbWVyQXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3RfbmFtZT86IHN0cmluZztcbiAgbGFzdF9uYW1lPzogc3RyaW5nO1xuICBwZXJzb25hbF9pZGVudD86IHN0cmluZztcbiAgYWdlPzogbnVtYmVyO1xuICBzcGVjaWFsX2NvbmRpdGlvbj86IHN0cmluZztcblxuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgdXN1YWxDdXN0b21lckluc3RhbmNlXG4gIGV4dGVuZHMgU2VxdWVsaXplLkluc3RhbmNlPHVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGU+LFxuICAgIHVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IFVzdWFsQ3VzdG9tZXJGYWN0b3J5ID0gKFxuICBzZXF1ZWxpemU6IFNlcXVlbGl6ZS5TZXF1ZWxpemUsXG4gIERhdGFUeXBlczogU2VxdWVsaXplLkRhdGFUeXBlc1xuKTogU2VxdWVsaXplLk1vZGVsPHVzdWFsQ3VzdG9tZXJJbnN0YW5jZSwgdXN1YWxDdXN0b21lckF0dHJpYnV0ZT4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPHVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGU+ID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgfSxcbiAgICBmaXJzdF9uYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgbGFzdF9uYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcGVyc29uYWxfaWRlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBhZ2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBzcGVjaWFsX2NvbmRpdGlvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ3llcycsICdubycpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBVc3VhbEN1c3RvbWVyID0gc2VxdWVsaXplLmRlZmluZTxcbiAgICB1c3VhbEN1c3RvbWVySW5zdGFuY2UsXG4gICAgdXN1YWxDdXN0b21lckF0dHJpYnV0ZVxuICA+KCd1c3VhbF9jdXN0b21lcicsIGF0dHJpYnV0ZXMsIHtcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gIH0pO1xuXG4gIFVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFVzdWFsQ3VzdG9tZXIuYmVsb25nc1RvKG1vZGVscy5QZXJzb25hbEdyb3VwLCB7XG4gICAgICAvL09LXG4gICAgICBmb3JlaWduS2V5OiAnaWQnLFxuICAgIH0pO1xuICB9O1xuXG4gIFVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFVzdWFsQ3VzdG9tZXIuaGFzTWFueShtb2RlbHMuUGFzc2VuZ2VyTHVnZ2FnZSwge1xuICAgICAgZm9yZWlnbktleTogJ3VzdWFsX2N1c3RvbWVyX2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgVXN1YWxDdXN0b21lci5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVXN1YWxDdXN0b21lci5oYXNNYW55KG1vZGVscy5QYXNzZXBvcnQsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd1c3VhbF9jdXN0b21lcl9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFVzdWFsQ3VzdG9tZXIuaGFzTWFueShtb2RlbHMuU3RvcG92ZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd1c3VhbF9jdXN0b21lcl9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFVzdWFsQ3VzdG9tZXIuaGFzTWFueShtb2RlbHMuVHJpcFVzdWFsQ3VzdG9tZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd1c3VhbF9jdXN0b21lcl9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFVzdWFsQ3VzdG9tZXIuaGFzTWFueShtb2RlbHMuVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnksIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd1c3VhbF9jdXN0b21lcl9pZCcsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBVc3VhbEN1c3RvbWVyO1xufTtcbiJdfQ==