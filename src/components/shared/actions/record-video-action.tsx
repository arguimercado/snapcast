import { ICONS } from "@/constants";
import { Button } from "../../ui/button";
import Image from "next/image";

const RecordVideoAction = () => {
  return (
      <Button  size="sm" className="bg-rose-800 text-rose-100 hover:bg-rose-800/20 border-rose-600/30 hover:border-rose-800/50">
        <Image src={ICONS.record} alt="Record Icon"  width={16} height={16} />
        <span>Record Video</span>
      </Button>
      );
};
export default RecordVideoAction;
