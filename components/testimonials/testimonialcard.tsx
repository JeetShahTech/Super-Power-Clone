type Props = {
  testimonial: {
    customerName: string;
    rating: number;
    title: string;
    content: string;
    isVerified: boolean;
  };
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="
      testimonial-card
      min-w-[360px]
      max-w-[360px]
      snap-start
      bg-white
      border
      rounded-2xl
      p-6
      shadow-sm
    ">

      {/* STARS */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < testimonial.rating ? "text-orange-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-lg mb-2">
        {testimonial.title}
      </h3>

      {/* CONTENT */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {testimonial.content}
      </p>

      {/* USER */}
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">{testimonial.customerName}</span>

        {testimonial.isVerified && (
          <span className="text-green-600 font-medium">✔</span>
        )}
      </div>
    </div>
  );
}
