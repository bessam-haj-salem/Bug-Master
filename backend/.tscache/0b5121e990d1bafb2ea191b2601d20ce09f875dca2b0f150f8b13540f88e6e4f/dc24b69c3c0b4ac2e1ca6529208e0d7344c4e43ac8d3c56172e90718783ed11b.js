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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVXN1YWxDdXN0b21lci50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVXN1YWxDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFrQmEsUUFBQSxvQkFBb0IsR0FBRyxDQUNsQyxTQUE4QixFQUM5QixTQUE4QixFQUNrQyxFQUFFO0lBQ2xFLE1BQU0sVUFBVSxHQUFnRDtRQUM5RCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBR3BDLGdCQUFnQixFQUFFLFVBQVUsRUFBRTtRQUM5QixlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzVDLElBQUk7WUFDSixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0MsVUFBVSxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxtQkFBbUI7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ25DLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRTtZQUN2RCxVQUFVLEVBQUUsbUJBQW1CO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSB1c3VhbEN1c3RvbWVyQXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3RfbmFtZT86IHN0cmluZztcbiAgbGFzdF9uYW1lPzogc3RyaW5nO1xuICBwZXJzb25hbF9pZGVudD86IHN0cmluZztcbiAgYWdlPzogbnVtYmVyO1xuICBzcGVjaWFsX2NvbmRpdGlvbj86IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIHVzdWFsQ3VzdG9tZXJJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTx1c3VhbEN1c3RvbWVyQXR0cmlidXRlPixcbiAgICB1c3VhbEN1c3RvbWVyQXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBVc3VhbEN1c3RvbWVyRmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDx1c3VhbEN1c3RvbWVySW5zdGFuY2UsIHVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczx1c3VhbEN1c3RvbWVyQXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgZmlyc3RfbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGxhc3RfbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHBlcnNvbmFsX2lkZW50OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgYWdlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgc3BlY2lhbF9jb25kaXRpb246IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5FTlVNKCd5ZXMnLCAnbm8nKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgVXN1YWxDdXN0b21lciA9IHNlcXVlbGl6ZS5kZWZpbmU8XG4gICAgdXN1YWxDdXN0b21lckluc3RhbmNlLFxuICAgIHVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGVcbiAgPigndXN1YWxfY3VzdG9tZXInLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICB9KTtcblxuICBVc3VhbEN1c3RvbWVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBVc3VhbEN1c3RvbWVyLmJlbG9uZ3NUbyhtb2RlbHMuUGVyc29uYWxHcm91cCwge1xuICAgICAgLy9PS1xuICAgICAgZm9yZWlnbktleTogJ2lkJyxcbiAgICB9KTtcbiAgfTtcblxuICBVc3VhbEN1c3RvbWVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBVc3VhbEN1c3RvbWVyLmhhc01hbnkobW9kZWxzLlBhc3Nlbmdlckx1Z2dhZ2UsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd1c3VhbF9jdXN0b21lcl9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFVzdWFsQ3VzdG9tZXIuaGFzTWFueShtb2RlbHMuUGFzc2Vwb3J0LCB7XG4gICAgICBmb3JlaWduS2V5OiAndXN1YWxfY3VzdG9tZXJfaWQnLFxuICAgIH0pO1xuICB9O1xuICBVc3VhbEN1c3RvbWVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBVc3VhbEN1c3RvbWVyLmhhc01hbnkobW9kZWxzLlN0b3BvdmVyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndXN1YWxfY3VzdG9tZXJfaWQnLFxuICAgIH0pO1xuICB9O1xuICBVc3VhbEN1c3RvbWVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBVc3VhbEN1c3RvbWVyLmhhc01hbnkobW9kZWxzLlRyaXBVc3VhbEN1c3RvbWVyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndXN1YWxfY3VzdG9tZXJfaWQnLFxuICAgIH0pO1xuICB9O1xuICBVc3VhbEN1c3RvbWVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBVc3VhbEN1c3RvbWVyLmhhc01hbnkobW9kZWxzLlVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55LCB7XG4gICAgICBmb3JlaWduS2V5OiAndXN1YWxfY3VzdG9tZXJfaWQnLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gVXN1YWxDdXN0b21lcjtcbn07XG4iXX0=