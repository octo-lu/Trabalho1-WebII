import schedule from "../models/schedule.js";


class scheduleController{
    static async listarSchedule(req,res){
        try{
            const listaSchedule = await schedule.find({});
            res.status(200).json(listaSchedule)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro interno no servidor`})
        }
    }

    static async listarscheduleById(req,res){
        try{
            const id = req.params.id
            const scheduleEncontrado = await schedule.findById(id);
            res.status(200).json(scheduleEncontrado)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na busca por id`})
        }
    }
    
    static async cadastrarschedule(req,res){
        try{
            const scheduleCadastro = await schedule.create(req.body);
            res.status(200).json({message: "schedule cadastrado com sucesso", schedule: scheduleCadastro})
        } catch(error){
            res.status(500).json({message:`${error.message} Erro no cadastro`})
        }
    }

    static async patchschedule(req,res){
        try{
            const id = req.params.id
            const schedulePatch = await schedule.findByIdAndUpdate(id, req.body);
            res.status(200).json(schedulePatch)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na atualização por id`})
        }
    }

    static async deleteschedule(req,res){
        try{
            const id = req.params.id
            await schedule.findByIdAndDelete(id);
            res.status(200).json({message: "schedule apagado com sucesso"})      
         } catch(error){
            res.status(500).json({message:`${error.message} Erro na exclusão por id`})
        }
    }


}
export default scheduleController;
