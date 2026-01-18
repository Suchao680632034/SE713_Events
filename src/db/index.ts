import { Pool } from 'pg';
import type {QueryResult } from 'pg';


const pool = new Pool({
   user: 'admin',
   password: 'admin123',
   host: 'localhost',
   port: 5432,
   database: 'mydatabase'
})
type QueryParam = string | number | boolean | Date | null | undefined;
export const query = (text: string, params?: QueryParam[]): Promise<QueryResult<any>> => {
   return pool.query(text, params)
}
