import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Track from './Track'

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <>
      {tracks.map((track) => (
        <Track
          key={track.id}
          tracks={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </>
  )
}

export default TrackList
