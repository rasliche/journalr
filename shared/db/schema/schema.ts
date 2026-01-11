import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth-schema"

export const promptTable = pgTable("prompt", {
  id: uuid().primaryKey(),
  content: text().notNull(),
  authorId: uuid().references(() => user.id).notNull(),
});


export const responseTable = pgTable("response", {
  id: uuid().primaryKey(),
  content: text().notNull(),
  authorId: uuid().references(() => user.id).notNull(),
});