import { Sequelize } from 'sequelize';
import { DbInterface } from '../typings/DbInterface';
import { ProjectFactory } from './Project';
import { IssuesFactory } from './Issues';
import { MembersFactory } from './Members';
import { MembersProjectFactory } from './MembersProject';
import { IssuesMembersFactory } from './IssuesMembers';
export const createModels = (sequelizeConfig: any): DbInterface => {
  const { database, username, password, params } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, params);

  const db: DbInterface = {
    sequelize,
    Sequelize,
    Project: ProjectFactory(sequelize, Sequelize),
    Issues: IssuesFactory(sequelize, Sequelize),
    Members: MembersFactory(sequelize, Sequelize),
    MembersProject: MembersProjectFactory(sequelize, Sequelize),
    IssuesMembers: IssuesMembersFactory(sequelize, Sequelize)
  };

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};
