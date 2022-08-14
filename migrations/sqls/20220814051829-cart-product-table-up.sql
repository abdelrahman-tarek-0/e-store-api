create table cart_product (
  cart_id int not null REFERENCES cart(id),
  product_id int not null REFERENCES products(id),
  quantity int not null CHECK(quantity > 0),
  hashed_cart_id text not null unique GENERATED ALWAYS AS (md5(cast(cart_id as text)||cast(product_id as text))) STORED
);