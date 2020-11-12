"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculeFleetFactory = void 0;
exports.VehiculeFleetFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.ENUM('car', 'bus', 'airplane'),
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        horse_power: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        vehicule_image: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        number_places: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        accessories: {
            type: DataTypes.ENUM('AC', 'WIFI', 'TV'),
            allowNull: false,
        },
        registration_number: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        type_contract_ownership: {
            type: DataTypes.ENUM('owner', 'rent', 'leasing', 'subcontractor'),
            allowNull: false,
        },
        ref_contractor_ownership: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        ownership_contract_image: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        mileage: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        availability: {
            type: DataTypes.DATE,
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
    const VehiculeFleet = sequelize.define('vehicule_fleet', attributes, {
        freezeTableName: true,
    });
    VehiculeFleet.associate = (models) => {
        VehiculeFleet.belongsTo(models.Trip, {
            foreignKey: 'id',
        });
    };
    VehiculeFleet.associate = (models) => {
        VehiculeFleet.hasMany(models.VehiculeMaintenance, {
            foreignKey: 'vehicule_fleet_id',
        });
    };
    VehiculeFleet.associate = (models) => {
        VehiculeFleet.hasMany(models.TechnicalInspection, {
            foreignKey: 'vehicule_fleet_id',
        });
    };
    VehiculeFleet.associate = (models) => {
        VehiculeFleet.hasMany(models.VehiculeInsurance, {
            foreignKey: 'vehicule_fleet_id',
        });
    };
    VehiculeFleet.associate = (models) => {
        VehiculeFleet.hasMany(models.Price, {
            foreignKey: 'vehicule_fleet_id',
        });
    };
    return VehiculeFleet;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVmVoaWN1bGVGbGVldC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVmVoaWN1bGVGbGVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF3QmEsUUFBQSxvQkFBb0IsR0FBRyxDQUNsQyxTQUE4QixFQUM5QixTQUE4QixFQUNrQyxFQUFFO0lBQ2xFLE1BQU0sVUFBVSxHQUFnRDtRQUM5RCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUM5QyxTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDO1lBQ2pFLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBR3BDLGdCQUFnQixFQUFFLFVBQVUsRUFBRTtRQUM5QixlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtZQUNoRCxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtZQUNoRCxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEMsVUFBVSxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG5leHBvcnQgaW50ZXJmYWNlIHZlaGljdWxlRmxlZXRBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICB0eXBlPzogc3RyaW5nO1xuICBicmFuZD86IHN0cmluZztcbiAgaG9yc2VfcG93ZXI/OiBudW1iZXI7XG4gIHZlaGljdWxlX2ltYWdlPzogc3RyaW5nO1xuICBudW1iZXJfcGxhY2VzPzogbnVtYmVyO1xuICBhY2Nlc3Nvcmllcz86IHN0cmluZztcbiAgcmVnaXN0cmF0aW9uX251bWJlcj86IHN0cmluZztcbiAgdHlwZV9jb250cmFjdF9vd25lcnNoaXA/OiBzdHJpbmc7XG4gIHJlZl9jb250cmFjdG9yX293bmVyc2hpcD86IHN0cmluZztcbiAgb3duZXJzaGlwX2NvbnRyYWN0X2ltYWdlPzogc3RyaW5nO1xuICBtaWxlYWdlPzogbnVtYmVyO1xuICBhdmFpbGFiaWxpdHk/OiBEYXRlO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgdmVoaWN1bGVGbGVldEluc3RhbmNlXG4gIGV4dGVuZHMgU2VxdWVsaXplLkluc3RhbmNlPHZlaGljdWxlRmxlZXRBdHRyaWJ1dGU+LFxuICAgIHZlaGljdWxlRmxlZXRBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IFZlaGljdWxlRmxlZXRGYWN0b3J5ID0gKFxuICBzZXF1ZWxpemU6IFNlcXVlbGl6ZS5TZXF1ZWxpemUsXG4gIERhdGFUeXBlczogU2VxdWVsaXplLkRhdGFUeXBlc1xuKTogU2VxdWVsaXplLk1vZGVsPHZlaGljdWxlRmxlZXRJbnN0YW5jZSwgdmVoaWN1bGVGbGVldEF0dHJpYnV0ZT4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPHZlaGljdWxlRmxlZXRBdHRyaWJ1dGU+ID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnY2FyJywgJ2J1cycsICdhaXJwbGFuZScpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGJyYW5kOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgaG9yc2VfcG93ZXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB2ZWhpY3VsZV9pbWFnZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIG51bWJlcl9wbGFjZXM6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBhY2Nlc3Nvcmllczoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ0FDJywgJ1dJRkknLCAnVFYnKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICByZWdpc3RyYXRpb25fbnVtYmVyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdHlwZV9jb250cmFjdF9vd25lcnNoaXA6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5FTlVNKCdvd25lcicsICdyZW50JywgJ2xlYXNpbmcnLCAnc3ViY29udHJhY3RvcicpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHJlZl9jb250cmFjdG9yX293bmVyc2hpcDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIG93bmVyc2hpcF9jb250cmFjdF9pbWFnZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIG1pbGVhZ2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBhdmFpbGFiaWxpdHk6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBWZWhpY3VsZUZsZWV0ID0gc2VxdWVsaXplLmRlZmluZTxcbiAgICB2ZWhpY3VsZUZsZWV0SW5zdGFuY2UsXG4gICAgdmVoaWN1bGVGbGVldEF0dHJpYnV0ZVxuICA+KCd2ZWhpY3VsZV9mbGVldCcsIGF0dHJpYnV0ZXMsIHtcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gIH0pO1xuICBWZWhpY3VsZUZsZWV0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBWZWhpY3VsZUZsZWV0LmJlbG9uZ3NUbyhtb2RlbHMuVHJpcCwge1xuICAgICAgZm9yZWlnbktleTogJ2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgVmVoaWN1bGVGbGVldC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVmVoaWN1bGVGbGVldC5oYXNNYW55KG1vZGVscy5WZWhpY3VsZU1haW50ZW5hbmNlLCB7XG4gICAgICBmb3JlaWduS2V5OiAndmVoaWN1bGVfZmxlZXRfaWQnLFxuICAgIH0pO1xuICB9O1xuICBWZWhpY3VsZUZsZWV0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBWZWhpY3VsZUZsZWV0Lmhhc01hbnkobW9kZWxzLlRlY2huaWNhbEluc3BlY3Rpb24sIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd2ZWhpY3VsZV9mbGVldF9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFZlaGljdWxlRmxlZXQuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFZlaGljdWxlRmxlZXQuaGFzTWFueShtb2RlbHMuVmVoaWN1bGVJbnN1cmFuY2UsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd2ZWhpY3VsZV9mbGVldF9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFZlaGljdWxlRmxlZXQuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFZlaGljdWxlRmxlZXQuaGFzTWFueShtb2RlbHMuUHJpY2UsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd2ZWhpY3VsZV9mbGVldF9pZCcsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFZlaGljdWxlRmxlZXQ7XG59O1xuIl19