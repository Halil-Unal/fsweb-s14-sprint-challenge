// `Proje` modeli buraya
const db = require("../../data/dbConfig");


async function icindekileriGetir(adim_id){
    const icindekiler = await db("projects")
                              
                              .select("*")
                              
    return icindekiler;                          
}


module.exports={
    icindekileriGetir
}