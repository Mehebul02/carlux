interface Props {
  value: string
  onChange: (value: string) => void
}

const SortDropdown = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
    >
      <option value="">Sort by Price</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  )
}

export default SortDropdown