import { http } from './http';
import './websocket/client'; 
import './websocket/admin'; 

http.listen(3333, () => console.log('server runnig on port 3333'));