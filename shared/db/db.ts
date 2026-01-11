// This import always runs in the context of nuxt, so the # shorthand works
import env from '#shared/env'
// import { seed } from "drizzle-seed"
import { drizzle } from 'drizzle-orm/node-postgres'
// import { eq } from 'drizzle-orm'
// import { promptTable } from './db/schema'

// async function main() {
//   await seed(db, { promptTable });
// }
// main();

export const db = drizzle(env.DATABASE_URL!);

// async function main() {
//   const user: typeof userTable.$inferInsert = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com',
//   };
//   await db.insert(userTable).values(user);
//   console.log('New user created!')
//   const users = await db.select().from(userTable);
//   console.log('Getting all users from the database: ', users)
//   /*
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }[]
//   */
//   await db
//     .update(userTable)
//     .set({
//       age: 31,
//     })
//     .where(eq(userTable.email, user.email));
//   console.log('User info updated!')
//   await db.delete(userTable).where(eq(userTable.email, user.email));
//   console.log('User deleted!')
// }
// main();