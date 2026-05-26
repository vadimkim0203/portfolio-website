import React from 'react';

export function parseDescription(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  // Regex to match [**text**](url) and **text**
  const regex = /\[\*\*(.*?)\*\*\]\((.*?)\)|\*\*(.*?)\*\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Handle [**text**](url) - bold link
    if (match[1] && match[2]) {
      parts.push(
        <a
          key={`${match.index}-link`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          {match[1]}
        </a>
      );
    }
    // Handle **text** - bold only
    else if (match[3]) {
      parts.push(
        <strong key={`${match.index}-bold`}>{match[3]}</strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // Split by newlines and add breaks
  const result: React.ReactNode[] = [];
  parts.forEach((part, index) => {
    if (typeof part === 'string') {
      const lines = part.split('\n');
      lines.forEach((line, lineIndex) => {
        if (lineIndex > 0) {
          result.push(<br key={`br-${index}-${lineIndex}`} />);
        }
        if (line) {
          result.push(line);
        }
      });
    } else {
      result.push(part);
    }
  });

  return result.length > 0 ? result : text;
}
