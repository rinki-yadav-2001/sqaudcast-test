import React, { ChangeEvent } from "react";

interface MentionInputProps {
  value: string;
  onChange: (value: string) => void;
}

const MentionInput: React.FC<MentionInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Mention..."
    />
  );
};

export default MentionInput;
