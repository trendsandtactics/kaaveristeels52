import { Pool } from 'mysql2/promise';
import { getPool } from '@/lib/mysql';

type QueryMethod = Pool['query'];

const query: QueryMethod = (...args) => {
  return getPool().query(...args);
};

const pool = { query };

export default pool;
