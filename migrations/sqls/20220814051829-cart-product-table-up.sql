create table cart_product (
  cart_id int not null REFERENCES cart(id),
  product_id int not null REFERENCES products(id),
  quantity int not null 
);