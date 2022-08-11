create table cart(
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL unique,
  items JSONB NOT NULL,
  created_at timestamp not null default now()
);