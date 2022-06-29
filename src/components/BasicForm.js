import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '');
  
  const {
    value: secondName,
    isValid: secondNameIsValid,
    hasError: secondNameInputHasError,
    valueChangeHandler: secondNameChangedHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondNameInput,
  } = useInput((value) => value.trim() !== '');
  
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstName, secondName, email);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetFirstNameInput();
    resetSecondNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const secondNameInputClasses = secondNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler} value={firstName} />
            {firstNameInputHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor='name'>Second Name</label>
          <input type='text' id='name' onChange={secondNameChangedHandler} onBlur={secondNameBlurHandler} value={secondName}/>
            {secondNameInputHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={email} />
          {emailInputHasError && <p className="error-text">Please enter a valid e-mail address.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
