import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface vehiculeFleetAttribute {
  id: number;
  type?: string;
  brand?: string;
  horse_power?: number;
  vehicule_image?: string;
  number_places?: number;
  accessories?: string;
  registration_number?: string;
  type_contract_ownership?: string;
  ref_contractor_ownership?: string;
  ownership_contract_image?: string;
  mileage?: number;
  availability?: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface vehiculeFleetInstance
  extends Sequelize.Instance<vehiculeFleetAttribute>,
    vehiculeFleetAttribute {}

export const VehiculeFleetFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<vehiculeFleetInstance, vehiculeFleetAttribute> => {
  const attributes: SequelizeAttributes<vehiculeFleetAttribute> = {
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

  const VehiculeFleet = sequelize.define<
    vehiculeFleetInstance,
    vehiculeFleetAttribute
  >('vehicule_fleet', attributes, {
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
