import React from 'react';
import './animated.css';

const AnimatedText = ({ children }) => {
  // convert children to plain text while preserving span tags
  const parseContent = (node) => {
    if (typeof node === 'string') {
      return node.split("").map((char, i) => (
        <span
          key={i}
          className="animated-letter"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char}
        </span>
      ));
    } else if (React.isValidElement(node)) {
      const children = React.Children.toArray(node.props.children);
      return (
        <span className={node.props.className}>
          {children.flatMap(parseContent)}
        </span>
      );
    } else {
      return null;
    }
  };

  const elements = React.Children.toArray(children).flatMap(parseContent);

  return <h2 className="animated-text-container">{elements}</h2>;
};

export default AnimatedText;
