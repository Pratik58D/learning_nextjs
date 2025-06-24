import Link from "next/link";
import React from "react";
import { products } from "./data";

const Eommerce = () => {
 ;

  return (
    <div>
      <section className="m-[4rem]">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce-Refactor</h1>
        </div>
        <section className="flex gap-3">
          {products.map((product) => (
            <div className="w-[200px] border" key={product.id}>
              <Link href={`/onlineshop/${product.id}`}>
                <img src={product.image} alt={product.name}  />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Eommerce;
