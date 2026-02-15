
import MembershipContent from "./membershipcontent";
import MembershipVisualTabs from "./membershipvisualtabs";

export default function MembershipSection() {
  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <MembershipVisualTabs />

          {/* RIGHT SIDE */}
          <MembershipContent />
        </div>
      </div>
    </section>
  );
}
