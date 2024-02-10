import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="pb-2 text-slate-900 text-3xl font-bold hover:text-gray-400"
          >
            about Next.js
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By frkawa, Published on 2024-02-10
          </p>
          <Link href="#" className=" text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quidem voluptatibus magnam unde nesciunt voluptas, doloribus quam,
            cupiditate quia dolor minima deserunt eaque accusantium, ex at
            eligendi in est officiis!e
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="pb-2 text-slate-900 text-3xl font-bold hover:text-gray-400"
          >
            about Next.js
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By frkawa, Published on 2024-02-10
          </p>
          <Link href="#" className=" text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quidem voluptatibus magnam unde nesciunt voluptas, doloribus quam,
            cupiditate quia dolor minima deserunt eaque accusantium, ex at
            eligendi in est officiis!e
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
