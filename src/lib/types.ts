import { AreaCompetenza, Categoria, Pietanza, Tag } from "@/app/generated/prisma";

interface ExtendedTag extends Tag{}

export interface ExtendedPietanza extends Pietanza
{
  // Puoi aggiungere qui eventuali campi aggiuntivi o overrides se necessario
  tag: ExtendedTag[];
}

interface ExtendedCategoria extends Categoria {
  Pietanza?: ExtendedPietanza[];
}

export type ExtendedAreaCompetenza = AreaCompetenza & {
  Categoria?: (ExtendedCategoria | null)[];
} | null;

