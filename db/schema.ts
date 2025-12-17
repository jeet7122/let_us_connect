import {
    pgTable,
    serial,
    text,
    varchar,
    integer,
    timestamp,
    json,
    uniqueIndex,
    index
} from "drizzle-orm/pg-core";

export const projects = pgTable(
    "projects",
    {
        id: serial("id").primaryKey(),
        slug: varchar("slug", {length: 120}).notNull(),
        name: varchar("name", {length: 120}).notNull(),
        description: varchar("description", {length: 200}).notNull(),
        github_url: text("github_url"),
        techStack: json("techStack").$type<string[]>(),
        voteCount: integer("vote_count").notNull().default(0),
        created_at: timestamp("created_at", {
            withTimezone: true
        }).defaultNow(),
        approved_at: timestamp("approved_at", {
            withTimezone: true
        }),
        status: varchar("status", {length: 20}).notNull().default("pending"),
        submittedBy: varchar("submitted_by",{
            length: 120
        }).default("anonymous"),
        userId: varchar("user_id", {length: 255}),
    },
    (table) => ({
        slugIdx: uniqueIndex("slug_idx").on(table.slug),
        statusIdx: index("projects_status_idx").on(table.status),
        userIdx: index('projects_user_id').on(table.userId)
    })
)
