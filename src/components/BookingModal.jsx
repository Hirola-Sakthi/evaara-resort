import { useState } from 'react'
import {
  CalendarDays,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
  Users,
  X,
} from 'lucide-react'

import modalImage from '../assets/images/generated-coorg-resort-hero.png'
import toast from 'react-hot-toast'

const initialBookingForm = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '',
  message: '',
}

function openDatePicker(event) {
  event.preventDefault()
  event.currentTarget.showPicker?.()
}

function clearDateFocus(event) {
  window.setTimeout(() => event.currentTarget.blur(), 0)
}

function Field({ label, icon: Icon, name, value, onChange, placeholder, type = 'text', required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
        {label}
      </span>
      <div className="flex h-10 items-center gap-3 rounded-[8px] border border-[#102C26]/12 bg-[#FFFDF8]/72 px-3 text-[#102C26] transition focus-within:border-[#B99A62] sm:h-11 sm:px-4">
        <Icon size={17} strokeWidth={1.55} className="shrink-0 text-[#536B50]" />
        <input
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="h-full min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#102C26]/38 sm:text-sm"
        />
      </div>
    </label>
  )
}

function DateField({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
        {label}
      </span>
      <div className="flex h-10 items-center gap-3 rounded-[8px] border border-[#102C26]/12 bg-[#FFFDF8]/72 px-3 text-[#102C26] transition focus-within:border-[#B99A62] sm:h-11 sm:px-4">
        <CalendarDays size={17} strokeWidth={1.55} className="shrink-0 text-[#536B50]" />
        <input
          name={name}
          type="date"
          aria-label={label}
          value={value}
          onMouseDown={openDatePicker}
          onChange={onChange}
          className="h-full min-w-0 flex-1 appearance-none bg-transparent text-xs text-[#102C26]/72 outline-none [color-scheme:light] [&::-webkit-calendar-picker-indicator]:hidden sm:text-sm"
        />
      </div>
    </label>
  )
}

function GuestField({ value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
        Guests
      </span>
      <div className="flex h-10 items-center gap-3 rounded-[8px] border border-[#102C26]/12 bg-[#FFFDF8]/72 px-3 text-[#102C26] transition focus-within:border-[#B99A62] sm:h-11 sm:px-4">
        <Users size={17} strokeWidth={1.55} className="shrink-0 text-[#536B50]" />
        <select
          name="guests"
          aria-label="Guests"
          value={value}
          onChange={onChange}
          className="h-full min-w-0 flex-1 appearance-none bg-transparent text-xs text-[#102C26]/72 outline-none sm:text-sm"
        >
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5 Guests</option>
          <option>6+ Guests</option>
        </select>
        <ChevronDown size={15} strokeWidth={1.6} className="text-[#B99A62]" />
      </div>
    </label>
  )
}

