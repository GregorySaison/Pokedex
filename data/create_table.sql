BEGIN;

DROP TABLE IF EXISTS "pokemon";

CREATE TABLE IF NOT EXISTS "pokemon" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" varchar(255) NOT NULL DEFAULT '',
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);

COMMIT;