import { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import React from 'react';

interface RichTextProps {
  content: SerializedEditorState | string;
  className?: string;
}

export default function RichText({ content, className = '' }: RichTextProps) {
  // If content is a string (HTML), handle it separately
  if (typeof content === 'string') {
    return (
      <div
        className={`prose max-w-none ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Handle Lexical SerializedEditorState
  if (!content?.root?.children) return null;

  const renderNode = (node: SerializedLexicalNode): React.ReactNode => {
    const key = `${node.type}-${Math.random()}`;

    // Text node
    if (node.type === 'text') {
      const textNode = node as any;
      let text = textNode.text;

      if (textNode.format & 1) text = <strong key={key}>{text}</strong>;
      if (textNode.format & 2) text = <em key={key}>{text}</em>;
      if (textNode.format & 8) text = <u key={key}>{text}</u>;
      if (textNode.format & 4) text = <s key={key}>{text}</s>;

      return text;
    }

    // Paragraph
    if (node.type === 'paragraph') {
      return (
        <p key={key} className="mb-4">
          {(node as any).children?.map(renderNode)}
        </p>
      );
    }

    // Headings
    if (node.type === 'heading') {
      const headingNode = node as any;
      const Tag = `h${headingNode.tag}` as any;
      const headingClasses = {
        h1: 'text-4xl font-bold mb-4',
        h2: 'text-3xl font-bold mb-3',
        h3: 'text-2xl font-bold mb-3',
        h4: 'text-xl font-bold mb-2',
        h5: 'text-lg font-bold mb-2',
        h6: 'text-base font-bold mb-2',
      };

      return (
        <Tag key={key} className={headingClasses[headingNode.tag as keyof typeof headingClasses]}>
          {headingNode.children?.map(renderNode)}
        </Tag>
      );
    }

    // Link
    if (node.type === 'link') {
      const linkNode = node as any;
      return (
        <a
          key={key}
          href={linkNode.fields?.url || '#'}
          target={linkNode.fields?.newTab ? '_blank' : undefined}
          rel={linkNode.fields?.newTab ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:underline"
        >
          {linkNode.children?.map(renderNode)}
        </a>
      );
    }

    // Lists
    if (node.type === 'list') {
      const listNode = node as any;
      const Tag = listNode.listType === 'number' ? 'ol' : 'ul';
      const listClass = listNode.listType === 'number' ? 'list-decimal' : 'list-disc';

      return (
        <Tag key={key} className={`${listClass} ml-6 mb-4`}>
          {listNode.children?.map(renderNode)}
        </Tag>
      );
    }

    if (node.type === 'listitem') {
      return (
        <li key={key} className="mb-1">
          {(node as any).children?.map(renderNode)}
        </li>
      );
    }

    // Quote
    if (node.type === 'quote') {
      return (
        <blockquote key={key} className="border-l-4 border-gray-300 pl-4 italic my-4">
          {(node as any).children?.map(renderNode)}
        </blockquote>
      );
    }

    // Table
    if (node.type === 'table') {
      return (
        <table key={key} className="w-full border-collapse border border-gray-300 my-4">
          <tbody>{(node as any).children?.map(renderNode)}</tbody>
        </table>
      );
    }

    if (node.type === 'tablerow') {
      return <tr key={key}>{(node as any).children?.map(renderNode)}</tr>;
    }

    if (node.type === 'tablecell') {
      const cellNode = node as any;
      const Tag = cellNode.headerState ? 'th' : 'td';
      return (
        <Tag key={key} className="border border-gray-300 px-4 py-2">
          {cellNode.children?.map(renderNode)}
        </Tag>
      );
    }

    // Line break
    if (node.type === 'linebreak') {
      return <br key={key} />;
    }

    return null;
  };

  return (
    <div className={`prose max-w-none ${className}`}>{content.root.children.map(renderNode)}</div>
  );
}
