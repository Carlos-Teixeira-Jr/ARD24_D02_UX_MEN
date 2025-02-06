interface IToast {
  toastProps: {
    message: string;
    type: "success" | "error" | string;
    show: boolean;
  }
}

export function Toast({ toastProps: { message, type, show } }: IToast) {
console.log("🚀 ~ Toast ~ show:", show)

  if (!show) return null;

  return (
    show && (
      <div
        className={`fixed top-5 right-5 px-10 py-5 rounded-lg shadow-lg text-white transition-all duration-500 ease-in-out transform ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } animate-[pulse_2s_ease-in-out_infinite] transition-discrete`}
      >
        {message}
      </div>
    )
  );
}
