import type { ProductSpec } from "@/data/products";

export default function SpecsTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-6 py-4 text-sm font-semibold text-white">Specification</th>
            <th className="px-6 py-4 text-sm font-semibold text-white">Details</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={spec.label}
              className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}
            >
              <td className="px-6 py-3.5 text-sm font-medium text-gray-400">
                {spec.label}
              </td>
              <td className="px-6 py-3.5 text-sm text-white">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
