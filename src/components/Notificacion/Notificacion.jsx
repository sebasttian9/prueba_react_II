import { toast } from 'sonner';
 
function Notificacion() {
  return (
    <button onClick={() => toast('This is a sonner toast')}>
      Render my toast
    </button>
  );
}


export default Notificacion;