import user from "../models/user.js";

class userController{
    static async listaruser(req,res){
        try{
            const listauser = await user.find({});
            res.status(200).json(listauser)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro interno no servidor`})
        }
    }

    static async listaruserById(req,res){
        try{
            const id = req.params.id
            const userEncontrado = await user.findById(id);
            res.status(200).json(userEncontrado)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na busca por id`})
        }
    }
    
    static async cadastraruser(req,res){
        try{
            const userCadastro = await user.create(req.body);
            res.status(200).json({message: "user cadastrado com sucesso", user: userCadastro})
        } catch(error){
            res.status(500).json({message:`${error.message} Erro no cadastro`})
        }
    }

    static async patchuser(req,res){
        try{
            const id = req.params.id
            const userPatch = await user.findByIdAndUpdate(id, req.body);
            res.status(200).json(userPatch)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na atualização por id`})
        }
    }

    static async deleteuser(req,res){
        try{
            const id = req.params.id
            await user.findByIdAndDelete(id);
            res.status(200).json({message: "user apagado com sucesso"})      
         } catch(error){
            res.status(500).json({message:`${error.message} Erro na exclusão por id`})
        }
    }
    static async login(req,res, next){
        console.log(req.body)
        const {email, password} = req.body
        console.log('aqui')
        const User = await user.findOne({email})
        console.log(User)

        if(User.email == email && User.password == password){
            res.status(200).json(User)

        }else{

            res.status(404).json({'message': 'Usuário não encontrado'})    

        }

        
    }

}
export default userController;
