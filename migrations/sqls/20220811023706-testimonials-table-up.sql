create table testimonials(
  id SERIAL PRIMARY KEY,
  name varchar(255) not null unique,
  testimonial text not null,
  image text not null,
  created_at timestamp not null default now()
);