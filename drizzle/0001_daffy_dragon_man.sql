CREATE TABLE `generated_images` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`prompt` text NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `generated_images_id` PRIMARY KEY(`id`)
);
