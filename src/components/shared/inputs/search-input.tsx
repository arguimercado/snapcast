import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

const SearchInput = () => {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search your videos, tags and folder" />
      <InputGroupAddon>
         <SearchIcon size={16} />
      </InputGroupAddon>
    </InputGroup>
  )
}
export default SearchInput