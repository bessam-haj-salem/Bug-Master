"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentWithDriverUsualCustomerFactory = void 0;
exports.RentWithDriverUsualCustomerFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ref: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: '',
        },
        date_rent: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        hour_rent: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: '',
        },
        date_prev_return: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        hour_prev_return: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: '',
        },
        date_return: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        deposit: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: false,
            defaultValue: '',
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
    const RentWithDriverUsualCustomer = sequelize.define('rent_with_driver_usual_customer', attributes, {
        freezeTableName: true,
    });
    RentWithDriverUsualCustomer.associate = (models) => {
        RentWithDriverUsualCustomer.belongsTo(models.UsualCustomer, {
            //OK
            foreignKey: 'id',
        });
    };
    RentWithDriverUsualCustomer.associate = (models) => {
        RentWithDriverUsualCustomer.hasMany(models.RentWithDriverUsualCustomerDriver, {
            foreignKey: 'rent_with_driver_usual_customer_id',
        });
    };
    return RentWithDriverUsualCustomer;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBb0JhLFFBQUEsa0NBQWtDLEdBQUcsQ0FDaEQsU0FBOEIsRUFDOUIsU0FBOEIsRUFJOUIsRUFBRTtJQUNGLE1BQU0sVUFBVSxHQUE4RDtRQUM1RSxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sMkJBQTJCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FHbEQsaUNBQWlDLEVBQUUsVUFBVSxFQUFFO1FBQy9DLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztJQUNILDJCQUEyQixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pELDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzFELElBQUk7WUFDSixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRiwyQkFBMkIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNqRCwyQkFBMkIsQ0FBQyxPQUFPLENBQ2pDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFDeEM7WUFDRSxVQUFVLEVBQUUsb0NBQW9DO1NBQ2pELENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE9BQU8sMkJBQTJCLENBQUM7QUFDckMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckF0dHJpYnV0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIHJlZjogc3RyaW5nO1xuICBkYXRlX3JlbnQ6IERhdGU7XG4gIGhvdXJfcmVudDogbnVtYmVyO1xuICBkYXRlX3ByZXZfcmV0dXJuOiBEYXRlO1xuICBob3VyX3ByZXZfcmV0dXJuOiBEYXRlO1xuICBkYXRlX3JldHVybjogRGF0ZTtcbiAgZGVwb3NpdDogbnVtYmVyO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVySW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8cmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyQXR0cmlidXRlPixcbiAgICByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8XG4gIHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckluc3RhbmNlLFxuICByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGVcbj4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIHJlZjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkYXRlX3JlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBob3VyX3JlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5USU1FLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkYXRlX3ByZXZfcmV0dXJuOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgaG91cl9wcmV2X3JldHVybjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlRJTUUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGRhdGVfcmV0dXJuOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgZGVwb3NpdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRFQ0lNQUwoMTAsIDMpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyID0gc2VxdWVsaXplLmRlZmluZTxcbiAgICByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJJbnN0YW5jZSxcbiAgICByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGVcbiAgPigncmVudF93aXRoX2RyaXZlcl91c3VhbF9jdXN0b21lcicsIGF0dHJpYnV0ZXMsIHtcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gIH0pO1xuICBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lci5iZWxvbmdzVG8obW9kZWxzLlVzdWFsQ3VzdG9tZXIsIHtcbiAgICAgIC8vT0tcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lci5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyLmhhc01hbnkoXG4gICAgICBtb2RlbHMuUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyLFxuICAgICAge1xuICAgICAgICBmb3JlaWduS2V5OiAncmVudF93aXRoX2RyaXZlcl91c3VhbF9jdXN0b21lcl9pZCcsXG4gICAgICB9XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lcjtcbn07XG4iXX0=