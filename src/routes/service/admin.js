import db from "../../db";

export class AdminService {
    async adminSignin(adminInfo) {
        try {
            const { id, pw } = adminInfo;
    
            const signinQuery = 'select * from admin where admin_id = ?';
            const [[data]] = await db.query(signinQuery, [id]);
    
            if (!data) {
                throw new Error(`no has admin`);
            }
    
            if (data.pw !== pw) {
                throw new Error(`invalid pw`);
            }
    
            req.session.admin = data;
            req.session.save(() => {
                return data;
            });
        } catch (e) {
            console.log(`[AdminService][adminSignin] Error : ${e.message}`);
            throw e;
        }
    }
}