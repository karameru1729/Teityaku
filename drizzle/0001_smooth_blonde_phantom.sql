CREATE TABLE `documents` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`user_id` text NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
DROP TABLE `authenticator`;