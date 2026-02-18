"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { fetchProductBundles } from "@/store/slices/productSlice";
import { fetchTestimonials } from "@/store/slices/testimonialSlice";
import { fetchFaq } from "@/store/slices/faqSlice";

export default function StoreInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    dispatch(fetchProductBundles());
    dispatch(fetchTestimonials()); 
    dispatch(fetchFaq("senavida"));
   
  }, [dispatch]);

  return null;
}
