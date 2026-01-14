import { pgTable, text, uuid } from "drizzle-orm/pg-core"

import { user } from "./auth"

export const responseTable = pgTable("response", {
  id: uuid().primaryKey().defaultRandom(),
  content: text().notNull(),
  authorId: uuid().references(() => user.id).notNull(),
});
