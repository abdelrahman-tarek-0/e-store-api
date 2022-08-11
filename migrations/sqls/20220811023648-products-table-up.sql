CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    rating smallint NOT NULL CHECK(rating >= 0 AND rating <= 5),
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    images TEXT[] NOT NULL,
    stock INT NOT NULL,
    category_id BIGINT REFERENCES category(id),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);