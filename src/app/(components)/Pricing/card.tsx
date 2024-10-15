import { currencyFormatter } from "@/utils/currencyFormatter";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface IPricingCardProps {
  children: ReactNode;
  title: string;
  price: number;
  oldPrice?: number;
}

export function PricingCard({
  children,
  title,
  oldPrice,
  price,
}: IPricingCardProps) {
  return (
    <div className="w-full h-full max-w-[400px] flex flex-col gap-8 p-8 bg-gray-500 rounded-lg shadow-md shadow-gray-800">
      <h3 className="text-2xl font-bold">{title}</h3>

      <div className="w-full flex flex-col">
        {oldPrice && (
          <span className="text-xl line-through font-light opacity-40">
            {currencyFormatter.format(oldPrice)}
          </span>
        )}

        <h2 className="text-5xl font-bold">
          {currencyFormatter.format(price)}
        </h2>
      </div>

      {children}

      <Link
        href={""}
        className="w-full px-8 py-4 bg-red-500 uppercase font-bold text-center shadow-md shadow-gray-800 rounded-md mt-auto transition-all hover:opacity-70"
      >
        Buy
      </Link>
    </div>
  );
}
