const ErrorState = ({ message }: { message: string }) => {
  return (
    <div className="text-center text-red-500 py-20">
      {message}
    </div>
  )
}

export default ErrorState