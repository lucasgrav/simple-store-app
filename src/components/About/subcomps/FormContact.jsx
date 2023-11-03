import { useForm, ValidationError } from "@formspree/react";
const FormContact = () => {
  const [state, handleSubmit] = useForm(`${import.meta.env.VITE_CODE_FORM}`);
  if (state.succeeded) {
    return (
      <div className="mb-10 m-4 font-Jost flex  justify-center items-center w-[80%]  2xl:w-[40%]  bg-[url('/assets/images/footer-bg.webp')] border-y-2 h-[430px]">
        <p className="text-3xl text-[#ff4495] text-center font-semibold">
          ¡Thank you for contacting me!
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10 m-4 font-Jost flex flex-col justify-start items-center w-[80%] p-4 2xl:w-[40%]  bg-[url('/assets/images/footer-bg.webp')] border-y-2 ">
      <h2 className="font-Nunito font-bold text-2xl lg:mb-0">Contact me</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-[100%] items-center p-4"
      >
        <label htmlFor="email" className="text-[#ff4495] ">
          Your Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-[#ff4495] p-2 rounded-lg w-56"
          placeholder="Write your email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          className="border border-[#ff4495] rounded-lg p-2 w-56 h-[200px] sm:w-64 lg:w-96"
          placeholder="Write a message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#ff4495] text-white font-Jost w-36 p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormContact;
