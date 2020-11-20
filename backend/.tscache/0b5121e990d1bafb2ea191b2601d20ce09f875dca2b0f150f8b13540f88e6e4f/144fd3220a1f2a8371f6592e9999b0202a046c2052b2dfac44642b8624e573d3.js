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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVmVoaWN1bGVGbGVldC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVmVoaWN1bGVGbGVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF5QmEsUUFBQSxvQkFBb0IsR0FBRyxDQUNsQyxTQUE4QixFQUM5QixTQUE4QixFQUNrQyxFQUFFO0lBQ2xFLE1BQU0sVUFBVSxHQUFnRDtRQUM5RCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUM5QyxTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDO1lBQ2pFLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBR3BDLGdCQUFnQixFQUFFLFVBQVUsRUFBRTtRQUM5QixlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtZQUNoRCxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtZQUNoRCxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEMsVUFBVSxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG5pbXBvcnQgeyB0cmlwQXR0cmlidXRlLCB0cmlwSW5zdGFuY2UgfSBmcm9tICcuL1RyaXAnO1xuZXhwb3J0IGludGVyZmFjZSB2ZWhpY3VsZUZsZWV0QXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZT86IHN0cmluZztcbiAgYnJhbmQ/OiBzdHJpbmc7XG4gIGhvcnNlX3Bvd2VyPzogbnVtYmVyO1xuICB2ZWhpY3VsZV9pbWFnZT86IHN0cmluZztcbiAgbnVtYmVyX3BsYWNlcz86IG51bWJlcjtcbiAgYWNjZXNzb3JpZXM/OiBzdHJpbmc7XG4gIHJlZ2lzdHJhdGlvbl9udW1iZXI/OiBzdHJpbmc7XG4gIHR5cGVfY29udHJhY3Rfb3duZXJzaGlwPzogc3RyaW5nO1xuICByZWZfY29udHJhY3Rvcl9vd25lcnNoaXA/OiBzdHJpbmc7XG4gIG93bmVyc2hpcF9jb250cmFjdF9pbWFnZT86IHN0cmluZztcbiAgbWlsZWFnZT86IG51bWJlcjtcbiAgYXZhaWxhYmlsaXR5PzogRGF0ZTtcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIHZlaGljdWxlRmxlZXRJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTx2ZWhpY3VsZUZsZWV0QXR0cmlidXRlPixcbiAgICB2ZWhpY3VsZUZsZWV0QXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBWZWhpY3VsZUZsZWV0RmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDx2ZWhpY3VsZUZsZWV0SW5zdGFuY2UsIHZlaGljdWxlRmxlZXRBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczx2ZWhpY3VsZUZsZWV0QXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ2NhcicsICdidXMnLCAnYWlycGxhbmUnKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBicmFuZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGhvcnNlX3Bvd2VyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdmVoaWN1bGVfaW1hZ2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBudW1iZXJfcGxhY2VzOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgYWNjZXNzb3JpZXM6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5FTlVNKCdBQycsICdXSUZJJywgJ1RWJyksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcmVnaXN0cmF0aW9uX251bWJlcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHR5cGVfY29udHJhY3Rfb3duZXJzaGlwOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnb3duZXInLCAncmVudCcsICdsZWFzaW5nJywgJ3N1YmNvbnRyYWN0b3InKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICByZWZfY29udHJhY3Rvcl9vd25lcnNoaXA6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBvd25lcnNoaXBfY29udHJhY3RfaW1hZ2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBtaWxlYWdlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgVmVoaWN1bGVGbGVldCA9IHNlcXVlbGl6ZS5kZWZpbmU8XG4gICAgdmVoaWN1bGVGbGVldEluc3RhbmNlLFxuICAgIHZlaGljdWxlRmxlZXRBdHRyaWJ1dGVcbiAgPigndmVoaWN1bGVfZmxlZXQnLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICB9KTtcbiAgVmVoaWN1bGVGbGVldC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVmVoaWN1bGVGbGVldC5iZWxvbmdzVG8obW9kZWxzLlRyaXAsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIFZlaGljdWxlRmxlZXQuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFZlaGljdWxlRmxlZXQuaGFzTWFueShtb2RlbHMuVmVoaWN1bGVNYWludGVuYW5jZSwge1xuICAgICAgZm9yZWlnbktleTogJ3ZlaGljdWxlX2ZsZWV0X2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgVmVoaWN1bGVGbGVldC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVmVoaWN1bGVGbGVldC5oYXNNYW55KG1vZGVscy5UZWNobmljYWxJbnNwZWN0aW9uLCB7XG4gICAgICBmb3JlaWduS2V5OiAndmVoaWN1bGVfZmxlZXRfaWQnLFxuICAgIH0pO1xuICB9O1xuICBWZWhpY3VsZUZsZWV0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBWZWhpY3VsZUZsZWV0Lmhhc01hbnkobW9kZWxzLlZlaGljdWxlSW5zdXJhbmNlLCB7XG4gICAgICBmb3JlaWduS2V5OiAndmVoaWN1bGVfZmxlZXRfaWQnLFxuICAgIH0pO1xuICB9O1xuICBWZWhpY3VsZUZsZWV0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBWZWhpY3VsZUZsZWV0Lmhhc01hbnkobW9kZWxzLlByaWNlLCB7XG4gICAgICBmb3JlaWduS2V5OiAndmVoaWN1bGVfZmxlZXRfaWQnLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBWZWhpY3VsZUZsZWV0O1xufTtcbiJdfQ==