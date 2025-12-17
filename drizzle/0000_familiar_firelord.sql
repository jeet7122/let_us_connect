CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(120) NOT NULL,
	"name" varchar(120) NOT NULL,
	"description" varchar(200) NOT NULL,
	"github_url" text,
	"techStack" json,
	"vote_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"approved_at" timestamp with time zone,
	"status" varchar(20) DEFAULT 'pending' NOT NULL,
	"submitted_by" varchar(120) DEFAULT 'anonymous',
	"user_id" varchar(255)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "slug_idx" ON "projects" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "projects_status_idx" ON "projects" USING btree ("status");--> statement-breakpoint
CREATE INDEX "projects_user_id" ON "projects" USING btree ("user_id");