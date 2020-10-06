Migration record changes to the db structure over time, just like git commits record changes to code.

Configure knex connections

- knex init

Commonly used migration commands:

- npx knex migrate:make name... <-- creates a new migration file
- npx knex.migrate:latest <-- run pending migrations to update the db

Track Food AKA menu items

menu_items table

- id: primary key, unsigned (not negative numbers) integer.
- name: string, required (NOT NULL), unique, make searching by name fast!
  -price: floating point, not required.
  -available: boolean, default to false.

  clients table

- id: pk, uuid, string
- email: string, unique, indexed
- name: string, indexed

> EVERY CHANGE TO THE DB SCHEMA (STRUCTURE) SHOULD BE DONE WITH A NEW MIGRATION
