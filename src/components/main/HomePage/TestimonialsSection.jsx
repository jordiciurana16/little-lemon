import React, { useEffect, useState } from "react";
import TestimonialCard from "../Testimonial/TestimonialCard.jsx";
import testimonialData from "../Testimonial/TestimonialData.json"

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const testimonialArray = Object.values(testimonialData);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const totalTestimonials = testimonialArray.length;
    const totalPages = Math.ceil(totalTestimonials / 4);
    setTotalPages(totalPages);
    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    setTestimonials(testimonialArray.slice(startIndex, endIndex));
  }, [currentPage, testimonialArray]);

  const handlePrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="testimonials-section content-padding text-center">
      <div className="testimonials-images position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left left-image"
          viewBox="0 0 16 16"
          onClick={handlePrevPage}
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right right-image"
          viewBox="0 0 16 16"
          onClick={handleNextPage}
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div className="testimonials-header mt-4 pt-3">
        <h1 className="title pt-4">Testimonials</h1>
      </div>
      <div className="mt-4 pb-5">
        <div className="row">
          {testimonials.map((review) => (
            <div key={review.name} className="col-3 mb-5">
              <TestimonialCard
                name={review.name}
                image={review.image}
                review={review.review}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
