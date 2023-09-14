"use client" 
import { useRouter} from "next/navigation";
import { AppButton } from "../Components/app-button";
export default function Home() {
  const router = useRouter()
  const ShowAlert = () => {
    alert("Hello");
  }
  const goToStudents = () =>{
    router.push("/Students")
  }
  return (
    <main>
      <div className="text-3xl"></div>
      <AppButton onClick ={goToStudents} >Go To Students</AppButton>
      <AppButton onClick={ShowAlert}>ShowAlert</AppButton>

      <div className="mt-2">
        <AppButton>Normal</AppButton>
        <AppButton color = "success" >success</AppButton>
        <AppButton color = "warning" >warning</AppButton>
        <AppButton color = "error" >error</AppButton>
      </div>
    </main>
  )
}