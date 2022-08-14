create table cart(
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL unique,
  created_at timestamp not null default now()
);