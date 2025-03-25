//extra to store chat title stored



// import {Router} from 'express';
// import {body} from 'express-validator';
// import * as projectController from '../controllers/Project.js'
// import * as authMiddleware from '../middleware/auth.js'

// const router=Router();

// router.post('/create',
//     authMiddleware.auth, 
//     body('name').isString().withMessage('name is required'),
//     projectController.createProject
// )

// router.get('/all',
//     authMiddleware.auth,
//     projectController.getAllProject,
// )

// router.put('/add-user',
//     authMiddleware.auth,
//     body('projectId').isString().withMessage('projectId must be string').bail(),
//     body('users')
//         .isArray({min:1}).withMessage('user must be array of string').bail()
//         .custom((users)=>users.every(user=>typeof user=='string'))
//         .withMessage('each user must be string'),
//     projectController.addUserToProject,
// )

// router.get('/get-project/:projectId',
//     authMiddleware.auth,
//     projectController.getProjectById,
// )

// export default router;