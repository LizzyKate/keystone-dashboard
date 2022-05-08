import React from "react";
import Single from "./single.product";
import photo from "../assets/photo.jpeg";

const product = [
  {
    image: photo,
    name: "PSG Stadium",
    amount: 3,
    label: " 8600844",
    material: "Jersey",
    date: "12.11.2020",
    status: "Published",
  },
  {
    image: photo,
    name: "PSG Stadium",
    amount: 3,
    label: " 8600844",
    material: "Jersey",
    date: "12.11.2020",
    status: "Pending",
  },
  {
    image: photo,
    name: "PSG Stadium",
    amount: 3,
    label: " 8600844",
    material: "Jersey",
    date: "12.11.2020",
    status: "Published",
  },
  {
    image: photo,
    name: "PSG Stadium",
    amount: 3,
    label: " 8600844",
    material: "Jersey",
    date: "12.11.2020",
    status: "Published",
  },
];

function Product() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">Latest Added Products</p>
      </div>
      <div className="flex flex-col mt-8">
        {product.map((e, i) => {
          return (
            <Single
              key={i}
              image={e.image}
              name={e.name}
              amount={e.amount}
              label={e.label}
              material={e.material}
              date={e.date}
              status={e.status}
            />
          );
        })}
      </div>
    </>
  );
}

export default Product;
