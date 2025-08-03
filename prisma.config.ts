import { configDotenv } from 'dotenv';
import path from 'node:path';
import { type PrismaConfig } from 'prisma';

configDotenv();

export default
{
  schema: path.join('app', 'models'),
  migrations: {
    path: path.join('app', 'migrations')
  }
} satisfies PrismaConfig;