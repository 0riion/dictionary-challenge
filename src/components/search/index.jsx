import { Form, FormikProvider, useFormik } from "formik";

export default function Search({ word, setWord }) {
  const formik = useFormik({
    initialValues: { word },
    onSubmit: ({ word }) => setWord(word),
  });

  const { handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 form-control w-full p-2 gap-4">
          <label className="label col-span-1">
            <span className="label-text">You are lucky</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full col-span-1"
            {...getFieldProps("word")}
          />
          <button
            className="btn btn-outline btn-primary col-span-1"
            type="submit">
            Search
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
};
