import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  name: string;
  imageUrl: string;
  types: Array<{ id: string; name: string; icon?: string | null }>;
}

export const PokemonCard = ({ name, imageUrl, types }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase text-xl text-center">{name}</CardTitle>
        <div className="flex gap-1 flex-wrap justify-center">
          {types.map((type) => (
            <Badge key={type.id} variant="outline" className="uppercase">
              {type.icon} {type.name}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image src={imageUrl} alt={name} width={96} height={96} />
      </CardContent>
      <CardFooter className="border-t justify-between py-3">
        <button className="group">
          <span className="sr-only">Like</span>
          <HeartIcon className="group-hover:fill-red-400" />
        </button>
        <button className="group">
          <span className="sr-only">Add to collection</span>
          <PlusCircleIcon />
        </button>
      </CardFooter>
    </Card>
  );
};
