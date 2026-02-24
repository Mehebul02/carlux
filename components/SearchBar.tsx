interface Props {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search vehicles..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-96 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
    />
  )
}

export default SearchBar