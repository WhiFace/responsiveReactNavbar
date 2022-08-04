import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div>
      <Link href="https://www.stripe.com">
        <button className="btn">Donate</button>
      </Link>
    </div>
  );
};

export default Button;
