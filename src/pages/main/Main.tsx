import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Post } from "./Post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsRef);
      setPostsList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
      );
    } catch (e) {
      document.getElementById("posts")!.innerText =
        "Please login to post/see posts!";
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="posts">
      <ul>
        {postsList?.map((post, index) => (
          <li key={index}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
