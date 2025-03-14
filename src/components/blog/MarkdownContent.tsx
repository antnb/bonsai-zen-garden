
import React from 'react';
import { formatMarkdown } from '../../utils/markdownUtils';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div 
      className="prose prose-lg prose-green max-w-none"
      dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }} 
    />
  );
};

export default MarkdownContent;
