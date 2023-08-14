const Loader = ({center}) => {
  return (
    <div className={center ? "loading loading-center" : "loading"}></div>
  )
}
export default Loader