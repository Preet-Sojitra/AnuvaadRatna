"use client";


import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import Signup from "@/components/signup";


const page = () => {
  
  const [signUp,setsignUp] = useState(false)
  
  return (
    <div>
      <Signup/>
    </div>
  );
};

export default page;
