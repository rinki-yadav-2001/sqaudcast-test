import React from "react";

interface MentionOption {
  id: number;
  name: string;
}

interface MentionSuggestionsProps {
  options: MentionOption[];
  onSelect: (option: MentionOption) => void;
}

const MentionSuggestions: React.FC<MentionSuggestionsProps> = ({
  options,
  onSelect,
}) => {
  return (
    <div className="mentionContainer">
      {options.map((option) => (
        <div
          className="option"
          key={option.id}
          onClick={() => onSelect(option)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default MentionSuggestions;
