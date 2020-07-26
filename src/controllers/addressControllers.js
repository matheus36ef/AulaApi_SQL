const Address = require('../models/address');
const User = require('../models/User');


module.exports = {
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