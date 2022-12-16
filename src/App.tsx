import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

const Posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/74274647?v=4",
      name: "Rodrigo Kloeckner",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur aefaefeaf",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur aegyuyhm",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur rhhtrht",
      },
      {
        type: "link",
        content: "expedita deleniti",
      },
    ],
    publishedAt: new Date("2022-12-03 20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/74274647?v=4",
      name: "John Velliho",
      role: "Mobile Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consecteturv fefef",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur rhrhr",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur hyyjy",
      },
      {
        type: "link",
        content: "expedita deleniti afa",
      },
    ],
    publishedAt: new Date("2022-10-03 20:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {Posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
