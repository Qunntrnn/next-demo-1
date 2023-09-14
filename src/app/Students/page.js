"use client";

import React from "react" ;
import { useRouter } from "next/navigation";
import CreateStudents from "./Create/page";

export default function Students() {
    const router = useRouter();
    
    const createNewStudent  = () =>{
        router.push("/Students/Create");
    };
    
    return (
        <>
            <div className="text-2xl font-bold"> Students </div>
            <button className="border border-solid py-2 px-4 round-full border-black" onClick={createNewStudent}>Creat new student</button>
        </>
    );
}