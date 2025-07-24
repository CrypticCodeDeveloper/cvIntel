
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectInput = ({
    placeholder,
    label,
    options = [],
}) => {
  return (
    <Select>
      <SelectTrigger className="min-w-[200px] rounded-none border border-gray-800">
        <SelectValue className="text-blue-400 placeholder:text-blue-400" placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {
            options.map((option) => <SelectItem value={option?.value}>{option?.label}</SelectItem>)
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectInput