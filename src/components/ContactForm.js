import {useForm} from "react-hook-form";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm();

    async function onSubmit(data) {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return (
        <>
            <h2 className="font-title text-2xl uppercase mb-6">Contact form</h2>
            <p className="mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus ea id impedit recusandae
                repellendus suscipit tempore voluptate. Nihil, suscipit.
            </p>
            {!isSubmitSuccessful ?
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="max-w-[350px]">
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required.'
                                }
                            })}
                            className={"w-full p-3 border-2 border-neutral-500 focus:outline-none " +
                                (errors.name ? "border-red-500" : "focus:border-green-500")}
                            type="text"
                            placeholder="Name"
                            aria-label="Name"
                        />
                        {errors.email && <span className="text-sm text-red-500">{errors.name?.message}</span>}
                    </div>
                    <div className="max-w-[350px]">
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required.'
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format."
                                }
                            })}
                            className={"w-full p-3 border-2 border-neutral-500 focus:outline-none " +
                                (errors.email ? "border-red-500" : "focus:border-green-500")}
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                        />
                        {errors.email && <span className="text-sm text-red-500">{errors.email?.message}</span>}
                    </div>
                    <div className="max-w-[350px]">
                        <input
                            {...register("subject")}
                            className="w-full p-3 border-2 border-neutral-500 focus:outline-none focus:border-green-500"
                            type="text"
                            placeholder="Subject"
                            aria-label="Subject"
                        />
                    </div>
                    <div>
                <textarea
                    {...register("message", {
                        required: {
                            value: true,
                            message: 'Message is required.'
                        },
                        maxLength: {
                            value: 1000,
                            message: 'Message cannot exceed 1000 characters.'
                        }
                    })}
                    className={"w-full p-3 border-2 border-neutral-500 focus:outline-none resize-none " +
                        (errors.message ? "border-red-500" : "focus:border-green-500")}
                    rows="8"
                    name="message"
                    aria-label="Message"
                />
                        {errors.message && <span className="text-sm text-red-500">{errors.message?.message}</span>}
                    </div>
                    <button
                        disabled={isSubmitting}
                        className="text-sm text-white font-bold uppercase bg-green-500 w-fit p-3 hover:bg-green-400 flex items-center"
                        type="submit"
                        aria-label="Send Message"
                    >
                        {isSubmitting &&
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                        }
                        Send Message
                    </button>
                </form>
                :
                <div className="flex flex-col items-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-bold mb-6">Form submitted successfully.</span>
                    <button
                        disabled={isSubmitting}
                        onClick={() => reset({isSubmitted: false})}
                        className="p-3 text-sm bg-green-500 text-white text-bold uppercase font-bold hover:bg-green-400"
                    >
                        Send another
                    </button>
                </div>
            }
        </>
    )
}
