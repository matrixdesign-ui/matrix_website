"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NiceSelect from "../ui/nice-select";

const schema = yup.object({
  fullName: yup.string().required("Full name is required").min(2, "Name must be at least 2 characters").label("Full Name"),
  email: yup.string().required("Email is required").email("Please enter a valid email address").label("Email"),
  phone: yup.string().required("Phone number is required").matches(/^[+]?[0-9\s\-\(\)]{10,}$/, "Please enter a valid phone number").label("Phone Number"),
  service: yup.string().required("Please select a service").label("Service"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters").label("Message"),
}).required();

const ContactUsForm = ({ onSubmit: onSubmitProp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const selectHandler = (selectedOption) => {
    setSelectedService(selectedOption.value);
    setValue("service", selectedOption.value);
    trigger("service");
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus(null);
    
    try {
      if (onSubmitProp) {
        await onSubmitProp(data);
      } else {
        // Default behavior - you can integrate with your API here
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        console.log("Contact form submission:", data);
      }
      setSubmitStatus('success');
      reset();
      setSelectedService("");
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "inputText";
    if (errors[fieldName]) return `${baseClass} error`;
    if (touchedFields[fieldName] && !errors[fieldName]) return `${baseClass} valid`;
    return baseClass;
  };

  const getTextareaClassName = () => {
    const baseClass = "textareaText";
    if (errors.message) return `${baseClass} error`;
    if (touchedFields.message && !errors.message) return `${baseClass} valid`;
    return baseClass;
  };

  // Return loading state during SSR
  if (!isMounted) {
    return (
      <div className="contact-form-placeholder">
        <p>Loading contact form...</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="box" noValidate>
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                type="text" 
                className={getInputClassName('fullName')}
                {...register("fullName")}
                aria-label="Full Name"
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                disabled={isLoading}
              />
              <span className="floating-label">Full Name *</span>
              {errors.fullName && (
                <div id="fullName-error" className="error-message" role="alert">
                  {errors.fullName.message}
                </div>
              )}
            </div>
          </div>
          
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                type="email" 
                className={getInputClassName('email')}
                {...register("email")}
                aria-label="Email Address"
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isLoading}
              />
              <span className="floating-label">Your Email *</span>
              {errors.email && (
                <div id="email-error" className="error-message" role="alert">
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>
          
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input 
                type="tel" 
                className={getInputClassName('phone')}
                {...register("phone")}
                aria-label="Phone Number"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                disabled={isLoading}
              />
              <span className="floating-label">Phone Number *</span>
              {errors.phone && (
                <div id="phone-error" className="error-message" role="alert">
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>
          
          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "", text: "Select a Service" },
                  { value: "Software & Applications", text: "Software & Applications" },
                  { value: "Enterprise Solutions", text: "Enterprise Solutions" },
                  { value: "Infrastructure & Development", text: "Infrastructure & Development" },
                  { value: "ICT, Telecom & Analytics", text: "ICT, Telecom & Analytics" },
                  { value: "Security & Operational Safety", text: "Security & Operational Safety" },
                  { value: "Governance & Compliance", text: "Governance & Compliance" },
                  { value: "Facilities & Asset Management", text: "Facilities & Asset Management" },
                  { value: "Education Solutions", text: "Education Solutions" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                className={errors.service ? 'error' : (selectedService ? 'valid' : '')}
                aria-label="Select Service"
                aria-describedby={errors.service ? "service-error" : undefined}
                disabled={isLoading}
              />
              {errors.service && (
                <div id="service-error" className="error-message" role="alert">
                  {errors.service.message}
                </div>
              )}
            </div>
          </div>
          
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea 
                className={getTextareaClassName()}
                {...register("message")}
                aria-label="Message"
                aria-describedby={errors.message ? "message-error" : undefined}
                disabled={isLoading}
                rows="5"
              ></textarea>
              <span className="floating-label-2">Your Message *</span>
              {errors.message && (
                <div id="message-error" className="error-message" role="alert">
                  {errors.message.message}
                </div>
              )}
            </div>
          </div>
          
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button 
                className={`submit-btn w-100 ${isLoading ? 'loading' : ''}`}
                type="submit"
                disabled={isLoading}
                aria-label={isLoading ? "Sending request..." : "Send your Request"}
              >
                {isLoading ? (
                  <>
                    <span className="spinner" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  "Send your Request"
                )}
              </button>
            </div>
          </div>
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="col-12">
              <div className="form-status success" role="alert">
                ✓ Thank you! Your request has been sent successfully. We'll get back to you within 24 hours.
              </div>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="col-12">
              <div className="form-status error" role="alert">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
