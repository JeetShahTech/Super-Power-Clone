export default function MembershipContent() {
  return (
    <div>
      <p className="text-lg text-gray-500 mb-2">
        What could cost you $15,000 is $199
      </p>

      <h2 className="text-5xl lg:text-6xl font-semibold mb-6">
        Superpower <br /> Membership
      </h2>

      <p className="mb-6 max-w-lg">
        Your membership includes one comprehensive blood draw each year,
        covering 100+ biomarkers in a single collection
      </p>

      <ul className="space-y-4 mb-4">
        <li className="flex gap-3 text-gray-500">
          <span className="text-orange-500">✓</span>
          One appointment, one draw for your annual panel.
        </li>

        <li className="flex gap-3 text-gray-500">
          <span className="text-orange-500">✓</span>
          100+ biomarkers per year
        </li>

        <li className="flex gap-3 text-gray-500">
          <span className="text-orange-500">✓</span>A personalized plan that
          evolves with you
        </li>

        <li className="flex gap-3 text-gray-500">
          <span className="text-orange-500">✓</span>
          Get your biological age and track your health
        </li>
      </ul>

      <div className="flex items-end gap-3 mb-6">
        <span className="text-xl">$</span>
        <span className="text-5xl font-semibold">17</span>
        <span className="text-gray-500 mb-1">/month · billed annually</span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Pricing for members in NY & NJ is $399 with 90+ biomarkers tested.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-gray-400">Flexible payment options</span>

        <img
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf5ab8ebd836a9d9b6398d_Frame%20(1).avif"
          alt="HSA FSA Amex Visa Mastercard"
          className="h-6 w-auto object-contain"
        />
      </div>

      <a
        href="https://app.superpower.com/register"
        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff5a2f] to-[#ff6a3d] hover:from-[#ff6a3d] hover:to-[#ff5a2f] text-white font-semibold text-lg px-12 py-4 rounded-full shadow-[0_8px_20px_rgba(255,90,47,0.25)] hover:shadow-[0_12px_28px_rgba(255,90,47,0.35)] hover:-translate-y-[1px] active:translate-y-[1px] transition-all duration-300 ease-out w-full lg:w-auto">
        <span>Start testing</span>

        
        <svg
          className="hidden sm:block"
          width="22"
          height="22"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M9.5 18.5967L15.5 12.5967L9.5 6.59668"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
        
        <div className="flex items-center gap-2">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="text-gray-500"
          >
            <path
              d="M13.8334 4.09668L6.50002 11.43L3.16669 8.09668"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-sm text-gray-500">Cancel anytime</span>
        </div>

        
        <div className="flex items-center gap-2">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="text-gray-500"
          >
            <path
              d="M15.034 6.76334C15.3385 8.25754 15.1215 9.81095 14.4192 11.1645C13.717 12.5181 12.5719 13.59 11.175 14.2016C9.7781 14.8131 8.21376 14.9272 6.74287 14.5249C5.27199 14.1226 3.98347 13.2283 3.09219 11.991C2.20091 10.7536 1.76075 9.24816 1.84511 7.7256C1.92948 6.20303 2.53326 4.7554 3.55577 3.62412C4.57829 2.49284 5.95773 1.74629 7.46405 1.50897C8.97037 1.27166 10.5125 1.55791 11.8333 2.32001M6.50001 7.43001L8.5 9.43001L15.1667 2.76334"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-sm text-gray-500">HSA/FSA eligible</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="text-gray-500"
          >
            <path
              d="M5.83333 1.42969V4.09635M11.1667 1.42969V4.09635M14.5 9.42969V4.09635C14.5 3.74273 14.3595 3.40359 14.1095 3.15355C13.8594 2.9035 13.5203 2.76302 13.1667 2.76302H3.83333C3.47971 2.76302 3.14057 2.9035 2.89052 3.15355C2.64048 3.40359 2.5 3.74273 2.5 4.09635V13.4297C2.5 13.7833 2.64048 14.1224 2.89052 14.3725C3.14057 14.6225 3.47971 14.763 3.83333 14.763H9.16667M2.5 6.76302H14.5M11.1667 13.4297L12.5 14.763L15.1667 12.0964"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-sm text-gray-500">Results within a week</span>
        </div>
      </div>
    </div>
  );
}
