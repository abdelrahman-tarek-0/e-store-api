create table admin(
    id serial primary key,
    uuid varchar(255) not null unique,
    created_at timestamp not null default now()
);