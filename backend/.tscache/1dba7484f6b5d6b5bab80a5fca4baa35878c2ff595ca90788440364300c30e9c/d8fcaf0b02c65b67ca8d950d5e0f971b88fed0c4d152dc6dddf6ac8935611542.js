"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectFactory = void 0;
exports.ProjectFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        subproject: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        homePage: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        public: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        modules: {
            type: DataTypes.ENUM('Issues tracking', 'Issues Wall', 'Calendar', 'Documents'),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    const Project = sequelize.define('project', attributes, {
        freezeTableName: true
    });
    //   Project.associate = (models) => {
    //     Project.hasMany(models.MembersProject, {
    //       foreignKey: 'project_id'
    //     });
    //   };
    return Project;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9Qcm9qZWN0LnRzIiwic291cmNlcyI6WyIvaG9tZS9iYXNzZW0vRG9jdW1lbnRzL1BlcnNvbm5lbF9Qcm9qZWN0L2J1Zy1tYXN0ZXIvYmFja2VuZC9zZXJ2ZXIvbW9kZWxzLXRzL1Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBa0JhLFFBQUEsY0FBYyxHQUFHLENBQzVCLFNBQThCLEVBQzlCLFNBQThCLEVBQ3NCLEVBQUU7SUFDdEQsTUFBTSxVQUFVLEdBQTBDO1FBQ3hELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUVELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUNsQixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFVBQVUsRUFDVixXQUFXLENBQ1o7WUFDRCxTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUVELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUM5QixTQUFTLEVBQ1QsVUFBVSxFQUNWO1FBQ0UsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FDRixDQUFDO0lBRUYsc0NBQXNDO0lBQ3RDLCtDQUErQztJQUMvQyxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLE9BQU87SUFFUCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG5leHBvcnQgaW50ZXJmYWNlIHByb2plY3RBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBzdWJwcm9qZWN0Pzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaG9tZVBhZ2U/OiBzdHJpbmc7XG4gIHB1YmxpYz86IGJvb2xlYW47XG4gIG1vZHVsZXM/OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBwcm9qZWN0SW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8cHJvamVjdEF0dHJpYnV0ZT4sXG4gICAgcHJvamVjdEF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgUHJvamVjdEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8cHJvamVjdEluc3RhbmNlLCBwcm9qZWN0QXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8cHJvamVjdEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgc3VicHJvamVjdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGhvbWVQYWdlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBwdWJsaWM6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5CT09MRUFOLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG5cbiAgICBtb2R1bGVzOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuRU5VTShcbiAgICAgICAgJ0lzc3VlcyB0cmFja2luZycsXG4gICAgICAgICdJc3N1ZXMgV2FsbCcsXG4gICAgICAgICdDYWxlbmRhcicsXG4gICAgICAgICdEb2N1bWVudHMnXG4gICAgICApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG5cbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUHJvamVjdCA9IHNlcXVlbGl6ZS5kZWZpbmU8cHJvamVjdEluc3RhbmNlLCBwcm9qZWN0QXR0cmlidXRlPihcbiAgICAncHJvamVjdCcsXG4gICAgYXR0cmlidXRlcyxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWVcbiAgICB9XG4gICk7XG5cbiAgLy8gICBQcm9qZWN0LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgLy8gICAgIFByb2plY3QuaGFzTWFueShtb2RlbHMuTWVtYmVyc1Byb2plY3QsIHtcbiAgLy8gICAgICAgZm9yZWlnbktleTogJ3Byb2plY3RfaWQnXG4gIC8vICAgICB9KTtcbiAgLy8gICB9O1xuXG4gIHJldHVybiBQcm9qZWN0O1xufTtcbiJdfQ==