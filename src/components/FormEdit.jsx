import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../Context/PostContext";
import * as Yup from "yup";

export function FormEdit({ isvisible, onClose, post }) {
    if (!isvisible) return null
    const { createPost } = usePosts()

    function handleClose(e) {
        if (e.target.id === "wrapper") onClose()
    }
    return (
        <div className=' fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' id='wrapper' onClick={handleClose}>
            <div className='grid place-items-center mt-40  '>
                <button className='text-white text-xl pl-96' onClick={() => onClose()}>X</button>
                <div className='bg-white p-2 rounded w-96'>
                    <h3 className=" text-black text-center">Edit</h3>
                    <div>
                        <Formik
                            initialValues={{
                                title: '',
                                description: ''
                            }}
                            validationSchema={Yup.object({
                                title: Yup.string().required("Title is Required"),
                                description: Yup.string().required("Description is Required"),
                            })}
                            onSubmit={(values, action) => {
                                createPost(values)
                                onClose()
                            }}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3>Title</h3>
                                    <Field name='title' placeholder='title' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" />
                                    <ErrorMessage component="p" className="text-red-400 text-sm" name="title" />
                                    <h3>Description</h3>
                                    <Field className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" name='description' placeholder='description' />
                                    <ErrorMessage className="text-red-400 text-sm" component="p" name="description" />
                                    <button type="submit">Save</button>
                                </Form>)}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
