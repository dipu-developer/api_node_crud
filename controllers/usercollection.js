import ApiModule from "../modules/api.js"
class UserCollections{
    static getAllData = async (req,res)=>{
        const result = await ApiModule.find()
        res.send(result)
    }
    static createData = async (req,res)=>{
        try {
            const {name, age, fees} = req.body
            const doc = new ApiModule({
                name:name,
                age:age,
                fees:fees
            })
            const result = await doc.save()
            res.send(result)
        } catch (error) {
            res.status(200).send(error)
        }
        res.send('create ')
    }
    static getSingleDataById = async (req,res)=>{
        try {
            console.log(req.params.id)
            const result = await ApiModule.findOne({_id:req.params.id})
            if (result != null){
                res.send(result)
            }else{
                res.send('Data Not Present')
            }
            // console.log(result)

            res.send('create ')
        } catch (error) {
            res.send(error)
        }
        res.send('create ')
    }
    static updateSingleDataById = async (req,res)=>{
        try {
            const result = await ApiModule.findByIdAndUpdate(req.params.id,req.body)
            res.send(result)
        } catch (error) {
            res.send(error)
            
        }
    }
    static deleteSingleDataById = async (req,res)=>{
        try {
            const result = await ApiModule.findByIdAndDelete(req.params.id,req.body)
            res.send(result)
        } catch (error) {
            res.send(error)
            
        }
    }
}

export default UserCollections