import React from 'react';

type Block = {
  id: string;
  type: string;
  content: string;
}

export default function BlockRenderer({block}: {block: Block}) {
  switch (block.type) {
    case "heading_1" :
      return <h1>{block.content}</h1>;
    case "heading_2" :
      return <h2>{block.content}</h2>;
    case "heading_3" :
      return <h3>{block.content}</h3>;
    case "paragraph" :
      return <p>{block.content}</p>;
    case "bulleted_list_item" :
      return <li>{block.content}</li>;
    default :
      console.warn("Unsupported block type");
      return null;
  } 
}
