import Link from "next/link";
import React from "react";

export default function Button(props) {
  return (
    <Link href={`${props.link}`} className="button">
        {props.name}
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
        <span className="fourth"></span>
    </Link>
  );
}
