CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    rating real NOT NULL CHECK(rating >= 0 AND rating <= 5),
    price float8 NOT NULL,
    description VARCHAR(255) NOT NULL,
    images TEXT[] NOT NULL,
    stock INT NOT NULL,
    category_id BIGINT REFERENCES category(id),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);