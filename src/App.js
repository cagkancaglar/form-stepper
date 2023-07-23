import { Field, Form, Formik, ErrorMessage } from "formik";
import { stepperValidation } from "./validations/stepper-validation";
import classNames from "classnames";

function App() {
  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          lastStep: 3,

          // step 1
          name: "",
          surname: "",

          // step 2
          age: "",
          job: "",

          // step 3
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const handlePrev = (e) => {
            setFieldValue("step", values.step - 1);
          };

          const handleNext = (e) => {
            setFieldValue("step", values.step + 1);
          };

          const steps = [
            {
              step: 1,
              title: "Personal Information",
            },
            {
              step: 2,
              title: "Survey",
            },
            {
              step: 3,
              title: "Details",
            },
          ];

          const handleStep = (step) => {
            setFieldValue("step", step);
          };

          return (
            <Form className="w-[500px] mx-auto py-4">
              <header className="grid grid-cols-3 gap-x-2.5 border border-zinc-400 rounded-md mb-10 p-4">
                {/* {new Array(values.lastStep).fill("").map((_, index) => (
                  <button key={index}>Step {index + 1}</button>
                ))} */}

                {steps.map((step, index) => (
                  <button
                    type="button"
                    disabled={values.step < step.step}
                    onClick={() => handleStep(step.step)}
                    key={index}
                    className="flex flex-col items-center justify-center gap-y-3"
                  >
                    <div
                      className={classNames(
                        "w-6 h-6 rounded-full flex justify-center items-center text-sm",
                        {
                          "bg-blue-200 text-green-600":
                            values.step === step.step,
                          "bg-green-200 text-green-600":
                            values.step > step.step,
                          "bg-zinc-200 text-zinc-700":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {values.step > step.step ? "✅" : step.step}
                    </div>
                    <div
                      className={classNames("text-sm", {
                        "text-blue-600": values.step === step.step,
                        "text-green-600": values.step > step.step,
                        " text-zinc-700": values.step !== step.step,
                      })}
                    >
                      {step.title}
                    </div>
                  </button>
                ))}
              </header>

              <header className="mb-4">
                <h3 className="text-lg font-medium text-zinc-700">
                  {" "}
                  Step: {values.step}
                </h3>
              </header>

              {values.step === 1 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field name="name" className="input" placeholder="name" />
                    <ErrorMessage
                      name="name"
                      component="small"
                      className="block text-red-600 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="surname"
                      className="input"
                      placeholder="surname"
                    />
                    <ErrorMessage
                      name="surname"
                      component="small"
                      className="block text-red-600 text-xs mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step === 2 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field name="age" className="input" placeholder="age" />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className="block text-red-600 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <Field name="job" className="input" placeholder="job" />
                    <ErrorMessage
                      name="job"
                      component="small"
                      className="block text-red-600 text-xs mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step === 3 && (
                <div className="grid gap-2.5">
                  <div>
                    <Field
                      name="about"
                      component="textarea"
                      className="textarea"
                      placeholder="about"
                    />
                    <ErrorMessage
                      name="about"
                      component="small"
                      className="block text-red-600 text-xs mt-1"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-x-4 mt-4 ">
                {(values.step > 1 && (
                  <button className="button" type="button" onClick={handlePrev}>
                    Prev
                  </button>
                )) || <div />}
                {values.step !== values.lastStep && (
                  <button
                    className="button"
                    type="button"
                    onClick={handleNext}
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </button>
                )}

                {values.step === values.lastStep && (
                  <button className="button" type="submit">
                    Submit
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
