import React, { useState } from "react";

type Props = {
  title?: string;
  inputs: number;
  inputTypes?: string[];
  inputTitles?: string[];
  submitTitle: string;
  onSubmit: (...args: any[]) => void;
  styles?: {
    title?: string;
    titleUpper?: true;
    input?: string;
    submit?: string;
    submitUpper?: true;
  };
};

const FastForm: React.FC<Props> = (props) => {
  const {
    title,
    inputs,
    inputTypes,
    inputTitles,
    submitTitle,
    onSubmit,
    styles
  } = props;

  const [formState, setFormState] = useState([...Array(inputs)].map(() => ""));

  return (
    <div className="w-full flex flex-col items-center mb-2">
      {/* form title */}
      {title && (
        <h1
          key="ff-title"
          className={styles?.title || "text-xl font-black text-white mb-2"}
        >
          {styles?.titleUpper ? title.toUpperCase() : title}
        </h1>
      )}

      {/* form inputs */}
      {[...Array(inputs)].map((input, i) => (
        <input
          key={`ff-input-${input}`}
          type={inputTypes ? inputTypes[i] : "text"}
          placeholder={inputTitles ? inputTitles[i] : ""}
          className={
            styles?.input ||
            "border-[1.5px] border-white/20 w-full bg-black \
            text-white rounded-md mb-2 px-2 py-1"
          }
          onChange={(e) => {
            const newState = formState;
            newState[i] = e.currentTarget.value;
            setFormState(newState);
          }}
        />
      ))}

      {/* form submit button */}
      <div
        key="ff-submit"
        onClick={() => onSubmit(formState)}
        className={
          styles?.submit ||
          "cursor-pointer w-full text-center py-1 text-white \
          bg-black border-2 border-white rounded-md transition-all \
          duration-150 hover:bg-white hover:text-black hover:font-bold"
        }
      >
        {styles?.submitUpper ? submitTitle.toUpperCase() : submitTitle}
      </div>
    </div>
  );
};

export default FastForm;
