import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../Context/PostContext";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as Yup from "yup";

export function FormPost({ isvisible, onClose }) {
  if (!isvisible) return null
  const { createPost } = usePosts()
  const [createdPost, setCreatedPost] = useState({
    title: "",
    description: "",
    image: null
  })
  function handleClose(e) {
    if (e.target.id === "wrapper") onClose()
  }
  return (
    <div className=' fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' id='wrapper' onClick={handleClose}>
      <div className='grid place-items-center mt-40  '>
        <button className='text-white text-xl pl-96' onClick={() => onClose()}>X</button>
        <div className='bg-white p-2 rounded w-96'>
          <h3 className="text-center">Create New Post</h3>
          <div>
            <Formik
              initialValues={createdPost}
              validationSchema={Yup.object({
                title: Yup.string().required("Title is Required"),
                description: Yup.string().required("Description is Required"),
              })}
              onSubmit={async (values, actions) => {
                await createPost(values)
                onClose()
                actions.setSubmitting(false)
              }}
            >
              {({ handleSubmit, setFieldValue, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <h3>Title</h3>
                  <Field name='title' placeholder='title' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" />
                  <ErrorMessage component="p" className="text-red-400 text-sm" name="title" />
                  <h3>Description</h3>
                  <Field className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" name='description' placeholder='description' />
                  <ErrorMessage className="text-red-400 text-sm" component="p" name="description" />
                  <h3>Image</h3>
                  <input type="file" name="image" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" onChange={(e) => setFieldValue('image', e.target.files[0])} />
                  <button className=" bg-indigo-600 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400 hover:bg-indigo-500" type="submit" disabled={isSubmitting}>{isSubmitting ? (
                    <AiOutlineLoading3Quarters className=" animate-spin h-5 w-5" />
                  ) : 'Save'}</button>
                </Form>)}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
