import * as Yup from "yup";

export const stepperValidation = Yup.object().shape({
  name: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  surname: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),

  age: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
  job: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),

  about: Yup.string().when("step", {
    is: 3,
    then: (schema) => schema.required(),
  }),
});
