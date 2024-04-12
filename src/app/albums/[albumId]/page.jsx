import { fetchPhotosFromAlbumId } from "@/actions/albumActions";
import PhotoList from "@/components/PhotoList";

export default async function AlbumPage(props) {

  const photos = await fetchPhotosFromAlbumId(props.params.albumId);
  return (
    <div className="Page AlbumsPage">
      <h1>AlbumPage</h1>
      {photos && <PhotoList photos={photos} />}
    </div>
  );
}   // Path: galronel/src/app/albums/page.jsx