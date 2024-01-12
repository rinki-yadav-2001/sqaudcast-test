import React, { useState } from "react";
import MentionInput from "./components/MentionInput";
import MentionSuggestions from "./components/MentionComponent";
import data from "./data.json";
import "./App.css";

interface MentionOption {
  id: number;
  name: string;
}
const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [mentionOptions, setMentionOptions] = useState<MentionOption[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.includes("@")) {
      setShowOptions(true);
      const filteredOptions = data.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase().replace("@", ""))
      );

      setMentionOptions(filteredOptions);
    } else {
      setShowOptions(false);
    }
  };

  const handleOptionSelect = (option: MentionOption) => {
    const updatedText = inputValue.replace(/@[\w]+/, `@${option.name}`);
    setInputValue(updatedText);
    setShowOptions(false);
  };

  return (
    <div className="App">
      <MentionInput value={inputValue} onChange={handleInputChange} />
      {showOptions && (
        <MentionSuggestions
          options={mentionOptions}
          onSelect={handleOptionSelect}
        />
      )}
    </div>
  );
};

export default App;
