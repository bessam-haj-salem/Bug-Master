import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface issuesAttribute {
  id: number;
  categorie: string;
  subject: string;
  description?: string;
  status: string;
  priority: string;
  start_date: Date;
  due_date: Date;
  estimated_time: number;
  progress: number;
  file: string;
  spent_time: number;
  activity: string;
  updated_by: string;
  links: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface issuesInstance
  extends Sequelize.Instance<issuesAttribute>,
    issuesAttribute {}

export const IssuesFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<issuesInstance, issuesAttribute> => {
  const attributes: SequelizeAttributes<issuesAttribute> = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categorie: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM(
        'New',
        'In progress',
        'Resolved',
        'Feed back',
        'closed',
        'rejected'
      ),
      allowNull: false
    },
    priority: {
      type: DataTypes.ENUM('Low', 'Normal', 'High', 'Urgent', 'Immediate'),
      allowNull: false
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estimated_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    progress: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    spent_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    activity: {
      type: DataTypes.ENUM('Development', 'Design'),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    links: {
      type: DataTypes.STRING(255),
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

  const Issues = sequelize.define<issuesInstance, issuesAttribute>(
    'issues',
    attributes,
    {
      freezeTableName: true
    }
  );

  //   issues.associate = (models) => {
  //     issues.hasMany(models.Membersissues, {
  //       foreignKey: 'issues_id'
  //     });
  //   };

  return Issues;
};
