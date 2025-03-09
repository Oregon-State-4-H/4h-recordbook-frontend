"use client";

import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { OverlayModel } from "./OverlayModel";

/**
 * FormInput component
 * @param {string} type - The input type
 * @param {string} label - The input label
 * @param {string} name - The input name
 * @param {string} placeholder - The input placeholder
 * @param {function} onChangeHandler - The function to handle input changes
 * @param {array} options - (Optional) The select input options
 * @param {string} defaultValue - (Optional) The default value for the input
 * @param {boolean} required - (Optional) The input required status. Default is true.
 * @returns {JSX.Element} A form input element
 */
export function FormInput({
  type,
  label,
  name,
  placeholder,
  onChangeHandler,
  options,
  defaultValue,
  required,
  step,
}) {
  // If type is checkbox, align the input to the start

  if (type == "hidden") {
    return <input type="hidden" name={name} value={defaultValue} />;
  } else if (type == "select") {
    if (required != undefined && required == false) {
      return (
        <label className={styles.inputLabel}>
          {label}
          <select
            className={styles.inputDropdown}
            name={name}
            onChange={onChangeHandler}
            defaultValue={defaultValue}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      );
    } else {
      return (
        <label className={styles.inputLabel}>
          {label}
          <select
            className={styles.inputDropdown}
            name={name}
            onChange={onChangeHandler}
            defaultValue={defaultValue}
            required
          >
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      );
    }
  } else {
    if (required != undefined && required == false) {
      return (
        <label className={styles.inputLabel}>
          {label}
          <input
            className={styles.inputField}
            type={type}
            name={name}
            onChange={onChangeHandler}
            placeholder={placeholder}
            defaultValue={defaultValue}
            step={step}
          />
        </label>
      );
    } else {
      return (
        <label className={styles.inputLabel}>
          {label}
          <input
            className={styles.inputField}
            type={type}
            name={name}
            onChange={onChangeHandler}
            placeholder={placeholder}
            defaultValue={defaultValue}
            step={step}
            required
          />
        </label>
      );
    }
  }
}

/**
 * StatusButton component
 * @param {function} handleSubmit - The function to handle form submission
 * @returns {JSX.Element} A button element
 */
export function StatusButton({ postAction, buttonText, pendingText }) {
  const { pending } = useFormStatus();
  const [submitStarted, setSubmitStarted] = useState(false);

  useEffect(() => {
    if (pending) {
      setSubmitStarted(true);
    } else if (submitStarted && !pending) postAction();
  }, [pending, submitStarted, postAction]);

  return (
    <button type="submit" className={styles.formBtn} disabled={pending}>
      {pending
        ? pendingText
          ? pendingText
          : "Submitting..."
        : buttonText
        ? buttonText
        : "Submit"}
    </button>
  );
}

/**
 * An Form Model
 * @param {object} inputs - The form input fields
 * @param {function} inputChangeHandler - The function to handle input changes
 * @param {function} formAction - The function to handle form submission
 * @param {function} postSubmitAction - The function to handle what happens after form submission
 * @param {string} submitButtonText - The text to display on the submit button
 * @param {string} submitPendingText - The text to display on the submit button when submit action is pending
 * @returns {JSX.Element} A model element
 */
export function DynamicForm({
  inputs,
  inputChangeHandler,
  formAction,
  postSubmitAction,
  submitButtonText,
  submitPendingText,
}) {
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.formInputs}>
        {inputs?.map((input, index) => {
          return (
            <FormInput
              key={index}
              {...input}
              onChangeHandler={inputChangeHandler}
            />
          );
        })}
      </div>
      <div className={styles.formBtns}>
        <StatusButton
          postAction={postSubmitAction}
          buttonText={submitButtonText}
          pendingText={submitPendingText}
        />
      </div>
    </form>
  );
}

/**
 * An Form Model with overlay
 * @param {object} inputs - The form input fields
 * @param {function} hideForm - The function to hide the form
 * @param {function} inputChangeHandler - The function to handle input changes
 * @param {function} formAction - The function to handle form submission
 * @param {function} postSubmitAction - The function to handle what happens after form submission
 * @param {string} submitButtonText - The text to display on the submit button
 * @param {string} submitPendingText - The text to display on the submit button when submit action is pending
 * @returns {JSX.Element} A model element
 */
export default function FormModel({
  title,
  inputs,
  hideForm,
  inputChangeHandler,
  formAction,
  postSubmitAction,
  submitButtonText,
  submitPendingText,
}) {
  return (
    <OverlayModel title={title} handleClose={hideForm}>
      <form className={styles.form} action={formAction}>
        <div className={styles.formInputs}>
          {inputs?.map((input, index) => {
            return (
              <FormInput
                key={index}
                {...input}
                onChangeHandler={inputChangeHandler}
              />
            );
          })}
        </div>
        <div className={styles.formBtns}>
          <StatusButton
            postAction={postSubmitAction}
            buttonText={submitButtonText}
            pendingText={submitPendingText}
          />
        </div>
      </form>
    </OverlayModel>
  );
}
