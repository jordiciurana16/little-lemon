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

  return (
    <section className="testimonials-section content-padding text-center pb-5">
      <div className="testimonials-header">
        <h1 className="title pt-5">Testimonials</h1>
      </div>
      <div className="row pt-5 pb-4">
        {testimonials.map((review) => (
          <div key={review.name} className="col-12 col-md-6 col-lg-3">
            <TestimonialCard
              name={review.name}
              image={review.image}
              review={review.review}
              rating={review.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
