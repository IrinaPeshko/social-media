import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://png.pngtree.com/png-clipart/20210510/ourlarge/pngtree-cute-little-cat-drinks-boba-milk-png-image_3260680.jpg"
        alt="ava"
      />
      {props.message}
      <div>
        <span>like </span>
        <span>{props.count}</span>
      </div>
    </div>
  );
};
export default Post;
