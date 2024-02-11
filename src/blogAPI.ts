import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); // SSR

  if (!res.ok) {
    throw new Error("error!");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};

export const getDatailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); // ISR 1分間キャッシュ

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("error!");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json();
  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString();

  const res = await fetch("http://localhost:3001/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, currentDateTime }),
  });

  if (!res.ok) {
    throw new Error("error!");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json();
  return article;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const currentDateTime = new Date().toISOString();

  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("error!");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deletedArticle = await res.json();
  return deletedArticle;
};
