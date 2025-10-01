"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EmailIcon from "../svg/email";

const schema = yup.object({
  email: yup.string().required("Email is required").email("Please enter a valid email address").label("Email"),
}).required();

const HeroForm = ({ onSubmit: onSubmitProp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus(null);
    
    try {
      if (onSubmitProp) {
        await onSubmitProp(data);
      } else {
        // Default behavior - you can integrate with your API here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        console.log("Hero form submission:", data);
      }
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Return loading state during SSR
  if (!isMounted) {
    return (
      <div className="hero-form-placeholder">
        <div className="p-relative">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="hero-email-input"
            disabled
          />
          <EmailIcon />
        </div>
        <button className="tp-btn tp-btn-hover alt-color-black" disabled>
          <span>Get in Touch</span>
          <b></b>
        </button>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="p-relative">
          <input 
            type="email" 
            placeholder="Enter your email address"
            {...register("email")}
            className={`hero-email-input ${errors.email ? 'error' : ''} ${isValid && !errors.email ? 'valid' : ''}`}
            aria-label="Email address"
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isLoading}
          />
          {/* email icon */}
          <EmailIcon />
          {errors.email && (
            <div id="email-error" className="error-message" role="alert">
              {errors.email.message}
            </div>
          )}
        </div>
        <button 
          className={`tp-btn tp-btn-hover alt-color-black ${isLoading ? 'loading' : ''}`}
          type="submit"
          disabled={isLoading}
          aria-label={isLoading ? "Submitting..." : "Get in Touch"}
        >
          <span>
            {isLoading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Get in Touch"
            )}
          </span>
          <b></b>
        </button>
        
        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="form-status success" role="alert">
            ✓ Thank you! We'll be in touch soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="form-status error" role="alert">
            ✗ Something went wrong. Please try again.
          </div>
        )}
      </form>
    </>
  );
};

export default HeroForm;
