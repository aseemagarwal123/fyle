var {client}=require('../server/db')
const jwt =require("jsonwebtoken");
async function getBankdetails(req, res, next) {
const query = {
name: 'fetch-bankdetails',
text: 'SELECT * FROM (branches JOIN banks ON ((branches.bank_id = banks.id))) where branches.ifsc=$1 and branches.branch=$2 ',
values: [req.params.ifsc,req.params.branch]}
client.query(query,(error, response) => {
    if (error)
    console.log(error);
    res.send({result:response.rows[0]})
});

}

async function getBranchdetails(req, res, next) {
    const query = {
    name: 'fetch-branchdetails',
    text: 'SELECT * FROM (branches JOIN banks ON (branches.bank_id = banks.id)) where banks.name=$2 and branches.city=$1 LIMIT $3 OFFSET $4',
    values: [req.params.city,req.params.bank_name,req.query.limit,req.query.offset]
}
    client.query(query,(error, response) => {
        if (error)
        console.log(error);
        res.send({result:response.rows})
    });

    }

async function gettoken(req,res,next){

    const payLoad = { uid:Math.random(), exp:Math.floor(Date.now()/1000)+5*24*60*60};
    const token = jwt.sign(payLoad, 'secretkey');
    res.send({token:token})

}

module.exports = {
    getBankdetails,
    getBranchdetails,
    gettoken

};

