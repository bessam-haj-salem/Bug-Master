import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface projectAttribute {
  id: number;
  name?: string;
  subproject?: string;
  description?: string;
  homePage?: string;
  categorie?: string;
  modules?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface projectInstance
  extends Sequelize.Instance<projectAttribute>,
    projectAttribute {}

export const ProjectFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<projectInstance, projectAttribute> => {
  const attributes: SequelizeAttributes<projectAttribute> = {
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
      type: DataTypes.ENUM(
        'Issues tracking',
        'Issues Wall',
        'Calendar',
        'Documents'
      ),
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

  const Project = sequelize.define<projectInstance, projectAttribute>(
    'project',
    attributes,
    {
      freezeTableName: true
    }
  );

  Project.associate = (models) => {
    Project.hasMany(models.MembersProject, {
      foreignKey: 'project_id'
    });
  };

  return Project;
};
