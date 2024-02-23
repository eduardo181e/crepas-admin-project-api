import {Request, Response} from 'express';
import pool from '../../../database';
import jwt, {TokenExpiredError} from 'jsonwebtoken';
import { admin } from '../../../models/models';


class BebidasFriasVentasController {
    // Lista all invoice in current time

    public async list(req: Request, res: Response): Promise<void> {
      if(req.headers['authorization'] === undefined){
          res.status(405).json({message: 'Unauthorized'})
        }else{
          const token:any = req.headers['authorization'];
          const tokenWithoutBearer = token.replace('Bearer ', '');
          
          if (!tokenWithoutBearer) {
            res.status(401).json({ message: 'Unauthorized' });
          }
          try{
          const decodedToken:any = jwt.verify(tokenWithoutBearer, 'secreto-seguro'); // Decodificar el token
          if (!decodedToken) {
            res.status(401).json({ message: 'Invalid token' });
          }
          const adminId = decodedToken.id
            const { fecha, sucursal_id } = req.body;
            const query = 'SELECT * FROM bfv WHERE DATE(created_at) = ? AND sucursal_id = ? AND adminId = ?';
            const ventas: any = await pool.promise().query(query, [fecha, sucursal_id, adminId])
              .then(ventas => ventas[0])
              .catch(err => console.log(err));
  
      res.json(ventas);}catch (error:any) {
        if (error instanceof TokenExpiredError) {
          res.status(401).json({ message: 'Token expired' });
        } else {
          res.status(401).json({ message: 'Unknown Error' });
        }
      }  
  }       
}

      // list date range invoice

    public async listLaps(req: Request, res: Response): Promise<void> {
        if(req.headers['authorization'] === undefined){
            res.status(405).json({message: 'Unauthorized'})
          }else{
            const token:any = req.headers['authorization'];
            const tokenWithoutBearer = token.replace('Bearer ', '');
            
            if (!tokenWithoutBearer) {
              res.status(401).json({ message: 'Unauthorized' });
            }
            try{
            const decodedToken:any = jwt.verify(tokenWithoutBearer, 'secreto-seguro'); // Decodificar el token
            if (!decodedToken) {
              res.status(401).json({ message: 'Invalid token' });
            }
            const adminId = decodedToken.id
              const { fechaInicio, fechaFin, sucursal_id } = req.body;
              const query = 'SELECT * FROM bfv WHERE DATE(created_at) BETWEEN ? AND ? AND sucursal_id = ? AND adminId = ?';
              const ventas: any = await pool.promise().query(query, [fechaInicio, fechaFin, sucursal_id, adminId])
                .then(ventas => ventas[0])
                .catch(err => console.log(err));
    
        res.json(ventas);}catch (error:any) {
          if (error instanceof TokenExpiredError) {
            res.status(401).json({ message: 'Token expired' });
          } else {
            res.status(401).json({ message: 'Unknown Error' });
          }
        }  
    }       
}

 // List one invoice

 public async getOne(req: Request, res: Response): Promise<any> {
  if(req.headers['authorization'] === undefined){
    res.status(405).json({message: 'Unauthorized'})
  }else{
    const token:any = req.headers['authorization'];
    const tokenWithoutBearer = token.replace('Bearer ', '');
    
    if (!tokenWithoutBearer) {
      res.status(401).json({ message: 'Unauthorized' });
    }
    try{
    const decodedToken:any = jwt.verify(tokenWithoutBearer, 'secreto-seguro'); // Decodificar el token
    if (!decodedToken) {
      res.status(401).json({ message: 'Invalid token' });
    }
    const adminId = decodedToken.id
      const id = req.params.id
      const query = 'SELECT * FROM bfv WHERE id = ? AND adminId = ?';
      const ventas: any = await pool.promise().query(query, [id, adminId])
        .then(ventas => ventas[0])
        .catch(err => console.log(err));

res.json(ventas);}catch (error:any) {
  if (error instanceof TokenExpiredError) {
    res.status(401).json({ message: 'Token expired' });
  } else {
    res.status(401).json({ message: 'Unknown Error' });
  }
}  
 }
}

}


const bebidasFriasVentasController = new BebidasFriasVentasController();
export default bebidasFriasVentasController;