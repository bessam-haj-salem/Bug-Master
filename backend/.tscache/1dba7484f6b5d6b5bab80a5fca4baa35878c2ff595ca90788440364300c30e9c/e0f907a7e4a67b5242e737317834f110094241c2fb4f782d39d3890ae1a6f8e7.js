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
            type: DataTypes.TEXT,
            allowNull: false
        },
        homePage: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        categorie: {
            type: DataTypes.ENUM('Public', 'Private'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9Qcm9qZWN0LnRzIiwic291cmNlcyI6WyIvaG9tZS9iYXNzZW0vRG9jdW1lbnRzL1BlcnNvbm5lbF9Qcm9qZWN0L2J1Zy1tYXN0ZXIvYmFja2VuZC9zZXJ2ZXIvbW9kZWxzLXRzL1Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBa0JhLFFBQUEsY0FBYyxHQUFHLENBQzVCLFNBQThCLEVBQzlCLFNBQThCLEVBQ3NCLEVBQUU7SUFDdEQsTUFBTSxVQUFVLEdBQTBDO1FBQ3hELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFDekMsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixVQUFVLEVBQ1YsV0FBVyxDQUNaO1lBQ0QsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDOUIsU0FBUyxFQUNULFVBQVUsRUFDVjtRQUNFLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQ0YsQ0FBQztJQUVGLHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixPQUFPO0lBRVAsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuZXhwb3J0IGludGVyZmFjZSBwcm9qZWN0QXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgc3VicHJvamVjdD86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGhvbWVQYWdlPzogc3RyaW5nO1xuICBjYXRlZ29yaWU/OiBzdHJpbmc7XG4gIG1vZHVsZXM/OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBwcm9qZWN0SW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8cHJvamVjdEF0dHJpYnV0ZT4sXG4gICAgcHJvamVjdEF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgUHJvamVjdEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8cHJvamVjdEluc3RhbmNlLCBwcm9qZWN0QXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8cHJvamVjdEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgc3VicHJvamVjdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5URVhULFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgaG9tZVBhZ2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGNhdGVnb3JpZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ1B1YmxpYycsICdQcml2YXRlJyksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcblxuICAgIG1vZHVsZXM6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5FTlVNKFxuICAgICAgICAnSXNzdWVzIHRyYWNraW5nJyxcbiAgICAgICAgJ0lzc3VlcyBXYWxsJyxcbiAgICAgICAgJ0NhbGVuZGFyJyxcbiAgICAgICAgJ0RvY3VtZW50cydcbiAgICAgICksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcblxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBQcm9qZWN0ID0gc2VxdWVsaXplLmRlZmluZTxwcm9qZWN0SW5zdGFuY2UsIHByb2plY3RBdHRyaWJ1dGU+KFxuICAgICdwcm9qZWN0JyxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHtcbiAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZVxuICAgIH1cbiAgKTtcblxuICAvLyAgIFByb2plY3QuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAvLyAgICAgUHJvamVjdC5oYXNNYW55KG1vZGVscy5NZW1iZXJzUHJvamVjdCwge1xuICAvLyAgICAgICBmb3JlaWduS2V5OiAncHJvamVjdF9pZCdcbiAgLy8gICAgIH0pO1xuICAvLyAgIH07XG5cbiAgcmV0dXJuIFByb2plY3Q7XG59O1xuIl19