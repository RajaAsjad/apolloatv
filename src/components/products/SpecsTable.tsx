import type { ProductSpec } from "@/data/products";

export default function SpecsTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <>
      {/* Mobile: card list */}
      <div className="space-y-3 md:hidden">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {spec.label}
            </p>
            <p className="mt-1 text-sm font-medium text-white">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden overflow-x-auto rounded-2xl border border-white/10 md:block">
        <table className="w-full min-w-[480px] text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-sm font-semibold text-white lg:px-6 lg:py-4">
                Specification
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-white lg:px-6 lg:py-4">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, i) => (
              <tr
                key={spec.label}
                className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-400 lg:px-6 lg:py-3.5">
                  {spec.label}
                </td>
                <td className="px-4 py-3 text-sm text-white lg:px-6 lg:py-3.5">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
