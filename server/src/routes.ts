import express from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const upload = multer(multerConfig); 

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', 
    upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(), //sugestão de melhoria implementar .regex() para garantir 1,2,3
        })
    }, {
        abortEarly: false
    }), 
    pointsController.create
);

export default routes;

//service patterns
//Tudo que mexe com banco de dados poderia ser usado em ...
//Repository pattern(Data mapper)


//-------------
//convenções da comunidade node? métodos
//index() exibir listagem
//show() exibir um único registro
//create()= store(), update(), delete() = destroy()