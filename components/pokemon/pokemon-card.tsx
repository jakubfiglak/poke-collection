import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { LikeButton } from "./like-button";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  imageUrl: string;
  isLiked?: boolean;
  types: Array<{ id: string; name: string; icon?: string | null }>;
}

export const PokemonCard = ({ id, name, imageUrl, isLiked, types }: Props) => {
  return (
    <Card>
      <Link href={`/pokemon/${id}`}>
        <CardHeader>
          <CardTitle className="uppercase text-xl text-center">
            {name}
          </CardTitle>
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
      </Link>

      <CardFooter className="border-t justify-between py-3">
        <LikeButton pokemonId={id} isLiked={isLiked} />
      </CardFooter>
    </Card>
  );
};
