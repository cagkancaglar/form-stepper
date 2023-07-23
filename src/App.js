import { Field, Form, Formik } from "formik";

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          step: 3,
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
        {({ values, setFieldValue }) => {
          const handlePrev = (e) => {
            setFieldValue("step", values.step - 1);
          };

          const handleNext = (e) => {
            setFieldValue("step", values.step + 1);
          };

          return (
            <Form className="w-[500px] mx-auto py-4">
              <header className="mb-4">
                <h3 className="text-lg font-medium text-zinc-700">
                  {" "}
                  Step: {values.step}
                </h3>
              </header>

              {values.step === 1 && (
                <div className="grid gap-2.5">
                  <Field name="name" className="input" placeholder="name" />
                  <Field
                    name="surname"
                    className="input"
                    placeholder="surname"
                  />
                </div>
              )}

              {values.step === 2 && (
                <div className="grid gap-2.5">
                  <Field name="age" className="input" placeholder="age" />
                  <Field name="job" className="input" placeholder="job" />
                </div>
              )}

              {values.step === 3 && (
                <div className="grid gap-2.5">
                  <Field
                    name="about"
                    component="textarea"
                    className="textarea"
                    placeholder="about"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-x-4 mt-4 ">
                {(values.step > 1 && (
                  <button className="button" type="button" onClick={handlePrev}>
                    Prev
                  </button>
                )) || <div />}
                {(values.step === values.lastStep && (
                  <button className="button" type="submit">
                    Submit
                  </button>
                )) || (
                  <button className="button" type="button" onClick={handleNext}>
                    Next
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
