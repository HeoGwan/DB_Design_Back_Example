import express from 'express';
import { AdminService, adminSignin } from '../service/admin';
const router = express.Router();

// 어드민 로그인
router.post('/signin', async (req, res) => {
    try {
        const adminService = new AdminService();
        const data = await adminService.adminSignin(req.body);

        return res.status(200).json({
            status: 4091,
            message: 'success',
            data,
        });
    } catch (e) {
        return res.status(200).json({
            status: 500,
            message: 'server error',
            data: e.message
        });
    }
});

export default router;