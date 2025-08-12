import {
  mysqlTable,
  serial,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";

export const generatedImages = mysqlTable("generated_images", {
  id: serial("id").primaryKey(),
  prompt: text("prompt").notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
