import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ formType }) {
  const { loading } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const onSwitchToLogin = () => {
    navigate("/login")
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] bg-black place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-3.5rem)]">
          <div className="w-full max-w-[450px] mx-auto">
            {formType === "signup" ? <SignupForm onSwitchToLogin={onSwitchToLogin} /> : <LoginForm />}
          </div>
        </div>
      )}
    </div>
  )
}

export default Template