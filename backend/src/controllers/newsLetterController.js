import newsLetter from "../models/newsLetter.js";


class newsLetterController{
    static async listarnewsLetter(req,res){
        try{
            const listanewsLetter = await newsLetter.find({});
            res.status(200).json(listanewsLetter)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro interno no servidor`})
        }
    }

    static async listarnewsLetterById(req,res){
        try{
            const id = req.params.id
            const newsLetterEncontrado = await newsLetter.findById(id);
            res.status(200).json(newsLetterEncontrado)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na busca por id`})
        }
    }
    
    static async cadastrarnewsLetter(req,res){
        try{
            const newsLetterCadastro = await newsLetter.create(req.body);
            res.status(200).json({message: "newsLetter cadastrado com sucesso", newsLetter: newsLetterCadastro})
        } catch(error){
            res.status(500).json({message:`${error.message} Erro no cadastro`})
        }
    }

    static async patchnewsLetter(req,res){
        try{
            const id = req.params.id
            const newsLetterPatch = await newsLetter.findByIdAndUpdate(id, req.body);
            res.status(200).json(newsLetterPatch)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na atualização por id`})
        }
    }

    static async deletenewsLetter(req,res){
        try{
            const id = req.params.id
            await newsLetter.findByIdAndDelete(id);
            res.status(200).json({message: "newsLetter apagado com sucesso"})      
         } catch(error){
            res.status(500).json({message:`${error.message} Erro na exclusão por id`})
        }
    }


}
export default newsLetterController;