function BookingModal({ isOpen, onClose }) {
const [formData, setFormData] = useState(initialBookingForm)
const [isLoading, setIsLoading] = useState(false);

 const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone =
        "Please enter a valid 10-digit phone number";
    }

    if (!formData.checkIn) {
      errors.checkIn = "Check-in date is required";
    }

    if (!formData.checkOut) {
      errors.checkOut = "Check-out date is required";
    }

    if (
      formData.checkIn &&
      formData.checkOut &&
      formData.checkOut <= formData.checkIn
    ) {
      errors.checkOut =
        "Check-out date must be after check-in date";
    }

        if (!formData.guests.trim()) {
      errors.guests = "Number of guests is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      const firstError = Object.values(formErrors)[0];

      toast.error(firstError);

      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/vegkourt/commentform.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      console.log("Response:", response);
      console.log("STATUS:", response.status);

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`,
        );
      }

      const responseData = await response.json();

      console.log("PHP RESPONSE:", responseData);

      if (responseData.status === "success") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "",
          message: "",
        });

        toast.success(
          "Your inquiry has been submitted successfully.",
        );
        onClose();  
      } else {
        console.error("Error:", responseData.message);

        toast.error(
          responseData.message ||
            "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error(
        "An error occurred. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-[#071A17]/48 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-4">
      <button
        type="button"
        aria-label="Close booking overlay"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative grid max-h-[calc(100svh-1.5rem)] w-full max-w-5xl overflow-x-hidden overflow-y-auto rounded-[16px] border border-[#F6F1E7]/55 bg-[#F8F4EA] text-[#102C26] shadow-[0_30px_90px_rgba(7,26,23,0.28)] sm:max-h-[calc(100svh-2rem)] lg:grid-cols-[0.78fr_1fr] lg:rounded-[18px]"
      >
        <button
          type="button"
          aria-label="Close booking form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 grid size-9 cursor-pointer place-items-center rounded-full text-[#102C26]/68 transition hover:bg-[#102C26]/8 hover:text-[#102C26] sm:right-4 sm:top-4"
        >
          <X size={21} strokeWidth={1.45} />
        </button>

        <aside className="relative hidden min-h-[520px] overflow-hidden p-8 lg:block xl:p-10">
          <img
            src={modalImage}
            alt="EVAARA resort stay in Coorg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F4EA]/72 via-[#F8F4EA]/28 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F4EA]/76 via-transparent to-transparent" />

          <div className="relative flex h-full flex-col">
            <div>
              <p className="font-serif text-3xl tracking-[0.28em] text-[#102C26] xl:text-4xl">
                EVAARA
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.42em] text-[#102C26]/70">
                Resort
              </p>
            </div>

            <div className="mt-auto max-w-xs">
              <div className="mb-5 h-px w-16 bg-[#B99A62]" />
              <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.03em] xl:text-4xl">
                Let's plan your perfect getaway.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#102C26]/68">
                Share your details and our team will get back to you with the
                best options, offers and personalized recommendations.
              </p>
            </div>
          </div>
        </aside>

        <div className="relative px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-9 xl:px-10">
          <div className="mb-4 pr-10 sm:mb-5">
            <h2 id="booking-modal-title" className="font-serif text-3xl leading-[1.02] tracking-[-0.035em] text-[#102C26] sm:text-4xl md:text-5xl">
              Tell us about your stay
            </h2>
            <p className="mt-3 text-[10px] font-bold uppercase leading-5 tracking-[0.2em] text-[#536B50] sm:mt-4 sm:text-[11px] sm:tracking-[0.3em]">
              We're here to help you plan the perfect experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border-y border-[#102C26]/8 py-4 sm:py-5">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <Field
                label="Full Name *"
                icon={User}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
              <Field
                label="Email Address *"
                icon={Mail}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                type="email"
                required
              />
              <Field
                label="Phone Number *"
                icon={Phone}
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
              />
              <DateField
                label="Check-In Date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
              />
              <DateField
                label="Check-Out Date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
              />
              <GuestField value={formData.guests} onChange={handleInputChange} />
            </div>

            <label className="mt-3 block sm:mt-4">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                Message / Special Request
              </span>
              <div className="flex min-h-[76px] gap-3 rounded-[8px] border border-[#102C26]/12 bg-[#FFFDF8]/72 px-3 py-3 transition focus-within:border-[#B99A62] sm:min-h-[84px] sm:px-4">
                <MessageCircle size={17} strokeWidth={1.55} className="mt-1 shrink-0 text-[#536B50]" />
                <textarea
                  name="message"
                  aria-label="Message or special request"
                  maxLength="500"
                  placeholder="Tell us about your preferences, requirements or any special requests..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[50px] flex-1 resize-none bg-transparent text-xs outline-none placeholder:text-[#102C26]/38 sm:min-h-[58px] sm:text-sm"
                />
                <span className="self-end text-[10px] text-[#102C26]/38">{formData.message.length}/500</span>
              </div>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 inline-flex h-11 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#B99A62] px-6 text-xs font-bold uppercase tracking-[0.24em] text-[#071A17] shadow-[0_18px_45px_rgba(185,154,98,0.28)] transition hover:bg-[#D9C6A5] sm:mt-5 sm:h-12 sm:gap-4 sm:px-7 sm:tracking-[0.32em]"
            >
              <Send size={16} strokeWidth={1.55} />
              {isLoading ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookingModal
