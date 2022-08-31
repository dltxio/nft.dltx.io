import React, { useState } from "react";

type Props = {
  title?: string;
  inputs:
    | number
    | {
        type?: string;
        title?: string;
      }[];
  submitTitle?: string;
  onSubmit: (data: FormReturnType[]) => void;
  styles?: {
    title?: string;
    titleUpper?: true;
    inputs?: string;
    submit?: string;
    submitUpper?: true;
    background?: string;
  };
};

type FormReturnType = {
  title: string;
  value: string;
};

const FastForm: React.FC<Props> = (props) => {
  const { title, inputs, submitTitle = "Submit", onSubmit, styles } = props;

  const [formState, setFormState] = useState<FormReturnType[]>([]);

  return (
    <div
      className={
        styles?.background ||
        "w-full flex flex-col items-center mb-2 bg-white p-2 rounded-xl"
      }
    >
      {/* form title */}
      {title && (
        <h1
          key="ff-title"
          className={styles?.title || "text-xl font-black text-black mb-2"}
        >
          {styles?.titleUpper ? title.toUpperCase() : title}
        </h1>
      )}

      {/* form inputs */}
      {typeof inputs === "number"
        ? [...Array(inputs).keys()].map((i) => (
            <input
              key={`ff-input-${i}`}
              type="text"
              className={
                styles?.inputs ||
                "border-2 border-black w-full bg-white \
              text-black rounded-md mb-2 px-2 py-1"
              }
              onChange={(e) => {
                const value = e.currentTarget.value;
                setFormState((prevState) => {
                  prevState[i] = {
                    title: `ff-input-${i}`,
                    value
                  };
                  return [...prevState];
                });
              }}
            />
          ))
        : inputs.map((input, i) => (
            <input
              key={input.title ? `ff-input-${input.title}` : `ff-input-${i}`}
              type={input.type || "text"}
              placeholder={input.title || ""}
              className={
                styles?.inputs ||
                "border-2 border-black w-full bg-white \
              text-black rounded-md mb-2 px-2 py-1"
              }
              onChange={(e) => {
                const value = e.currentTarget.value;
                setFormState((prevState) => {
                  prevState[i] = {
                    title: `${input.title || `ff-input-${i}`}`,
                    value
                  };
                  return [...prevState];
                });
              }}
            />
          ))}

      {/* form submit button */}
      <button
        key="ff-submit"
        onClick={() => onSubmit(formState)}
        className={
          styles?.submit ||
          "w-full text-center py-1 text-black font-bold \
          bg-white border-2 border-black rounded-md transition-all \
          duration-150 hover:bg-black hover:text-white hover:font-normal"
        }
      >
        {styles?.submitUpper ? submitTitle.toUpperCase() : submitTitle}
      </button>
    </div>
  );
};

export default FastForm;
