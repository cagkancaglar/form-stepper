import { Field, Form, Formik, ErrorMessage } from "formik";
import { stepperValidation } from "./validations/stepper-validation";

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

          return (
            <Form className="w-[500px] mx-auto py-4">
              <header className="grid grid-cols-3 gap-x-2.5 border border-zinc-400 rounded-md mb-10 p-4">
                {/* {new Array(values.lastStep).fill("").map((_, index) => (
                  <button key={index}>Step {index + 1}</button>
                ))} */}

                {steps.map((step, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center gap-y-3"
                  >
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white">
                      {step.step}
                    </div>
                    <div className="text-sm">{step.title}</div>
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
