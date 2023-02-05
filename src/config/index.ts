// @ts-ignore
import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';

let envConfig = {};

switch (stage) {
	case 'production':
		envConfig = require('./prod').default;
		break;

	case 'testing':
		envConfig = require('./testing').default;
		break;

	default:
		envConfig = require('./local').default;
		break;
}

export default merge(
	{
		stage,
		env: process.env.NODE_ENV,
		port: 3001,
		secrets: {
			jwt: process.env.JWT_SECRET,
			dbUrl: process.env.DATABASE_URL,
		},
	},
	envConfig,
);
