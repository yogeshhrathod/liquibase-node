import { LiquibaseConfig } from '../../models';

export const POSTGRESQL_DEFAULT_CONFIG: LiquibaseConfig = {
  changeLogFile: '/node_modules/examples/change-log-examples/postgreSQL/changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/postgres',
  username: 'postgres',
  password: '',
  classpath: '',
};
