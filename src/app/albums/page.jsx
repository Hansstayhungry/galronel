import Link from 'next/link';
import { fetchAlbumsByUserId } from '@/actions/albumActions';
import AlbumList from '@/components/AlbumList';

export default async function AlbumPage() {

  let albums;
  try {
    albums = await fetchAlbumsByUserId();
  } catch (error) {
    console.error(error);
    albums = [];
  }
  
  return (
    <div>
      <h1>AlbumPage</h1>
      <AlbumList albums={albums} />
    </div>
  );
}