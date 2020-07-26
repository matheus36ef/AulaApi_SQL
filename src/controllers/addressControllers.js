const Address = require('../models/address');
const User = require('../models/User');


module.exports = {
    async index (req, res) {
        const { userid } = req.params;

        const user = await User.findByPk(userid, {
            include: { association: 'addresses' }
        });
        return res.json(user);
    },


    async store(req, res) {
        const { userid } = req.params;
        const { zipcode, street, number } = req.body;
    
        const user = await User.findByPk(userid);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            userid,
        });
        return res.json(address);
    }
};