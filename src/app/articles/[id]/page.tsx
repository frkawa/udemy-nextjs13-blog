import Image from "next/image";
import React from "react";

const Article = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${params.id}`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center my-10">Next.js13の勉強中です</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>ここが本文</p>
      </div>
    </div>
  );
};

export default Article;
