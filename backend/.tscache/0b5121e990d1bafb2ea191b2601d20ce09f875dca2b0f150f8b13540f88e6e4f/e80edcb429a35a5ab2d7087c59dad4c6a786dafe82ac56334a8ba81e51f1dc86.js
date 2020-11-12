"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentWithDriverClientCompanyFactory = void 0;
exports.RentWithDriverClientCompanyFactory = (sequelize, DataTypes) => {
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
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '',
        },
        date_prev_return: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        hour_prev_return: {
            type: DataTypes.DATE,
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
    const RentWithDriverClientCompany = sequelize.define('rent_with_driver_client_company', attributes, {
        freezeTableName: true,
    });
    RentWithDriverClientCompany.associate = (models) => {
        RentWithDriverClientCompany.belongsTo(models.ClientCompany, {
            //OK
            foreignKey: 'id',
        });
    };
    RentWithDriverClientCompany.associate = (models) => {
        RentWithDriverClientCompany.hasMany(models.RentWithDriverClientCompanyDriver, {
            foreignKey: 'rent_with_driver_client_company_id',
        });
    };
    return RentWithDriverClientCompany;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55LnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9SZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBb0JhLFFBQUEsa0NBQWtDLEdBQUcsQ0FDaEQsU0FBOEIsRUFDOUIsU0FBOEIsRUFJOUIsRUFBRTtJQUNGLE1BQU0sVUFBVSxHQUE4RDtRQUM1RSxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sMkJBQTJCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FHbEQsaUNBQWlDLEVBQUUsVUFBVSxFQUFFO1FBQy9DLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztJQUNILDJCQUEyQixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pELDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzFELElBQUk7WUFDSixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRiwyQkFBMkIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNqRCwyQkFBMkIsQ0FBQyxPQUFPLENBQ2pDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFDeEM7WUFDRSxVQUFVLEVBQUUsb0NBQW9DO1NBQ2pELENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE9BQU8sMkJBQTJCLENBQUM7QUFDckMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueUF0dHJpYnV0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIHJlZjogc3RyaW5nO1xuICBkYXRlX3JlbnQ6IERhdGU7XG4gIGhvdXJfcmVudDogbnVtYmVyO1xuICBkYXRlX3ByZXZfcmV0dXJuOiBEYXRlO1xuICBob3VyX3ByZXZfcmV0dXJuOiBEYXRlO1xuICBkYXRlX3JldHVybjogRGF0ZTtcbiAgZGVwb3NpdDogbnVtYmVyO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgcmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55SW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8cmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55QXR0cmlidXRlPixcbiAgICByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueUZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8XG4gIHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueUluc3RhbmNlLFxuICByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlBdHRyaWJ1dGVcbj4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueUF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIHJlZjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkYXRlX3JlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBob3VyX3JlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgZGF0ZV9wcmV2X3JldHVybjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGhvdXJfcHJldl9yZXR1cm46IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkYXRlX3JldHVybjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGRlcG9zaXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5ERUNJTUFMKDEwLCAzKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueSA9IHNlcXVlbGl6ZS5kZWZpbmU8XG4gICAgcmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55SW5zdGFuY2UsXG4gICAgcmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55QXR0cmlidXRlXG4gID4oJ3JlbnRfd2l0aF9kcml2ZXJfY2xpZW50X2NvbXBhbnknLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICB9KTtcbiAgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkuYmVsb25nc1RvKG1vZGVscy5DbGllbnRDb21wYW55LCB7XG4gICAgICAvL09LXG4gICAgICBmb3JlaWduS2V5OiAnaWQnLFxuICAgIH0pO1xuICB9O1xuICBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueS5oYXNNYW55KFxuICAgICAgbW9kZWxzLlJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlcixcbiAgICAgIHtcbiAgICAgICAgZm9yZWlnbktleTogJ3JlbnRfd2l0aF9kcml2ZXJfY2xpZW50X2NvbXBhbnlfaWQnLFxuICAgICAgfVxuICAgICk7XG4gIH07XG4gIHJldHVybiBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnk7XG59O1xuIl19