import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { pgTable, text, boolean, serial } from 'drizzle-orm/pg-core';

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
  name: text('name').notNull(),
  paid: boolean('paid').notNull(),
});
