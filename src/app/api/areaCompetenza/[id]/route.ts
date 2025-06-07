import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

import { getMenuFromCache, setMenuInCache } from '@/lib/cache-manager';
import { ExtendedAreaCompetenza } from '@/lib/types';

export const revalidate = 0;

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Parse query parameters from NextRequest
    const searchParams = request.nextUrl.searchParams;
    const details = searchParams.get('details');
    const lng = searchParams.get('lng') || 'it';

    const p = await params;

    // Prova a recuperare dalla cache
    const cachedMenu = await getMenuFromCache(p.id, lng);
    if (cachedMenu) {
      console.log('[Cache] Hit per menu', p.id, lng);
      return NextResponse.json(cachedMenu);
    }

    // Se non in cache, recupera dal database
    console.log('[Cache] Miss per menu', p.id, lng);
    const area: ExtendedAreaCompetenza = await prisma.areaCompetenza.findUnique({
      where: { id: parseInt(p.id) },
      include: details === 'true' ? {
        Categoria: {
          where: {
            AND: [
              { isAttiva: true, isVisibileSuSelfOrder: true },
              {
                Pietanza: {
                  some: { isAttiva: true, isVisibileSuSelfOrder: true }
                }
              }
            ]
          },
          orderBy: [
            { ordineTastoPc: 'asc' },
            { descrizioneLingua1: 'asc' }
          ],
          include: details === 'true' ? {
            Pietanza: {
              where: { isAttiva: true, isVisibileSuSelfOrder: true },
              orderBy: [
                { ordineTastoPc: 'asc' },
                { descrizioneLingua1: 'asc' }
              ],
              include: {
                Tag: true
              }
            }
          } :  undefined
        }
      } : undefined
    });

    // Type assertion after the query
    const typedArea = area as ExtendedAreaCompetenza | null;

    if (!area) {
      return NextResponse.json({ error: 'Area not found' }, { status: 404 });
    }

    // Gestione traduzioni
    if (lng === 'en') {
      area.descrizione = area.descrizioneInglese || area.descrizione;
      area.note = area.noteInglese || area.note;

      if (details === 'true') {
        area.Categoria = area.Categoria?.map((categoria: any) => {
          categoria.descrizioneLingua1 = categoria.descrizioneLingua2 || categoria.descrizioneLingua1;
          categoria.Pietanza = categoria.Pietanza.map((pietanza:any) => {
            pietanza.descrizioneLingua1 = pietanza.descrizioneLingua2 || pietanza.descrizioneLingua1;
            pietanza.note = pietanza.noteLingua2 || pietanza.note;
            return pietanza;
          });
          return categoria;
        });
      }
    }

    // Gestione menu fisso
    if(area.isMenuFisso){
      area.Categoria = area.Categoria?.map((categoria: any)=> {
        categoria.Pietanza = categoria.Pietanza.map((pietanza:any) => {
          pietanza.prezzo = 0;
          return pietanza;
        })
        return categoria;
      })
    }

    // Salva in cache
    await setMenuInCache(p.id, lng, area);

    return NextResponse.json(area);
  } catch (error) {
    console.error('Error fetching area competenza:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// export async function PATCH(request: NextRequest, context: { params: { id: string } }) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   const { id } = context.params;
//   const { descrizione, descrizioneInglese, ordine, note, noteInglese, isAttiva, isMenuFisso, orari } = await request.json();

//   if (!id) {
//     return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
//   }

//   const areaId = parseInt(id);

//   try {
//     const data: any = {};
//     if (isAttiva !== undefined) data.isAttiva = isAttiva;
//     if (descrizione !== undefined) data.descrizione = descrizione;
//     if (ordine !== undefined) data.ordine = ordine;
//     if (note !== undefined) data.note = note;
//     if(noteInglese !== undefined) data.noteInglese = noteInglese;
//     if(descrizioneInglese !== undefined) data.descrizioneInglese = descrizioneInglese;
//     if(isMenuFisso !== undefined) data.isMenuFisso = isMenuFisso;

//     const response = await prismaDB.areaCompetenza.update({
//       where: { id: areaId },
//       data
//     });
//     if (orari && Array.isArray(orari)) {
//       // Elimina gli orari esistenti
//       await prismaDB.orarioArea.deleteMany({
//         where: { areaId }
//       });

//       // Crea i nuovi orari
//       const newOrari = orari.map((orario: { giorno: string; start: string; end: string }) => ({
//         giorno: orario.giorno,
//         start: new Date(`1970-01-01T${orario.start}:00Z`),
//         end: new Date(`1970-01-01T${orario.end}:00Z`),
//         areaId
//       }));

//       await prismaDB.orarioArea.createMany({
//         data: newOrari
//       });
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Error updating area competenza:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
