import * as dotenv from 'dotenv';
import { cleanEnv, port, str } from 'envalid';

dotenv.config();

const env = cleanEnv(process.env, {
	ENV: str({ choices: ['local', 'production'], default: 'local' }),
	PORT: port({ default: 5050 }),
	MONGO_CONNECTION_STRING: str(),
});

export default env;
