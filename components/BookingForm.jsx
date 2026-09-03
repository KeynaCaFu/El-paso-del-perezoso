"use client";

import { useMemo, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/images";

function todayStr() {
  const t = new Date();
  const m = String(t.getMonth() + 1).padStart(2, "0");
  const day = String(t.getDate()).padStart(2, "0");
  return `${t.getFullYear()}-${m}-${day}`;
}

export default function BookingForm({ t, locale }) {
  const today = useMemo(todayStr, []);
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    requests: "",
  });
  const [errors, setErrors] = useState({ checkIn: "", checkOut: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  function validateDates(next = values) {
    const err = { checkIn: "", checkOut: "" };
    if (next.checkIn && next.checkIn < today) {
      err.checkIn = t.errCheckInPast;
    }
    if (next.checkOut) {
      if (!next.checkIn) err.checkOut = t.errNoCheckIn;
      else if (next.checkOut <= next.checkIn) err.checkOut = t.errCheckOutOrder;
      else if (next.checkOut < today) err.checkOut = t.errCheckOutPast;
    }
    setErrors(err);
    return !err.checkIn && !err.checkOut;
  }

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateDates()) {
      alert(t.errFix);
      return;
    }

    const m = t.wa;
    const message = `${m.header}

${m.client}
${m.name}: ${values.fullName}
${m.phone}: ${values.phone}

${m.details}
${m.checkIn}: ${formatDate(values.checkIn)}
${m.checkOut}: ${formatDate(values.checkOut)}
${m.guests}: ${values.guests}

${m.requests}
${values.requests || m.none}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setShowSuccess(true);
    setValues({
      fullName: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      requests: "",
    });
    setErrors({ checkIn: "", checkOut: "" });

    setTimeout(() => window.open(url, "_blank"), 500);
    setTimeout(() => setShowSuccess(false), 4000);
  }

  return (
    <div className="card-nature booking-card">
      <form id="bookingForm" onSubmit={handleSubmit} noValidate>
        <div className="form-floating">
          <input
            className="form-control"
            id="fullName"
            type="text"
            placeholder={t.fullName}
            value={values.fullName}
            onChange={set("fullName")}
            required
          />
          <label htmlFor="fullName">{t.fullName}</label>
        </div>

        <div className="form-floating">
          <input
            className="form-control"
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={values.phone}
            onChange={set("phone")}
            required
          />
          <label htmlFor="phone">{t.phone}</label>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                className={`form-control${errors.checkIn ? " is-invalid" : ""}`}
                id="checkIn"
                type="date"
                min={today}
                value={values.checkIn}
                onChange={(e) => {
                  const next = { ...values, checkIn: e.target.value };
                  setValues(next);
                  validateDates(next);
                }}
                required
              />
              <label htmlFor="checkIn">{t.checkIn}</label>
              {errors.checkIn && (
                <small className="text-danger d-block mt-1">
                  {errors.checkIn}
                </small>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                className={`form-control${errors.checkOut ? " is-invalid" : ""}`}
                id="checkOut"
                type="date"
                min={today}
                value={values.checkOut}
                onChange={(e) => {
                  const next = { ...values, checkOut: e.target.value };
                  setValues(next);
                  validateDates(next);
                }}
                required
              />
              <label htmlFor="checkOut">{t.checkOut}</label>
              {errors.checkOut && (
                <small className="text-danger d-block mt-1">
                  {errors.checkOut}
                </small>
              )}
            </div>
          </div>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="guests"
            value={values.guests}
            onChange={set("guests")}
            required
          >
            <option value="">{t.guestsPlaceholder}</option>
            {t.guestsOptions.map((label, i) => (
              <option key={i} value={i === 4 ? "5" : String(i + 1)}>
                {label}
              </option>
            ))}
          </select>
          <label htmlFor="guests">{t.guests}</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            id="requests"
            placeholder="..."
            style={{ height: "8rem" }}
            value={values.requests}
            onChange={set("requests")}
          />
          <label htmlFor="requests">{t.requests}</label>
        </div>

        <div className="d-grid mt-2">
          <button className="btn-submit" type="submit">
            <i className="bi bi-whatsapp" />
            {t.submit}
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="success-box mt-3">
          <strong>{t.success}</strong>
        </div>
      )}
    </div>
  );
}
